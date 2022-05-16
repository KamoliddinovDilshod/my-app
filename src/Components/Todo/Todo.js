import React, { useState } from "react";
import Btn from "../Buttons/Button";
import Inputs from "../Input/Inputs";
import TodoItem from "../TodoItem/TodoItem";
import "./main.css";

const Todos = () => {
  const [todos, setTodos] = React.useState(
    JSON.parse(window.localStorage.getItem("todos")) || []
  );

  const [status, setStatus] = useState();

  function handleCreate(evt) {
    const newTodos = {
      id: todos[todos.length - 1]?.id + 1 || 0,
      title: evt.target.value,
      isComplate: false,
    };
    if (evt.code == "Enter") {
      window.localStorage.setItem(
        "todos",
        JSON.stringify([...todos, newTodos], (evt.target.value = ""))
      );
      return setTodos([...todos, newTodos], (evt.target.value = ""));
    }
  }

  function handleDeleteBtn(evt) {
    const data = evt.target.dataset.todoId - 0;
    const filterArr = todos.filter((item) => item.id !== data);
    window.localStorage.setItem("todos", JSON.stringify(filterArr));
    return setTodos(filterArr);
  }

  function handleComplate(evt) {
    const data = evt.target.dataset.todoId - 0;
    const findItem = todos.find((item) => item.id === data);
    findItem.isComplate = !findItem.isComplate;
    window.localStorage.setItem("todos", JSON.stringify([...todos]));
    setTodos([...todos]);
  }

  function checkStatus() {
    if (status === "All") {
      setTodos(JSON.parse(window.localStorage.getItem("todos")));
    } else if (status) {
      setTodos(
        JSON.parse(window.localStorage.getItem("todos")).filter(
          (item) => item.isComplate === false
        )
      );
    } else if (status === false) {
      setTodos(
        JSON.parse(window.localStorage.getItem("todos")).filter(
          (item) => item.isComplate === true
        )
      );
    }
  }

  return (
    <>
      <div className='todo'>
        <Inputs handleCreates={handleCreate} />
        {todos.map((item) => (
          <TodoItem
            title={item.title}
            isComplate={item.isComplate}
            handleComplate={handleComplate}
            deleteBtn={handleDeleteBtn}
            id={item.id}
            key={item.id}
          />
        ))}
      </div>
      <footer className='footer'>
        <div className='footer__box'>
          <button
            className='footer__btn'
            onClick={() => {
              checkStatus();
              setStatus("All");
            }}>
            All
          </button>
          <button
            className='footer__btn'
            onClick={() => {
              checkStatus();
              setStatus(true);
            }}>
            Complated
          </button>
          <button
            className='footer__btn'
            onClick={() => {
              checkStatus();
              setStatus(false);
            }}>
            Uncomplated
          </button>
        </div>
      </footer>
    </>
  );
};

export default Todos;
