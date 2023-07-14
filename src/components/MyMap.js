import React, { useEffect, useRef } from "react";

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
  const mapElement = useRef(null);

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

  return <div ref={mapElement} style={{ width: '100%', height: '600px' }} />;
}

export default MyMap;
