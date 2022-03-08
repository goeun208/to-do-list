import React, { useState } from 'react';
import {MdAddCircle} from "react-icons/md";
import './App.css';
import Template from './components/Template';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

let nextId = 4;

function App() {
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [insertToggle, setInsertToggle] = useState(false);
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "교수님에게 메일 보내기",
      checked: true
    },
    {
      id: 2,
      text: "점심 먹기",
      checked: false
    },
    {
      id: 3,
      text: "동아리 스터디",
      checked: false
    }

  ]);

  const onInsertToggle = () => {
    if (selectedTodo) {
      setSelectedTodo(null);
    }
    setInsertToggle(current => !current);
  }

  const onInsertTodo = (text) => {
    if (text === "") {
      return alert('할 일을 입력하세요.');
    } else {
      const todo = {
        id: nextId++,
        text,
        checked: false
      }
      setTodos(todos => todos.concat(todo)); // concat 사용 시 새 배열 리턴 후 기존 배열은 변경 안됨! 상태 불변성 지켜주기
    }
  }

  const onCheckToggle = (id) => {
    setTodos(todos => todos.map(todo => (todo.id === id ? {...todo, checked: !todo.checked} : todo )));
  }

  const onChangeSelectedTodo = (todo) => {
    setSelectedTodo(todo);
  } 

  const onRemove = (id) => {
    onInsertToggle();
    setTodos(todos => todos.filter(todo => todo.id !== id));
  }

  const onUpdate = (id, text) => {
    onInsertToggle();
    setTodos(todos => todos.map(todo => todo.id === id ? {...todo, text} : todo))
  }

  return (
    <div>
      <Template todoLength={todos.length}>
        <TodoList 
          todos={todos} 
          onCheckToggle={onCheckToggle} 
          onInsertToggle={onInsertToggle}
          onChangeSelectedTodo={onChangeSelectedTodo} />
        <div className='add-todo-button' onClick={onInsertToggle}>
          <MdAddCircle />
        </div>
        {insertToggle && (
          <TodoInsert
            selectedTodo={selectedTodo} 
            onInsertToggle={onInsertToggle}
            onInsertTodo={onInsertTodo}
            onRemove={onRemove}
            onUpdate={onUpdate}
          />
        )}
      </Template>
    </div>
  );
}

export default App;
