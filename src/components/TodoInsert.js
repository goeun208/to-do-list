import React, {useEffect, useState} from "react";
import { MdAddCircle } from "react-icons/md";
import {TiTrash, TiPencil} from "react-icons/ti";
import styled from "styled-components";

const Background = styled.div`
  position: fixed;
  z-index: 980;
  top: 0;
  overflow: hidden;
  width: 100vw;
  height:100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #FEFEFE;
  opacity: 0.8;
`;

const Form = styled.form`
  margin-left: 37.5%;
  position: fixed;
  top: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 990;
  width: 350px;
  height: 150px;
  border-radius: 5px;
  box-shadow: 1px 2px 5px 1px #f6e280;

  background: white;
`;

const TodoInsert = ({onInsertToggle, onInsertTodo, selectedTodo, onRemove, onUpdate}) => {
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    onInsertTodo(value);
    setValue("");
    onInsertToggle();
  }

  useEffect(() => {
    if (selectedTodo) {
      setValue(selectedTodo.text);
    }
  }, [selectedTodo]);


  return (
    <div>
      <Background  onClick={onInsertToggle} />
        <Form onSubmit={selectedTodo ? () => {onUpdate(selectedTodo.id, value)} : onSubmit}>
          <input
            placeholder="To do..."
            value={value}
            onChange={onChange}
          ></input>
          {selectedTodo ? (
            <div className="rewrite">
              <TiPencil onClick={() => {onUpdate(selectedTodo.id, value)}}/>
              <TiTrash  onClick={() => {onRemove(selectedTodo.id)}}/>
            </div>
          ) : (<button type="submit">
            <MdAddCircle />
          </button>)}
        </Form>
    </div>
    
  );
}

export default TodoInsert;