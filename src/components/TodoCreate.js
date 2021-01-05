import React, { useState }  from 'react';
import styled from 'styled-components';
import { useTodoNextId, useTodoDispatch } from '../TodoContext';
import { MdAdd } from 'react-icons/md';


const InsertFormPositioner = styled.div`
  margin: 20px 0 25px;
`;

const InsertForm = styled.form`
  display: flex;
  padding: 12px 0 ;
`;

const Input = styled.input`
  padding: 0px;
  border-radius: 4px;
  border: 0;
  border-bottom: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
`;
const CircleButton = styled.button`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 24px;
  color: #fff;
  cursor: pointer;
  outline: none;
  border: none;
  background: #38d9a9;
  &:hover {
    background: #ff6b6b;
  }


`;

function TodoCreate(){

  // const [open, setOpen] = useState(false);

  const dispatch = useTodoDispatch();
  const nextId = useTodoNextId();

  // input 관리
  const [value, setValue] = useState('');
  // const onToggle = () => setOpen(!open);  
  const onChange = e => setValue(e.target.value);

  const onSubmit = e => {
    e.preventDefault();
    dispatch({
      type: 'CREATE',
      todo: {
        id: nextId.current,
        text: value,
        done: false
      }
    });
    setValue('');
    nextId.current += 1;
  }


  return(
    <>
        <InsertFormPositioner>
          <InsertForm onSubmit={onSubmit}>
            <Input autoFocus placeholder="할 일을 입력하세요." 
            onChange={onChange}
            value={value}
            />
          <CircleButton>
            <MdAdd />
          </CircleButton>
          </InsertForm>
        </InsertFormPositioner>
        
    </>    
  );
}

export default React.memo(TodoCreate);