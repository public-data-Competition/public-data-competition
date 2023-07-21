import Lottie from "lottie-react";
import BasicTable from '../components/BasicTable';
import happy from "../data/happy.json";
const StressTestPage = () => {

  return (
    <>
      <div className='basic basic-wrap'>
        <Lottie c animationData={happy} />
        <img alt="talk" src="/talk.png" style={{ width: '70%' }} />
      </div>
      <BasicTable />
    </>
  );
}

export default StressTestPage;