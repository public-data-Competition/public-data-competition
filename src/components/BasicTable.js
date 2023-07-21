import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from "recoil";

import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { Button, Checkbox,Table,TableBody,TableContainer,TableHead,TableRow,Paper,styled } from '@mui/material';
import { totalScoreState } from "../store/store";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.dark,
    color: theme.palette.common.contrastText,
    borderLeft: `1px solid ${theme.palette.common.main}`,
    fontWeight: '600'
  },
  [`&.${tableCellClasses.body}`]: {
    borderLeft: `1px solid #c5dad3`,
    borderBottom: `1px solid #c5dad3`,
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    // backgroundColor: theme.palette.action.hover,
  },
  '&: td, th': {
    borderLeft: `1px solid ${theme.palette.common.main}`,
  },
}));

// function createData(name, Not, Rarely, Occasionally, Frequently, frequently) {
//   return { name, Not, Rarely, Occasionally, Frequently, frequently };
// }
function createData(name) {
  return { name, checkedValue: null };
}

const rows = [
  createData('최근 1개월 동안, 예상치 못했던 일 때문에 당황했던 적이 얼마나 있었습니까?', false, false, false, false, false),
  createData('최근 1개월 동안, 인생에서 중요한 일들을 조절할 수 없다는 느낌을 얼마나 경험하였습니까?', false, false, false, false, false),
  createData('최근 1개월 동안, 신경이 예민해지고 스트레스를 받고 있다는 느낌을 얼마나 경험하였습니까?', false, false, false, false, false),
  createData('최근 1개월 동안, 당신의 개인적 문제들을 다루는데 있어서 얼마나 자주 자신감을 느끼셨습니까?', false, false, false, false, false),
  createData('최근 1개월 동안, 일상의 일들이 당신의 생각대로 진행되고 있다는 느낌을 얼마나 경험하였습니까?', false, false, false, false, false),
  createData('최근 1개월 동안, 당신이 꼭 해야 하는 일을 처리할 수 없다고 생각한 적이 얼마나 있었습니까?', false, false, false, false, false),
  createData('최근 1개월 동안, 일상생활의 짜증을 얼마나 자주 잘 다스릴 수 있었습니까?', false, false, false, false, false),
  createData('최근 1개월 동안, 최상의 컨디션이라고 얼마나 자주 느끼셨습니까?', false, false, false, false, false),
  createData('최근 1개월 동안, 당신이 통제할 수 없는 일 때문에 화가 난 경험이 얼마나 있었습니까?', false, false, false, false, false),
  createData('최근 1개월 동안, 어려운 일들이 너무 많이 쌓여서 극복하지 못할 것 같은 느낌을 얼마나 자주 경험하셨습니까?', false, false, false, false, false),
];

export default function BasicTable() {
  const [tableRows, setTableRows] = useState(rows);
  const [totalScore, setTotalScore] = useRecoilState(totalScoreState);
  const navigate = useNavigate();

  console.log(tableRows)
  const scoreMap = {
    1: { 'Not': 0, 'Rarely': 1, 'Occasionally': 2, 'Frequently': 3, 'frequently': 4 },
    2: { 'Not': 0, 'Rarely': 1, 'Occasionally': 2, 'Frequently': 3, 'frequently': 4 },
    3: { 'Not': 0, 'Rarely': 1, 'Occasionally': 2, 'Frequently': 3, 'frequently': 4 },
    4: { 'Not': 4, 'Rarely': 3, 'Occasionally': 2, 'Frequently': 1, 'frequently': 0 },
    5: { 'Not': 4, 'Rarely': 3, 'Occasionally': 2, 'Frequently': 1, 'frequently': 0 },
    6: { 'Not': 0, 'Rarely': 1, 'Occasionally': 2, 'Frequently': 3, 'frequently': 4 },
    7: { 'Not': 4, 'Rarely': 3, 'Occasionally': 2, 'Frequently': 1, 'frequently': 0 },
    8: { 'Not': 4, 'Rarely': 3, 'Occasionally': 2, 'Frequently': 1, 'frequently': 0 },
    9: { 'Not': 0, 'Rarely': 1, 'Occasionally': 2, 'Frequently': 3, 'frequently': 4 },
    10: { 'Not': 0, 'Rarely': 1, 'Occasionally': 2, 'Frequently': 3, 'frequently': 4 },
  };

  // 각 체크박스에 해당하는 점수를 계산하는 함수
  const calculateScore = (index, value) => {
    const field = value || null;
    const score = scoreMap[index][field] || 0;
    return score;
  };

  const handleChange = (index, field) => (event) => {
    const value = event.target.checked ? field : null;
    console.log(index, value)
    const newRows = [...tableRows];
    newRows[index].checkedValue = value;

    // 각 체크박스에 해당하는 값을 기반으로 점수를 계산하여 저장
    const score = calculateScore(index + 1, value); // 체크박스의 index는 0부터 시작하므로 +1을 해줍니다.
    newRows[index].score = score;

    setTableRows(newRows);
  };

  const totalScoreHandler = () => {
    // 총 점수 계산
    let totalScore = 0;
    for (const row of tableRows) {
      totalScore += row.score || 0;
    }

    setTotalScore(totalScore);
    // 총 점수를 alert로 표시
    alert(`총 점수는 ${totalScore}점 입니다.`);
    navigate('/result');
  }

  return (
    <center><br /><br />
      <TableContainer component={Paper} sx={{ backgroundColor: '#F7F9F8', boxShadow: 0 }}>
        <Table sx={{ maxWidth: 900, minWidth: 900 }} aria-label="customized table">
          <TableHead >
            <TableRow>
              <StyledTableCell align="center"></StyledTableCell>
              <StyledTableCell align="center">문항</StyledTableCell>
              <StyledTableCell align="center">전혀없음</StyledTableCell>
              <StyledTableCell align="center">거의없음</StyledTableCell>
              <StyledTableCell align="center">때때로 있음</StyledTableCell>
              <StyledTableCell align="center">자주 있음</StyledTableCell>
              <StyledTableCell align="center">매우 자주</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row" align="center" sx={{ backgroundColor: '#f5faf8', fontWeight: 'bold' }} >
                  {index + 1}
                </StyledTableCell>
                <StyledTableCell align="center">{row.name}</StyledTableCell>
                <StyledTableCell align="center">
                  <Checkbox checked={row.checkedValue === 'Not'} onChange={handleChange(index, 'Not')} />
                </StyledTableCell>
                <StyledTableCell align="center">
                  <Checkbox checked={row.checkedValue === 'Rarely'} onChange={handleChange(index, 'Rarely')} />
                </StyledTableCell>
                <StyledTableCell align="center">
                  <Checkbox checked={row.checkedValue === 'Occasionally'} onChange={handleChange(index, 'Occasionally')} />
                </StyledTableCell>
                <StyledTableCell align="center">
                  <Checkbox checked={row.checkedValue === 'Frequently'} onChange={handleChange(index, 'Frequently')} />
                </StyledTableCell>
                <StyledTableCell align="center" sx={{ borderRight: `1px solid #c5dad3`, }}>
                  <Checkbox checked={row.checkedValue === 'frequently'} onChange={handleChange(index, 'frequently')} />
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <br /><br />

      <Button variant='outlined' onClick={() => { totalScoreHandler() }}>진단결과 보기</Button>
    </center>
  );
}