import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TabPanel from '../components/Tabs';
import StressPage from './StressPage';
import PeacePage from './PeacePage';
import HealthPage from './HealthPage';
import HealingPage from './HealingPage';
const ServicePage = () => {
  const navigate = useNavigate();

  const tabsData = [
    { label: '스트레스 지수 확인', path: '/service/stress', index: 0, panelContent: (<StressPage/>) },
    { label: '마음의 평화찾기', path: '/service/peace', index: 1, panelContent: (<PeacePage/>) },
    { label: '내 주변 건강지도', path: '/service/health', index: 2, panelContent: (<HealthPage/>) },
    { label: '더 많은 힐링정보', path: '/service/healing', index: 3, panelContent: (<HealingPage/>) },
  ];

  return (
    <TabPanel tabsData={tabsData} />
  )
}

export default ServicePage;

