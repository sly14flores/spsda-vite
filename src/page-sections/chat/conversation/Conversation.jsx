import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton'; // MUI ICON COMPONENTS

import Add from '@mui/icons-material/Add';
import Mic from '@mui/icons-material/Mic';
import CameraAlt from '@mui/icons-material/CameraAlt';
import MoreHoriz from '@mui/icons-material/MoreHoriz';
import AttachFile from '@mui/icons-material/AttachFile';
import ChevronRight from '@mui/icons-material/ChevronRight';
import { useDropzone } from 'react-dropzone'; // CUSTOM COMPONENTS

import IncomingMsg from '../incoming-msg';
import OutgoingMsg from '../outgoing-msg';
import Scrollbar from '@/components/scrollbar';
import { H6, Small } from '@/components/typography';
import { FlexBetween, FlexBox } from '@/components/flexbox'; // CUSTOM ICON COMPONENT

import Search from '@/icons/duotone/Search'; // STYLED COMPONENTS

import { AttachButton, StyledIconButton, ToggleBtn } from './styles'; // ==============================================================

// ==============================================================
export default function Conversation({
  handleOpen
}) {
  const {
    getRootProps,
    getInputProps
  } = useDropzone({
    onDrop: files => {// console.log(files);
    }
  });
  return <Card className="h-full">
      <FlexBetween padding={3}>
        <FlexBox alignItems="center" gap={1.5}>
          <Avatar src="/static/user/user-19.png" alt="" />

          <div>
            <H6 lineHeight={1} fontSize={16}>
              Aiony Haust
            </H6>
            <Small color="text.secondary">Online</Small>
          </div>
        </FlexBox>

        <FlexBox alignItems="center" gap={1}>
          <IconButton size="small">
            <Search fontSize="small" />
          </IconButton>

          <StyledIconButton size="small">
            <MoreHoriz fontSize="inherit" />
          </StyledIconButton>
        </FlexBox>
      </FlexBetween>

      <Divider />

      <Box position="relative">
        <ToggleBtn screen="md" onClick={handleOpen}>
          <ChevronRight sx={{
          fontSize: 16,
          color: 'white'
        }} />
        </ToggleBtn>

        <Scrollbar style={{
        maxHeight: 580
      }}>
          <Stack spacing={4} px={3} py={2}>
            <OutgoingMsg />
            <IncomingMsg />
            <OutgoingMsg />
            <IncomingMsg />
            <OutgoingMsg />
            <IncomingMsg />
            <OutgoingMsg />
          </Stack>
        </Scrollbar>
      </Box>

      <Divider />

      <Box px={3} py={2}>
        <FlexBetween mb={2} gap={2}>
          <InputBase fullWidth multiline placeholder="Type Something....." sx={{
          fontSize: 14,
          fontWeight: 500,
          flex: 1
        }} />

          <StyledIconButton size="small">
            <Mic />
          </StyledIconButton>
        </FlexBetween>

        <FlexBetween gap={2}>
          <FlexBox gap={1.5}>
            <AttachButton {...getRootProps()}>
              <input {...getInputProps()} />
              <CameraAlt fontSize="inherit" />
            </AttachButton>

            <AttachButton {...getRootProps()}>
              <input {...getInputProps()} />
              <AttachFile fontSize="inherit" />
            </AttachButton>

            <StyledIconButton size="small">
              <Add fontSize="small" />
            </StyledIconButton>
          </FlexBox>

          <Button size="small">Send</Button>
        </FlexBetween>
      </Box>
    </Card>;
}