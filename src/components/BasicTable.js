import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Checkbox } from '@mui/material';

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

function createData(name, Not, Rarely, Occasionally, Frequently, frequently) {
  return { name, Not, Rarely, Occasionally, Frequently, frequently };
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
  return (
    <center><br/><br/>
      <TableContainer component={Paper} sx={{ backgroundColor: '#F7F9F8',boxShadow: 0 }}>
        <Table sx={{ maxWidth: 900,minWidth: 900 }} aria-label="customized table">
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
                <StyledTableCell component="th" scope="row" align="center" sx={{ backgroundColor: '#f5faf8', fontWeight: 'bold'}} >
                  {index + 1}
                </StyledTableCell>
                <StyledTableCell align="center">{row.name}</StyledTableCell>
                <StyledTableCell align="center">
                  <Checkbox checked={row.Not} />
                </StyledTableCell>
                <StyledTableCell align="center">
                  <Checkbox checked={row.Rarely} />
                </StyledTableCell>
                <StyledTableCell align="center">
                  <Checkbox checked={row.Occasionally} />
                </StyledTableCell>
                <StyledTableCell align="center">
                  <Checkbox checked={row.Frequently} />
                </StyledTableCell>
                <StyledTableCell align="center" sx={{borderRight: `1px solid #c5dad3`,}}>
                  <Checkbox checked={row.frequently} />
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <br/><br/>
      <Button variant='outlined' onClick={() => {alert('진단결과 버튼')}}>진단결과 보기</Button>
    </center>
  );
}