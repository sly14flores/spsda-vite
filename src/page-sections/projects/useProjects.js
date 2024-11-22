import { useState } from 'react'; // CUSTOM DATA

import { PROJECTS } from '@/__fakeData__/projects';
export default function useProjects() {
  const [openModal, setOpenModal] = useState(false);
  const [filters, setFilters] = useState({
    status: 'all',
    searchValue: ''
  });

  const handleOpenModal = () => setOpenModal(true);

  const handleCloseModal = () => setOpenModal(false);

  const handleChangeFilter = (key, value) => {
    setFilters(state => ({ ...state,
      [key]: value
    }));
  };

  const FILTERED_PROJECTS = PROJECTS.filter(item => filters.status === 'all' || item.status === filters.status).filter(pro => pro.name.toLowerCase().includes(filters.searchValue.toLowerCase()));
  return {
    FILTERED_PROJECTS,
    filters,
    openModal,
    handleOpenModal,
    handleCloseModal,
    handleChangeFilter
  };
}