import React from 'react';
import styled from 'styled-components';

const TodoTemplateBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 450px;
  padding: 40px 50px;
  margin: 50px auto ;
  background: #fff;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, .2);

`;

function TodoTemplate({ children}){
  return(
    <TodoTemplateBox>{ children }</TodoTemplateBox>
  )
}

export default TodoTemplate;