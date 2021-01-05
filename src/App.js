import React from 'react';
import { createGlobalStyle } from 'styled-components'; 
import TodoTemplate from './components/TodoTemplate';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';
import TodoCreate from './components/TodoCreate';
import { TodoProvider } from './TodoContext';



const GlobalStyle = createGlobalStyle`
  body{ backgrond: #49C5B6; }
`;


function App(){
  return(
    <>
    <TodoProvider>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
        <TodoCreate />
        <TodoList />
      </TodoTemplate>
    </TodoProvider>  
    </>
  );
  
}

export default App;
