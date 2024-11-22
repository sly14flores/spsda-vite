import { useState } from 'react'; // MUI

import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext'; // CUSTOM PAGE SECTION COMPONENTS

import Layout from '../Layout';
import Overview from '../overview';
import Projects from '../projects';
import Activity from '../activity';
import Campaigns from '../campaigns';
import Documents from '../documents';
import Connections from '../connections';
export default function ProfilePageView() {
  const [tabValue, setTabValue] = useState('1');

  const handleTabChange = (_, value) => setTabValue(value);

  return <div className="pt-2 pb-4">
      <TabContext value={tabValue}>
        <Layout handleTabList={handleTabChange}>
          <TabPanel value="1">
            <Overview />
          </TabPanel>

          <TabPanel value="2">
            <Projects />
          </TabPanel>

          <TabPanel value="3">
            <Campaigns />
          </TabPanel>

          <TabPanel value="4">
            <Documents />
          </TabPanel>

          <TabPanel value="5">
            <Connections />
          </TabPanel>

          <TabPanel value="6">
            <Activity />
          </TabPanel>
        </Layout>
      </TabContext>
    </div>;
}