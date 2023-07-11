import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Divider, Box, Checkbox, FormControlLabel, FormGroup, Typography, Grid, Skeleton, } from '@mui/material';

const HealingPage = () => {
  const navigate = useNavigate();

  const items = [
    {
      id: 1,
      title: '고베규카츠 서울 강남점',
      address: '강남구',
      description: '품질 좋은 소고기를 사용한 일본 전통식 규카츠 전문점입니다.브레이크 타임없이 연중무휴 운영합니다.',
      review: 1310,
      heart: 480,
    },
    {
      id: 2,
      title: '스시소라 광화문점',
      address: '광화문',
      description: '코우지 셰프가 운영하는 미들급 스시 오마카세',
      review: 2538,
      heart: 25,
    },
    {
      id: 3,
      title: '조리인',
      address: '압구정로데오',
      description: '압구정로데오 극강 가성비 스시야',
      review: 419,
      heart: 41,
    },
    {
      id: 4,
      title: '고베규카츠 서울 강남점',
      address: '강남구',
      description: '품질 좋은 소고기를 사용한 일본 전통식 규카츠 전문점입니다.브레이크 타임없이 연중무휴 운영합니다.',
      review: 1310,
      heart: 480,
    },
    {
      id: 5,
      title: '라브리크 서울',
      address: '강남구',
      description: '뉴트럴 뉴 브런치, 그리고 커피와 와인 Light but not light 가볍지만 가볍지 않은 즐거움을 선사하겠습니다.',
      review: 78,
      heart: 22,
    },
  ]

  return (
    <Box sx={{display:'flex',justifyContent:'center', mt:'50px'}}>
      <div>
        <Typography textAlign="left" sx={{ color: '#8E8E8E' }}>위치 지정</Typography><br /><br />
        <FormGroup>
          <FormControlLabel control={<Checkbox defaultChecked />} label="직장인 동호회" sx={{ color: '#8E8E8E' }} />
          <FormControlLabel control={<Checkbox defaultChecked />} label="주변 맛집" sx={{ color: '#8E8E8E' }} />
          <FormControlLabel control={<Checkbox defaultChecked />} label="원데이 클래스" sx={{ color: '#8E8E8E' }} />
          <FormControlLabel control={<Checkbox defaultChecked />} label="액티비티" sx={{ color: '#8E8E8E' }} />
        </FormGroup>
      </div>
      <center>
        {items.map((item) => (
          <Grid key={item.id} sx={{ display: 'flex', justifyContent:'space-between'  }}>
            <Grid item xs={2}>
              <Skeleton variant="rounded" height={60} width={60} />
            </Grid>
            <Grid item xs={8} sx={{ textAlign: 'left'}}>
              <div style={{display:'flex'}}>
                <Typography sx={{mr:'10px', fontWeight:'bold'}}>{item.title}</Typography>
                <Typography color="#929090">{item.address}</Typography>
              </div>
              <Typography>{item.description}</Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography color="#929090" fontSize={13}>후기 {item.review}</Typography>
              <Typography color="#929090" fontSize={13}>단골 {item.heart}</Typography>
            </Grid>
          </Grid>
        ))}
      </center>
    </Box>
  );
}

export default HealingPage;