import { useCallback, useState } from 'react';
import { DragDropContext } from '@hello-pangea/dnd';
import Grid from '@mui/material/Grid2'; // CUSTOM COMPONENTS

import TodoColumn from '../TodoColumn'; // DUMMY CUSTOM DATA

import todos from './todos'; // CUSTOM TYPES

export default function TodoListPageView() {
  const [todoList, setTodoList] = useState({ ...todos
  });
  const onDragEnd = useCallback((result, todoList, setTodoList) => {
    const {
      destination,
      source,
      draggableId
    } = result;
    if (!destination) return;

    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }

    const sourceColumn = todoList.columns[source.droppableId];
    const destColumn = todoList.columns[destination.droppableId];

    if (sourceColumn.id !== destColumn.id) {
      const destTodoIds = [...destColumn.todoIds];
      const sourceTodoIds = [...sourceColumn.todoIds];
      const [removed] = sourceTodoIds.splice(source.index, 1);
      destTodoIds.splice(destination.index, 0, removed);
      setTodoList(state => ({ ...state,
        columns: { ...state.columns,
          [sourceColumn.id]: { ...sourceColumn,
            todoIds: sourceTodoIds
          },
          [destColumn.id]: { ...destColumn,
            todoIds: destTodoIds
          }
        }
      }));
    } else {
      const copiedTodoIds = [...sourceColumn.todoIds];
      const [removed] = copiedTodoIds.splice(source.index, 1);
      copiedTodoIds.splice(destination.index, 0, removed);
      setTodoList(state => ({ ...state,
        columns: { ...state.columns,
          [sourceColumn.id]: { ...sourceColumn,
            todoIds: copiedTodoIds
          }
        }
      }));
    }
  }, []);
  return <div className="pt-2 pb-4">
      <Grid container spacing={3}>
        <DragDropContext onDragEnd={result => onDragEnd(result, todoList, setTodoList)}>
          {todoList.ordered.map(columnId => <Grid size={{
          lg: 4,
          sm: 6,
          xs: 12
        }} key={columnId}>
              <TodoColumn columnId={columnId} todos={todoList.todos} column={todoList.columns[columnId]} />
            </Grid>)}
        </DragDropContext>
      </Grid>
    </div>;
}