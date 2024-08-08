import Lottie from "lottie-react";
import { useRecoilValue } from "recoil";
import BasicTable from '../components/BasicTable';
import happy from "../data/happy.json";
import { mentState, scoreState } from "../store/store";
const StressTestPage = () => {
  const ment = useRecoilValue(mentState);
  const scoreMap = useRecoilValue(scoreState);
  
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

  return (
    <>
      <div className='basic basic-wrap'>
        <Lottie className="happy" animationData={happy} />
        <div class="image-container">
          <img alt="talk" src="/talk.png" style={{ width: '70%' }} />
          <div class="text-overlay">{ment}</div>
        </div>
      </div>
      <BasicTable scoreMap={scoreMap} rows={rows}/>
    </>
  );
}

export default StressTestPage;