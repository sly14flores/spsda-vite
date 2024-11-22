import { useState } from 'react';
import Button from '@mui/material/Button';
import Add from '@mui/icons-material/Add'; // CUSTOM COMPONENTS

import CreateForm from '../create-form';
import { H6 } from '@/components/typography';
import SearchInput from '@/components/search-input';
import FlexBetween from '@/components/flexbox/FlexBetween'; // CUSTOM STYLED COMPONENTS

import { ButtonWrapper } from './styles'; // ==============================================================

// ==============================================================
export default function TableActions({
  rowSelected,
  hasColumnFilter,
  handleSearch,
  handleDeleteRow,
  handleResetColumnFilter
}) {
  const [openForm, setOpenForm] = useState(false);
  return <FlexBetween flexWrap="wrap" gap={2}>
      {
      /* SEARCH INPUT BOX */
    }
      <SearchInput placeholder="Find Friends" onChange={e => handleSearch(e.target.value.trim())} />

      <ButtonWrapper>
        {
        /* SELECTED ITEM AND DELETE BUTTON */
      }
        {rowSelected ? <div className="select-action">
            <H6 fontSize={14}>{rowSelected} Selected</H6>

            <Button size="small" color="error" variant="contained" onClick={handleDeleteRow}>
              Delete
            </Button>
          </div> : null}

        {
        /* CLEAR FILTER BUTTON */
      }
        {hasColumnFilter ? <Button size="small" color="error" variant="contained" onClick={handleResetColumnFilter}>
            Clear filter
          </Button> : null}

        {
        /* ADD EMPLOYEE BUTTON  */
      }
        <Button endIcon={<Add />} variant="contained" onClick={() => setOpenForm(true)}>
          Add Employee
        </Button>

        {
        /* ADD USER FORM MODAL */
      }
        <CreateForm open={openForm} onClose={() => setOpenForm(false)} />
      </ButtonWrapper>
    </FlexBetween>;
}