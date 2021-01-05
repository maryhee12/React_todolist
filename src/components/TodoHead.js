import React from 'react';
import styled from 'styled-components';
import { useTodoState } from '../TodoContext';

const TodoHeadBox = styled.div`
  width: 100%;
  margin: 0 auto 10px;

  h1{
    margin: 0 auto 30px ;
    font-size: 45px;
    text-align: center;
    color: #49C5B6;
  }
  h2{
    margin: 20px auto 5px;
    font-size: 25px;
    color: #495057;
  }
  .day {
    margin-left: 4px;
    color: #495057;
    font-size: 20px;
  }
  .tasks{
    color: #12b886;
    font-size: 20px;
    margin-top: 20px;
    font-weight: bold;
  }
`;

function TodoHead(){

  const todos = useTodoState();
  const undoneTasks = todos.filter(todo => !todo.done);   //fasle인값 가져오기

  const today = new Date();
  const dateString = today.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  const dayName = today.toLocaleDateString('ko-KR' , { weekday: 'long'});

  return(
    <TodoHeadBox>
      <h1>TODO LIST</h1>
      <h2>{dateString}<span className="day">({dayName})</span></h2>
      <div className="tasks">할일 {undoneTasks.length}개 남음</div>
    </TodoHeadBox>
  );
}

export default TodoHead;