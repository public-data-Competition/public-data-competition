/*global kakao */
import React, { useState, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { addressState } from "../store/store";
// import "./kakaomap.css";

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


  useEffect(() => {
    // mapscript();
    maptest()
  }, []);

  const maptest = () => {
    let mapContainer = document.getElementById('map') // 지도를 표시할 div 
    let mapOption = {
      center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
      level: 3 // 지도의 확대 레벨
    };


    // 지도를 생성합니다
    const map = new kakao.maps.Map(container, options);
    // 주소-좌표 변환 객체를 생성합니다
    const geocoder = new kakao.maps.services.Geocoder();
    // 주소로 좌표를 검색합니다

    // 주소로 좌표를 검색합니다
    geocoder.addressSearch('제주특별자치도 제주시 첨단로 242', function (result, status) {

      // 정상적으로 검색이 완료됐으면 
      if (status === kakao.maps.services.Status.OK) {

        var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

        // 결과값으로 받은 위치를 마커로 표시합니다
        var marker = new kakao.maps.Marker({
          map: map,
          position: coords
        });

        // 인포윈도우로 장소에 대한 설명을 표시합니다
        var infowindow = new kakao.maps.InfoWindow({
          content: '<div style="width:150px;text-align:center;padding:6px 0;">우리회사</div>'
        });
        kakao.maps.event.addListener(
          marker,
          "mouseover",
          makeOverListener(map, marker, infowindow)
        );
        kakao.maps.event.addListener(
          marker,
          "mouseout",
          makeOutListener(infowindow)
        );

        // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
        map.setCenter(coords);
      }
    });
  }




  // const mapscript = () => {
  //   let container = document.getElementById("map");
  //   let options = {
  //     center: new kakao.maps.LatLng(37.624915253753194, 127.15122688059974),
  //     level: 5, //지도의 확대 레벨
  //   };
  //   // 지도를 생성합니다
  //   const map = new kakao.maps.Map(container, options);

  //   markerdata.forEach((el) => {
  //     // 마커를 생성합니다
  //     const marker = new kakao.maps.Marker({
  //       //마커가 표시 될 지도
  //       map: map,
  //       //마커가 표시 될 위치
  //       position: new kakao.maps.LatLng(el.lat, el.lng),
  //     });
  //     // 마커에 표시할 인포윈도우를 생성합니다
  //     var infowindow = new kakao.maps.InfoWindow({
  //       content: el.title, // 인포윈도우에 표시할 내용
  //     });
  //     // 마커에 mouseover 이벤트와 mouseout 이벤트를 등록합니다
  //     // 이벤트 리스너로는 클로저를 만들어 등록합니다
  //     // 클로저를 만들어 주지 않으면 마지막 마커에만 이벤트가 등록됩니다
  //     kakao.maps.event.addListener(
  //       marker,
  //       "mouseover",
  //       makeOverListener(map, marker, infowindow)
  //     );
  //     kakao.maps.event.addListener(
  //       marker,
  //       "mouseout",
  //       makeOutListener(infowindow)
  //     );
  //   });
  // };


  // 인포윈도우를 표시하는 클로저를 만드는 함수입니다
  function makeOverListener(map, marker, infowindow) {
    return function () {
      infowindow.open(map, marker);
    };
  }

  // 인포윈도우를 닫는 클로저를 만드는 함수입니다
  function makeOutListener(infowindow) {
    return function () {
      infowindow.close();
    };
  }

  return (
    <div className="kakaomap">
      <div id="map" style={{ width: "100vw", height: "100vh" }}></div>
    </div>
  );
}

export default KakaoMap;