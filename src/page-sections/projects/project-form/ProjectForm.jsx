import { useState } from 'react'; // MUI ICON COMPONENT

import Add from '@mui/icons-material/Add'; // MUI

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import styled from '@mui/material/styles/styled';
import { DatePicker } from '@mui/x-date-pickers/DatePicker'; // CUSTOM COMPONENTS

import Modal from '@/components/modal';
import Dropzone from '@/components/dropzone'; // STYLED COMPONENT

const StyledAppModal = styled(Modal)(({
  theme
}) => ({
  '& .add-btn': {
    border: `1px solid ${theme.palette.divider}`
  },
  '& .label': {
    fontSize: 14,
    fontWeight: 500,
    marginBottom: 8,
    display: 'block'
  },
  '& .btn-group': {
    gap: '1rem',
    display: 'flex',
    paddingTop: '1.5rem'
  }
})); // ==============================================================

// ==============================================================
export default function ProjectForm({
  open,
  handleClose
}) {
  const [date, setDate] = useState(new Date());
  return <StyledAppModal open={open} handleClose={handleClose}>
      <Stack spacing={2}>
        <div>
          <p className="label">Project Name</p>
          <TextField fullWidth size="small" placeholder="Project name" />
        </div>

        <div>
          <p className="label">Deadline</p>
          <DatePicker value={date} onChange={newDate => setDate(newDate)} slotProps={{
          textField: {
            fullWidth: true
          }
        }} />
        </div>

        <div>
          <p className="label">Description</p>
          <TextField rows={2} fullWidth multiline size="small" name="description" placeholder="Description" />
        </div>

        <div>
          <p className="label">Add Picture</p>
          <Dropzone />
        </div>

        <div>
          <p className="label">Team</p>
          <Stack direction="row" alignItems="center" spacing={1}>
            <IconButton className="add-btn">
              <Add fontSize="small" />
            </IconButton>

            <Avatar alt="Remy Sharp" src="/static/user/user-7.png" />
            <Avatar alt="Travis Howard" src="/static/user/user-6.png" />
            <Avatar alt="Cindy Baker" src="/static/user/user-5.png" />
          </Stack>
        </div>

        <div className="btn-group">
          <Button variant="contained" fullWidth>
            Create
          </Button>

          <Button variant="outlined" fullWidth onClick={handleClose}>
            Cancel
          </Button>
        </div>
      </Stack>
    </StyledAppModal>;
}