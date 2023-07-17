import React, { useEffect, useRef } from "react";
import { useRecoilValue } from "recoil";
import { addressState } from "../store/store";
import useHttpRequest from '../hook/use-http';
import { ADDRESS_URL,GEO_SERVICE_KEY } from '../global_variables';
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

function MyMap() {
  const { isLoading, sendGetRequest } = useHttpRequest();
  const mapElement = useRef(null);
  const addressList = useRecoilValue(addressState);

  // const apiKey = 'AIzaSyABxVUq6e0YgqPRTIycQV48vWqm4ewtVAU'; // Google Maps Geocoding API 키
  useEffect(() => {
    if (addressList && addressList.length > 0) {
      addressList.forEach((address) => {
        const url = `/req/address?service=address&request=getcoord&version=2.0&crs=epsg:4326&address=${encodeURIComponent(address)}&refine=false&simple=false&format=json&errorFormat=json&type=road&key=${GEO_SERVICE_KEY}`;
  
        fetch(url)
          .then((response) => response.json())
          .then((data) => {
            console.log(data)
            // if (data.response && data.response.status === 'OK') {
            //   const result = data.response.result;
            //   if (result && result.point) {
            //     const latitude = result.point.y;
            //     const longitude = result.point.x;
            //     console.log(`주소: ${address}`);
            //     console.log(`좌표: (${latitude}, ${longitude})`);
            //     // 좌표를 활용하여 추가적인 작업 수행 가능
            //   } else {
            //     console.error('주소를 변환할 수 없습니다.');
            //   }
            // } else {
            //   console.error('API 응답에서 오류가 발생했습니다.');
            // }
          })
          .catch((error) => {
            console.error('API 요청 중 오류가 발생했습니다:', error);
          });
      });
    }
  }, [addressList]);

  useEffect(() => {
    const { naver } = window;
    if (!mapElement.current || !naver) return;

    const mapOptions = {
      zoom: 14,
      zoomControl: true,
      zoomControlOptions: {
        position: naver.maps.Position.TOP_RIGHT,
      },
    };

    const map = new naver.maps.Map(mapElement.current, mapOptions);

    markerdata.forEach((mark) => {
      const markerOptions = {
        position: new naver.maps.LatLng(mark.lat, mark.lng),
        map: map,
        title: mark.title,
      };

      const marker = new naver.maps.Marker(markerOptions);

      naver.maps.Event.addListener(marker, 'click', () => {
        alert(marker.getTitle());
      });
    });
  }, []);

  return (
    <>
    {!isLoading && (
      <div ref={mapElement} style={{ width: '100%', height: '600px' }} />
    )}
    </>
  )
}

export default MyMap;
