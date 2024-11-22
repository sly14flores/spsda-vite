import Add from '@mui/icons-material/Add'; // MUI

import Button from '@mui/material/Button';
import styled from '@mui/material/styles/styled'; // CUSTOM COMPONENTS

import SearchInput from '@/components/search-input'; // STYLED COMPONENTS

const SearchAction = styled('div')(({
  theme
}) => ({
  gap: 8,
  display: 'flex',
  flexWrap: 'wrap',
  paddingBlock: '2rem',
  alignItems: 'center',
  justifyContent: 'space-between',
  [theme.breakpoints.down('sm')]: {
    '& > *': {
      width: '100%',
      maxWidth: '100%'
    }
  }
})); // ==============================================================

// ==============================================================
export default function SearchFilter({
  handleChange,
  handleOpenModal
}) {
  return <SearchAction>
      <SearchInput placeholder="Find Projects" onChange={e => handleChange(e.target.value)} />

      <Button variant="contained" startIcon={<Add />} onClick={handleOpenModal}>
        Create a project
      </Button>
    </SearchAction>;
}