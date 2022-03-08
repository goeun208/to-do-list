import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({todos, onCheckToggle, onInsertToggle, onChangeSelectedTodo}) => {
  return (
    <div>
      {todos.map(todo => (
        <TodoItem todo={todo} key={todo.id} 
        onCheckedToggle={onCheckToggle}
        onInsertToggle={onInsertToggle}
        onChangeSelectedTodo={onChangeSelectedTodo} />
      ))}
    </div>
  );
};

export default TodoList;