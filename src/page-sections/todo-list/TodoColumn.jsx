import { useState } from 'react';
import { Droppable } from '@hello-pangea/dnd'; // MUI COMPONENTS

import Card from '@mui/material/Card'; // CUSTOM COMPONENTS

import TodoCard from './TodoCard';
import TodoForm from './TodoForm';
import { H6 } from '@/components/typography';
import Scrollbar from '@/components/scrollbar'; // STYLED COMPONENT

import { DroppableWrapper } from './styles'; // CUSTOM TYPES

// ==============================================================
export default function TodoColumn({
  columnId,
  column,
  todos
}) {
  const [showForm, setForm] = useState(false);
  return <Card sx={theme => ({
    height: '100%',
    maxHeight: 750,
    backgroundColor: 'grey.50',
    boxShadow: 'none',
    ...theme.applyStyles('dark', {
      backgroundColor: 'action.hover'
    })
  })}>
      {columnId === 'todo' ? <TodoForm title={column.name} show={showForm} handleOpen={() => setForm(true)} handleClose={() => setForm(false)} /> : <H6 fontSize={18} p={2}>
          {column.name}
        </H6>}

      <Scrollbar autoHide={false} sx={{
      maxHeight: 'calc(100% - 59px)',
      minHeight: 'calc(100% - 59px)',
      ...(columnId === 'todo' && {
        maxHeight: 'calc(100% - 124px)',
        minHeight: 'calc(100% - 124px)'
      })
    }}>
        <Droppable key={column.id} droppableId={column.id}>
          {provided => <DroppableWrapper ref={provided.innerRef} {...provided.droppableProps}>
              {column.todoIds.map((todoId, index) => <TodoCard key={todoId} index={index} todo={todos[todoId]} />)}

              {provided.placeholder}
            </DroppableWrapper>}
        </Droppable>
      </Scrollbar>
    </Card>;
}