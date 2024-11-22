import { useState } from 'react'; // MUI

import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Checkbox from '@mui/material/Checkbox';
import MenuItem from '@mui/material/MenuItem';
import LinearProgress from '@mui/material/LinearProgress';
import styled from '@mui/material/styles/styled';
// CUSTOM COMPONENTS
import MoreButton from '@/components/more-button';
import { Paragraph } from '@/components/typography';
import { FlexBetween, FlexBox } from '@/components/flexbox'; // STYLED COMPONENT

const TodoItem = styled(FlexBetween, {
  shouldForwardProp: prop => prop !== 'active'
})(({
  theme,
  active
}) => ({ ...(active && {
    backgroundColor: theme.palette.action.selected,
    '& .title': {
      color: theme.palette.primary.main
    }
  })
}));
export default function TodoList() {
  const [todos, setTodos] = useState([{
    id: 1,
    title: 'Design a poster for a company',
    complete: true
  }, {
    id: 2,
    title: 'Analyze Data',
    complete: false
  }, {
    id: 3,
    title: 'YouTube campaign',
    complete: false
  }, {
    id: 4,
    title: 'Assign employee',
    complete: false
  }]);

  const handleCompleteTodo = id => () => {
    setTodos(state => {
      return state.map(item => item.id === id ? { ...item,
        complete: !item.complete
      } : item);
    });
  };

  const handleDeleteTodo = id => {
    setTodos(state => state.filter(item => item.id !== id));
  };

  const totalCompletedTodo = todos.filter(item => item.complete).length;
  const percentageValue = Math.round(totalCompletedTodo * 100 / todos.length);
  return <Card>
      <FlexBetween p={3}>
        <Paragraph fontSize={18} fontWeight={500}>
          To-do list
        </Paragraph>

        <MoreButton size="small" />
      </FlexBetween>

      <FlexBox px={3} alignItems="center" gap={1}>
        <Paragraph fontWeight={500} color="primary.main">
          {percentageValue}%
        </Paragraph>

        <LinearProgress color="primary" variant="determinate" value={percentageValue} sx={{
        height: 8
      }} />
      </FlexBox>

      <Stack spacing={1} py={2}>
        {todos.map(({
        id,
        title,
        complete
      }) => <TodoItem px={2} key={id} active={complete ? 1 : 0}>
            <FlexBox alignItems="center">
              <Checkbox onChange={handleCompleteTodo(id)} checked={complete} />
              <Paragraph fontWeight={500} className="title" color="grey.500">
                {title}
              </Paragraph>
            </FlexBox>

            <MoreButton size="medium" renderOptions={handleClose => <MenuItem onClick={() => {
          handleClose();
          handleDeleteTodo(id);
        }}>
                  Delete
                </MenuItem>} />
          </TodoItem>)}
      </Stack>
    </Card>;
}