import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search as SearchIcon } from '@mui/icons-material';
import { Divider, Box, Checkbox, FormControlLabel, FormGroup, Typography, Grid, Skeleton, Modal, Button, TextField, InputAdornment, IconButton, } from '@mui/material';
import ModalComponent from '../components/ModalComponent';
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

const HealingPage = () => {
  const [searchInput, setSearchInput] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();

  const filteredItems = items.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(searchInput.toLowerCase());
    const matchesCategory = selectedCategory === "" || item.address === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleFilter = () => {
    setOpenModal(true);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: '50px' }}>

      <Grid container spacing={2}>
        <Grid item xs={8} sx={{ display: 'flex', alignItems: 'center' }}>
          <TextField
            label="찾고 있는 활동을 검색해주세요."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={1} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', p: '1' }}>
          <button
            onClick={handleFilter}
            style={{ borderRadius: '50%', border: 'none', padding: '8px', }}
          >
            <img alt="filter" src="/filter.png" style={{ width: '20px' }} />
          </button>
        </Grid>

        {filteredItems.map((item) => (
          <Grid item xs={3.5} key={item.id} sx={{ backgroundColor: 'white', m: '4px', textAlign: 'left', minWidth: '200px', height: '200px', borderRadius: '12px', p: 2 }}>
            <span style={{ color: 'white', textAlign: 'left', backgroundColor: '#273829', borderRadius: '12px', fontSize: '13px', padding: "2px 4px" }}>{item.address}</span>
            <Typography sx={{ m: '12px 0', fontWeight: 'bold', color: '#6C746C', fontSize: '17px' }}>{item.title}</Typography>
            <Typography sx={{ fontWeight: 'bold', color: '#6C746C', fontSize: '15px' }}>스케이트보드 강의 스케이트보드 강의 스케이트보드 강의</Typography>
            <Typography onClick={() => alert('자세히보기')} color="#929090" textAlign="right" fontSize={13} m="12px 0">자세히 보기</Typography>
          </Grid>
        ))}
      </Grid>

      {openModal && (<ModalComponent open={openModal} onClose={closeModal} setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory}/>)}
    </Box>
  );
}

export default HealingPage;