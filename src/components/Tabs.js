import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { Link } from 'react-router-dom';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import TabPanel from './TabPanel';
import useHttpRequest from '../hook/use-http';

export default function BasicTabs({ initValue = 0, tabsData }) {
  const [value, setValue] = useState(initValue);
  const { sendPostRequest } = useHttpRequest();

  const a11yProps = (index) => {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  const handleChange = (event, newValue) => {
    setValue(newValue)
  };

  // TabPanel 조건 추가
  const renderTabPanel = (tabData) => {
    return (
      <TabPanel key={tabData.index} value={value} index={tabData.index}>
        {tabData.panelContent}
      </TabPanel>
    );
  };

  useEffect(() => {
    const path = window.location.pathname;

    switch (path) {
      case '/service/stress':
        setValue(0);
        break;
      case '/service/peace':
        setValue(1);
        break;
      case '/service/health':
        setValue(2);
        break;
      default:
        setValue(initValue);
    }
  }, [value]);

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange}
          sx={{
            '& .MuiTabs-scroller': {
              display: 'flex',
              justifyContent: 'center'
            },
            backgroundColor: 'white'
          }}>
          {tabsData.map((tabData) => (
            <Tab
              key={tabData.index}
              label={tabData.label}
              index={tabData.index}
              component={Link}
              to={tabData.path}
              {...a11yProps(tabData.index)}
              sx={{
                color: 'black',
                '&.Mui-selected': {
                  color: '#2E4230',
                  border: '1px solid white',
                  borderRadius: '12px 12px 0 0',
                  margin: 0,
                  backgroundColor: '#F7F9F8'
                }
              }}
            />
          ))}
        </Tabs>
      </Box>
      {tabsData.map((tabData) => renderTabPanel(tabData))}
    </Box>
  );
}