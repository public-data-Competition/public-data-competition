import * as React from 'react';
import { useState } from 'react';
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

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange}
          sx={{
            '& .MuiTabs-scroller': {
              display: 'flex',
              justifyContent: 'center'
            },
            backgroundColor:'#DFF0FF'
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
                color:'black',
              '&.Mui-selected': {
                color: '#2B90D9',
                border:'1px solid white',
                borderRadius:'12px 12px 0 0',
                margin:0,
                backgroundColor:'white'
              }}}
            />
          ))}
        </Tabs>
      </Box>
      {tabsData.map((tabData) => renderTabPanel(tabData))}
    </Box>
  );
}