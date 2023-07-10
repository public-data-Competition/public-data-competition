import React, { useEffect, useState  } from "react";
import { useNavigate } from 'react-router-dom';
import { Box, Checkbox, FormControlLabel, FormGroup, Skeleton } from '@mui/material';

import { PUBLIC_URL } from '../global_variables';
import useHttpRequest from '../hook/use-http';
import KakaoMap from '../components/KakaoMap';
import MyNaverMap from "../components/MyMap";

const HealthPage = () => {
  const { isLoading, sendGetRequest } = useHttpRequest();
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const navigate = useNavigate();

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const { latitude, longitude } = position.coords;
          setLatitude(latitude);
          setLongitude(longitude);
        },
        error => {
          console.error('Error:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  };

  async function getAddressFromCoordinates(latitude, longitude) {
    const apiKey = 'AIzaSyABxVUq6e0YgqPRTIycQV48vWqm4ewtVAU'; // Google Maps Geocoding API 키
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.status === 'OK' && data.results.length > 0) {
        const address = data.results[0].formatted_address;
        console.log('주소:', address);
        // 여기에서 주소를 원하는 방식으로 출력하거나 상태(state)에 저장할 수 있습니다.
      } else {
        console.error('주소를 가져오지 못했습니다.');
      }
    } catch (error) {
      console.error('API 요청 중 오류가 발생했습니다:', error);
    }
  }

  async function logJSONData() {
    const response = await fetch(`${PUBLIC_URL}/B490001/sjHptMcalPstateInfoService/getSjJijeongHptChakgiList?serviceKey=QTM%2Bsk32UMfVLD9pw13UXm%2FIAaDOGy3I0zKkbgdbppFTEg95hFdZpOOkgoesQwT48dig8oY7f3R9PC3%2Fw%2Fm8KQ%3D%3D`)
      .then(response => response.text())
      .then(xmlData => {
        // 여기서 xmlData는 XML 형식의 문자열 데이터입니다.
        // XML 데이터를 파싱하여 필요한 정보를 추출할 수 있습니다.
        // 예를 들어, XML 파서를 사용하여 값을 추출하거나 XPath를 활용할 수 있습니다.
        // 아래는 예시 코드입니다.

        // XML 파서 생성
        const parser = new DOMParser();

        // XML 문자열을 파싱하여 XML 문서 객체 생성
        const xmlDoc = parser.parseFromString(xmlData, 'application/xml');
        console.log(xmlDoc)
        // 필요한 정보 추출
        const elements = xmlDoc.getElementsByTagName('item');
        for (let i = 0; i < elements.length; i++) {
          const value = elements[i].textContent;
          console.log(value);
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  useEffect(() => {
    // logJSONData()
    getCurrentLocation();
  }, []);

  useEffect(() => {
    if (latitude && longitude) {
      console.log(latitude, longitude)
      getAddressFromCoordinates(latitude, longitude);
    }
  }, [latitude, longitude]);


  return (
    <>
      <FormGroup sx={{ display: 'block' }}>
        <FormControlLabel control={<Checkbox defaultChecked />} label="산재병원 의료 현황정보" />
        <FormControlLabel control={<Checkbox />} label="근로자 건강센터 현황" />
        <FormControlLabel control={<Checkbox />} label="근로자 건강증진활동 관련 민관전문기관" />
        <FormControlLabel control={<Checkbox />} label="산재재활기관관리정보" />
      </FormGroup>
      <Box height="900px" >
        {/* <KakaoMap /> */}
        <MyNaverMap />
        {/* <Skeleton width="100vw" height="100vh"></Skeleton> */}
      </Box>
    </>
  );
}

export default HealthPage;