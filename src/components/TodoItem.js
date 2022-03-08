import React from "react";
import styled, { css } from "styled-components";
import {MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";

const ListSt = styled.div`
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;

  border-radius: 5px;

  box-shadow: 1px 2px 2px 1px #f6e280;

  padding: 10px 20px;
  color: orange;
  background: white;
  margin-bottom: 10px;
  width: 250px;
  height: 30px;

  display: flex;
  align-items: center;
`;
const Check = styled.div`
  flex: 1;
  display: flex;
`;

const Text = styled.div`
  margin-left: 7px;
  flex: 1;
  color: black;
  cursor: pointer;
  ${props =>
    props.checked &&
    css`
      text-decoration: line-through;
      cursor: pointer;
      color: #6c567b;
      opacity: 0.6;
    `  
  }

`

const TodoItem = ({todo, onCheckedToggle, onInsertToggle, onChangeSelectedTodo}) => {
  const {id, text, checked} = todo;
  return (
  <ListSt>
    <Check>
      {checked ? 
      
        <MdCheckBox 
          onClick={() => {
            onCheckedToggle(id);
        }} /> : <MdCheckBoxOutlineBlank
          onClick={() => {
            onCheckedToggle(id);
          }}/>}
      <Text checked={checked} onClick={() =>{
        onChangeSelectedTodo(todo);
        onInsertToggle();
      }}>{text}</Text>
    </Check>
  </ListSt>
  );
};

export default TodoItem;