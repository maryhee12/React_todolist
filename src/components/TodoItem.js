import React from 'react';
import styled, { css } from 'styled-components';
import { MdDone, MdDelete } from 'react-icons/md';
import { useTodoDispatch } from '../TodoContext';


const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 28px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
  /* display: none; */
`;

const CheckCircle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  cursor: pointer;
  ${props =>         /* props로 받아온 done값이 있으면 바꿔준다 (길어지기 때문에 상단에 css받아온다) */
    props.done &&
    css`
      border: 1px solid #38d9a9;
      color: #38d9a9;
    `}
`;

const Text = styled.div`
  flex: 1;
  font-size: 20px;
  color: #495057;
  ${props =>
    props.done &&
    css`
      color: #ced4da;
    `}
`;

const TodoItemBox = styled.div` /* 위에 3가지의 스타일 컴포넌트가 안에 들어가는거 */
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  &:hover {
    ${Remove} {
      display: initial;
    }
  }
`;

function TodoItem( { id, done, text }) {

  const dispatch = useTodoDispatch();   
  const onToggle = () => dispatch({ type: 'TOGGLE', id });
  const onRemove = () => dispatch({ type: 'REMOVE', id });

  return(
    <TodoItemBox>
      <CheckCircle done={done} onClick={onToggle}>{ done && <MdDone />}</CheckCircle>{/* done={done} 프롭스로 설정, done값이 있다면 MdDone컴포넌트 렌더링 */}
      <Text done={done}>{ text }</Text> {/* 내용은 text이고 done렌더링 */}
      <Remove onClick={onRemove}>
        <MdDelete />
      </Remove>
    </TodoItemBox>
  );
}

export default TodoItem;