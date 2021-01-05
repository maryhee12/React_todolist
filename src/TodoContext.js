import React, { useReducer, createContext, useContext ,useRef} from 'react';

const initialTodos = [   
  {
    id: 1,
    text: 'HTML/CSS',
    done: true
  },
  {
    id: 2,
    text: 'JAVASCRIPT',
    done: true
  },
  {
    id: 3,
    text: 'REACT-APP',
    done: false
  },
  {
    id: 4,
    text: '강의듣기',
    done: false
  }
];

function todoReducer(state, action){
  switch(action.type){
    case 'CREATE':
      return state.concat(action.todo);  // action 안에 todo항목 넣어서 
    case 'TOGGLE':
      return state.map(todo => 
        todo.id === action.id ? {...todo, done: !todo.done} : todo
        );
    case 'REMOVE':
      return state.filter(todo => todo.id !== action.id ) 
    default:
      throw new Error(`Unhandled action type: ${action.type}`);    
  }
}

//state, dispatch context 두개 만들기
const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();


// Provider 상태관리하는 컴포넌트 만들기
export function TodoProvider( { children }){

  const [state, dispatch] = useReducer(todoReducer, initialTodos);
  const nextId = useRef(5);
  
  return(
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        <TodoNextIdContext.Provider value={nextId}>
          {children}
        </TodoNextIdContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}

// 두개의 hook만들기
export function useTodoState() {
  const context = useContext(TodoStateContext);
  if (!context) {
    throw new Error('Cannot find TodoProvider');
  }
  return context;
}

export function useTodoDispatch() {
  const context = useContext(TodoDispatchContext);
  if (!context) {
    throw new Error('Cannot find TodoProvider');
  }
  return context;
}

export function useTodoNextId() {
  const context = useContext(TodoNextIdContext);
  if (!context) {
    throw new Error('Cannot find TodoProvider');
  }
  return context;
}