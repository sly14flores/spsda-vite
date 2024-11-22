import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2'; // CUSTOM COMPONENT

import ProjectCard from './ProjectCard'; // CUSTOM DUMMY DATA

import { PROJECT_LIST } from './data';
export default function Projects() {
  return <Box py={3}>
      <Grid container spacing={3}>
        {PROJECT_LIST.map(item => <Grid size={{
        md: 4,
        sm: 6,
        xs: 12
      }} key={item.id}>
            <ProjectCard Icon={item.icon} title={item.title} value={item.value} status={item.status} description={item.description} />
          </Grid>)}
      </Grid>
    </Box>;
}