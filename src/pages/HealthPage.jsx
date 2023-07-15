import React, { useEffect, useState } from "react";
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
  const [address,setAddress] = useState('');
  const navigate = useNavigate();

  console.log(latitude, longitude)
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
        const addressComponents = data.results[0].address_components;
        // const desiredAddress = address.split(' ').slice(2).join(' ');
        let area;

        for (const component of addressComponents) {
          if (component.types.includes('administrative_area_level_2')) {
            // '구' 단위가 있는 경우
            if (component.types.includes('sublocality')) {
              area = component.long_name;
            } else {
              area = component.short_name;
            }
            break;
          } else if (component.types.includes('sublocality')) {
            // '동' 단위인 경우
            area = component.long_name;
          }
        }
        setAddress(area);
        console.log('주소:', area);

      } else {
        console.error('주소를 가져오지 못했습니다.');
      }
    } catch (error) {
      console.error('API 요청 중 오류가 발생했습니다:', error);
    }
  }

  // async function getReverseGeocoding(latitude, longitude) {
  //   const clientId = 'uy1qdrrbs3'; // Naver Maps Reverse Geocoding API 클라이언트 아이디
  //   const clientSecret = '7ESPTMUl2iGbHltoFDIyQkrhBNgfrbdfsC16iAoL'; // Naver Maps Reverse Geocoding API 클라이언트 시크릿
  //   const url = `/map-reversegeocode/v2/gc?coords=${longitude},${latitude}&sourcecrs=epsg:4326&orders=legalcode,addr,admcode,roadaddr&output=json`;

  //   try {
  //     const response = await fetch(url, {
  //       headers: {
  //         'X-NCP-APIGW-API-KEY-ID': clientId,
  //         'X-NCP-APIGW-API-KEY': clientSecret
  //       }
  //     });
  //     const data = await response.json();

  //     if (data.status === 'OK' && data.results.length > 0) {
  //       const address = data.results
  //       console.log('주소:', address);
  //     } else {
  //       console.error('주소를 가져오지 못했습니다.');
  //     }
  //   } catch (error) {
  //     console.error('API 요청 중 오류가 발생했습니다:', error);
  //   }
  // }



  async function logJSONData() {
    const response = await fetch(`${PUBLIC_URL}/B490001/sjHptMcalPstateInfoService/getSjJijeongHptChakgiList?serviceKey=QTM%2Bsk32UMfVLD9pw13UXm%2FIAaDOGy3I0zKkbgdbppFTEg95hFdZpOOkgoesQwT48dig8oY7f3R9PC3%2Fw%2Fm8KQ%3D%3D&addr=${address}`)
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
    logJSONData()
    getCurrentLocation();
  }, [address]);

  useEffect(() => {
    if (latitude && longitude) {
      console.log(latitude, longitude)
      getAddressFromCoordinates(latitude, longitude);
      // getReverseGeocoding(latitude, longitude)
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