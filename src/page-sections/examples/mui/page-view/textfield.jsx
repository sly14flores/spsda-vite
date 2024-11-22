import { useState } from 'react'; // MUI

import Tab from '@mui/material/Tab';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext'; // CUSTOM COMPONENTS

import Filled from '../text-fields/Filled';
import Outlined from '../text-fields/Outlined';
import Standard from '../text-fields/Standard';
import ComponentPageLayout from '../../ComponentPageLayout';
export default function MuiTextFieldPageView() {
  const [value, setValue] = useState('1');

  const handleChange = (_, newValue) => setValue(newValue);

  return <ComponentPageLayout title="Textfield" fullLink="https://mui.com/components/text-fields">
      <TabContext value={value}>
        <TabList onChange={handleChange}>
          <Tab value="1" label="Outlined" />
          <Tab value="2" label="Filled" />
          <Tab value="3" label="Standard" />
        </TabList>

        <TabPanel value="1">
          <Outlined />
        </TabPanel>

        <TabPanel value="2">
          <Filled />
        </TabPanel>

        <TabPanel value="3">
          <Standard />
        </TabPanel>
      </TabContext>
    </ComponentPageLayout>;
}