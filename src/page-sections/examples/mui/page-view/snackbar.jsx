import { useState } from 'react'; // MUI

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Snackbar from '@mui/material/Snackbar';
import Close from '@mui/icons-material/Close'; // CUSTOM COMPONENTS

import Block from '@/components/block';
import ComponentPageLayout from '../../ComponentPageLayout'; // ==============================================================

// ==============================================================
export default function MuiSnackbarPageView() {
  const [open, setOpen] = useState({
    1: false,
    2: false
  });
  const [state, setState] = useState({
    open: false,
    vertical: 'top',
    horizontal: 'center'
  });

  const handleClick = num => () => {
    setOpen(state => ({ ...state,
      [num]: true
    }));
  };

  const handleClose = num => (_, reason) => {
    if (reason === 'clickaway') return;
    setOpen(state => ({ ...state,
      [num]: false
    }));
  };

  const handleChange = newState => () => {
    setState({ ...newState,
      open: true
    });
  };

  const handleCloseSnackbar = () => {
    setState({ ...state,
      open: false
    });
  };

  return <ComponentPageLayout title="Snackbar">
      <Grid container spacing={3}>
        <Grid size={{
        lg: 6,
        xs: 12
      }}>
          <Block title="Simple">
            <Stack direction="row" alignItems="center" justifyContent="center" spacing={3}>
              <Button onClick={handleClick(1)}>Simple Snackbar</Button>
              <Snackbar open={open[1]} onClose={handleClose(1)} autoHideDuration={2000} message="This is Uko Snackbar" />
            </Stack>
          </Block>
        </Grid>

        <Grid size={{
        lg: 6,
        xs: 12
      }}>
          <Block title="With Action">
            <Stack direction="row" alignItems="center" justifyContent="center" spacing={3}>
              <Button onClick={handleClick(2)}>With Action Snackbar</Button>
              <Snackbar open={open[2]} onClose={handleClose(2)} autoHideDuration={2000} message="This is Uko Snackbar" action={<IconButton size="small" color="inherit" onClick={handleClose(2)}>
                    <Close fontSize="small" />
                  </IconButton>} />
            </Stack>
          </Block>
        </Grid>

        <Grid size={{
        lg: 6,
        xs: 12
      }}>
          <Block title="Positioned Snackbar">
            <div>
              <Box display="flex" justifyContent="center">
                <Button onClick={handleChange({
                vertical: 'top',
                horizontal: 'center'
              })}>
                  Top-Center
                </Button>
              </Box>

              <Grid container justifyContent="center" spacing={2}>
                <Grid size={6}>
                  <Button onClick={handleChange({
                  vertical: 'top',
                  horizontal: 'left'
                })}>
                    Top-Left
                  </Button>
                </Grid>

                <Grid size={6} textAlign="right">
                  <Button onClick={handleChange({
                  vertical: 'top',
                  horizontal: 'right'
                })}>
                    Top-Right
                  </Button>
                </Grid>

                <Grid size={6}>
                  <Button onClick={handleChange({
                  vertical: 'bottom',
                  horizontal: 'left'
                })}>
                    Bottom-Left
                  </Button>
                </Grid>

                <Grid size={6} textAlign="right">
                  <Button onClick={handleChange({
                  vertical: 'bottom',
                  horizontal: 'right'
                })}>
                    Bottom-Right
                  </Button>
                </Grid>
              </Grid>

              <Box display="flex" justifyContent="center">
                <Button onClick={handleChange({
                vertical: 'bottom',
                horizontal: 'center'
              })}>
                  Bottom-Center
                </Button>
              </Box>
            </div>

            <Snackbar anchorOrigin={{
            vertical: state.vertical,
            horizontal: state.horizontal
          }} open={state.open} onClose={handleCloseSnackbar} message="This is Uko Snackbar" key={state.vertical + state.horizontal} />
          </Block>
        </Grid>
      </Grid>
    </ComponentPageLayout>;
}