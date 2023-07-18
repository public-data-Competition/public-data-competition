import { Skeleton } from "@mui/material";
import React, { useEffect, useRef } from "react";
import { useRecoilValue } from "recoil";
import { addressState, latitudeState, longitudeState } from "../store/store";

function KakaoMap({setLatitude,setLongitude}) {
  const addressList = useRecoilValue(addressState);
  const latitude = useRecoilValue(latitudeState);
  const longitude = useRecoilValue(longitudeState);
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    if (latitude && longitude && window.kakao) {
      loadMapScript();
    }
  }, [latitude, longitude, addressList]);

  useEffect(() => {
    if (addressList.length > 0) {
      const firstAddress = addressList[0];
      fetch(`https://dapi.kakao.com/v2/local/search/address.json?query=${encodeURIComponent(firstAddress)}`, {
        headers: {
          Authorization: "KakaoAK 85657c5ce4798aafc9357c6d2bfaa017", // Replace with your Kakao REST API key
        },
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.documents && data.documents.length > 0) {
            const coordinates = data.documents[0].address;
            const latlng = new window.kakao.maps.LatLng(coordinates.y, coordinates.x);
  
            if (mapRef.current) {
              mapRef.current.setCenter(latlng);
            }
          } else {
            console.error("API 요청 결과에 주소 정보가 없습니다.");
          }
        })
        .catch((error) => {
          console.error("API 요청 중 오류가 발생했습니다:", error);
        });
    }
  }, [addressList]);

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
    mapRef.current = map;
    
    addressList.forEach((address) => {
      fetch(`https://dapi.kakao.com/v2/local/search/address.json?query=${encodeURIComponent(address)}`, {
        headers: {
          Authorization: "KakaoAK 85657c5ce4798aafc9357c6d2bfaa017", // Replace with your Kakao REST API key
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
          if (data.documents && data.documents.length > 0) {
            const coordinates = data.documents[0].address;
            const latlng = new window.kakao.maps.LatLng(coordinates.y, coordinates.x);


            // 마커를 생성하여 지도에 표시합니다.
            const marker = new window.kakao.maps.Marker({
              position: latlng,
              map: map,
            });


            const content = address ? `<div style="width:150px;text-align:center;padding:6px 0;">${address}</div>` : ''
            // 인포윈도우를 생성합니다.
            const infowindow = new window.kakao.maps.InfoWindow({
              content: content,
            });

            // 마커에 마우스 이벤트를 등록하여 인포윈도우를 표시하고 숨깁니다.
            window.kakao.maps.event.addListener(marker, "mouseover", () => {
              infowindow.open(map, marker);
            });
            window.kakao.maps.event.addListener(marker, "mouseout", () => {
              infowindow.close();
            });
          } else {
            console.error("API 요청 결과에 주소 정보가 없습니다.");
          }

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
          <div ref={mapContainerRef} style={{ width: "100%", height: "100vh" }}></div>
        </div>
      ) : (
        <Skeleton width="100%" height="100vh" />
      )}
    </>
  );
}

export default KakaoMap;
