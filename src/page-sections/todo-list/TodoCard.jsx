import { Draggable } from '@hello-pangea/dnd'; // MUI

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import AvatarGroup from '@mui/material/AvatarGroup';
import LinearProgress from '@mui/material/LinearProgress'; // MUI ICON COMPONENT

import MoreHoriz from '@mui/icons-material/MoreHoriz'; // CUSTOM COMPONENTS

import { H6, Paragraph } from '@/components/typography';
import { FlexBetween, FlexBox } from '@/components/flexbox';
import { format } from 'date-fns'; // ==============================================================

// ==============================================================
export default function TodoCard({
  index,
  todo
}) {
  const {
    id,
    date,
    title,
    author,
    description,
    statusColor
  } = todo;
  return <Draggable key={id} draggableId={id} index={index}>
      {(provided, snapshot) => <Card ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} sx={{
      cursor: 'grab',
      padding: '1rem',
      marginBottom: '1.5rem',
      '&:hover': {
        boxShadow: 2
      },
      boxShadow: snapshot.isDragging ? 2 : 'none',
      ':last-of-type': {
        marginBottom: 0
      }
    }}>
          <FlexBetween>
            <Paragraph fontWeight={600}>{format(new Date(date), 'MMM dd, yyyy')}</Paragraph>

            <IconButton sx={{
          backgroundColor: 'action.selected'
        }}>
              <MoreHoriz sx={{
            fontSize: 16
          }} />
            </IconButton>
          </FlexBetween>

          <Box textAlign="center" pt={6} pb={4}>
            <H6 fontSize={18}>{title}</H6>
            <Paragraph mt={0.5}>Prototyping</Paragraph>
          </Box>

          <FlexBetween py={1}>
            <Paragraph fontWeight={600}>Project Progress</Paragraph>
            <Paragraph fontWeight={600}>32%</Paragraph>
          </FlexBetween>

          <LinearProgress value={32} variant="determinate" sx={{
        '& .MuiLinearProgress-bar': {
          backgroundColor: statusColor
        }
      }} />

          <FlexBetween pt="1.5rem">
            <FlexBox alignItems="center" gap={1}>
              <AvatarGroup max={3}>
                <Avatar alt="Remy" src="/static/user/user-11.png" />
                <Avatar alt="Travis" src="/static/user/user-11.png" />
                <Avatar alt="Travis" src="/static/user/user-11.png" />
                <Avatar alt="Travis" src="/static/user/user-11.png" />
              </AvatarGroup>
            </FlexBox>

            <Chip label="3 Weeks Left" color="secondary" />
          </FlexBetween>
        </Card>}
    </Draggable>;
}