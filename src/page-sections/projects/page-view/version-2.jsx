import Grid from '@mui/material/Grid2'; // CUSTOM COMPONENTS

import StatusFilter from '../StatusFilter';
import SearchFilter from '../SearchFilter';
import ProjectForm from '../project-form';
import ProjectCard2 from '../project-card-2'; // CUSTOM DEFINED HOOK

import useProjects from '../useProjects';
export default function ProjectVersionTwoPageView() {
  const {
    filters,
    openModal,
    FILTERED_PROJECTS,
    handleChangeFilter,
    handleCloseModal,
    handleOpenModal
  } = useProjects();
  return <div className="pt-2 pb-4">
      {
      /* PROJECT FILTER BY STATUS */
    }
      <StatusFilter value={filters.status} handleChange={value => handleChangeFilter('status', value)} />

      {
      /* SEARCH INPUT AND CREATE BUTTON */
    }
      <SearchFilter handleOpenModal={handleOpenModal} handleChange={value => handleChangeFilter('searchValue', value)} />

      {
      /* PROJECT CREATION MODAL */
    }
      <ProjectForm open={openModal} handleClose={handleCloseModal} />

      {
      /* PROJECT CARDS */
    }
      <Grid container spacing={3}>
        {FILTERED_PROJECTS.map(project => <Grid size={{
        lg: 4,
        sm: 6,
        xs: 12
      }} key={project.id}>
            <ProjectCard2 />
          </Grid>)}
      </Grid>
    </div>;
}