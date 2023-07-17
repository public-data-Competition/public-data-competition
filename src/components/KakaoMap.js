import { Skeleton } from "@mui/material";
import React, { useEffect, useRef } from "react";
import { useRecoilValue } from "recoil";
import { addressState, latitudeState, longitudeState } from "../store/store";

const markerdata = [
  {
    title: "콜드스퀘어",
    lat: 37.62197524055062,
    lng: 127.16017523675508,
  },
  {
    title: "하남돼지집",
    lat: 37.620842424005616,
    lng: 127.1583774403176,
  },
  {
    title: "수유리우동",
    lat: 37.624915253753194,
    lng: 127.15122688059974,
  },
  {
    title: "맛닭꼬",
    lat: 37.62456273069659,
    lng: 127.15211256646381,
  },
];

function KakaoMap() {
  const addressList = useRecoilValue(addressState);
  const latitude = useRecoilValue(latitudeState);
  const longitude = useRecoilValue(longitudeState);
  const mapContainerRef = useRef(null);

  useEffect(() => {
    if (latitude && longitude && window.kakao) {
      loadMapScript();
    }
  }, [latitude, longitude, addressList]);

  const loadMapScript = () => {
    if (!window.kakao) {
      // Kakao Maps API 스크립트를 동적으로 생성하여 로드합니다.
      const script = document.createElement("script");
      script.src = "//dapi.kakao.com/v2/maps/sdk.js?appkey=8e610c53cbec3463a750c7cbf0e5b00c&libraries=services";
      script.onload = mapScriptLoaded;
      document.head.appendChild(script);
    } else {
      mapScriptLoaded();
    }
  };

  const mapScriptLoaded = () => {
    // Kakao Maps API가 로드된 후에 실행되어야 할 내용을 여기에 작성합니다.
    mapscript();
  };

  const mapscript = () => {
    const container = mapContainerRef.current;
    const options = {
      center: new window.kakao.maps.LatLng(latitude, longitude),
      level: 5,
    };

    const map = new window.kakao.maps.Map(container, options);

    addressList.forEach((address) => {
      fetch(`https://dapi.kakao.com/v2/local/search/address.json?query=${encodeURIComponent(address)}`, {
        headers: {
          Authorization: "KakaoAK 85657c5ce4798aafc9357c6d2bfaa017", // Replace with your Kakao REST API key
        },
      })
        .then((response) => response.json())
        .then((data) => {
          
          const coordinates = data.documents[0].address;
          const latlng = new window.kakao.maps.LatLng(coordinates.y, coordinates.x);

          // 마커를 생성하여 지도에 표시합니다.
          const marker = new window.kakao.maps.Marker({
            position: latlng,
            map: map,
          });

          // 인포윈도우를 생성합니다.
          const infowindow = new window.kakao.maps.InfoWindow({
            content: address,
          });

          // 마커에 마우스 이벤트를 등록하여 인포윈도우를 표시하고 숨깁니다.
          window.kakao.maps.event.addListener(marker, "mouseover", () => {
            infowindow.open(map, marker);
          });
          window.kakao.maps.event.addListener(marker, "mouseout", () => {
            infowindow.close();
          });
        })
        .catch((error) => {
          console.error("API 요청 중 오류가 발생했습니다:", error);
        });
    });
  };

  return (
    <>
      {latitude && longitude ? (
        <div className="kakaomap">
          <div ref={mapContainerRef} style={{ width: "100vw", height: "100vh" }}></div>
        </div>
      ) : (
        <Skeleton width="100vw" height="100vh" />
      )}
    </>
  );
}

export default KakaoMap;
