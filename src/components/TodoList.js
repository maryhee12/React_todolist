import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';
import { useTodoState } from '../TodoContext';



const TodoListBox = styled.div`
  flex: 1;
  padding-top: 20px;
  padding-bottom: 48px;
`;

function TodoList(){

  const todos = useTodoState();

  return(
    <TodoListBox>
      {todos.map(
        todo => <TodoItem 
          key={todo.id}
          id={todo.id}
          text={todo.text}
          done={todo.done}
        />
      )}
    </TodoListBox>
  )
}

export default TodoList;