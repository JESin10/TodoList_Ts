import React, { useState, useRef } from "react";
import TodoItem from "./TodoItem";
import InputText from "./InputText";
import "../style/TodoList.css";

interface TodoListProps {
  id: number;
  text: string;
  completed: boolean;
}

export default function TodoList() {
  const [inputTodo, setInputTodo] = useState("");
  const [lists, setLists] = useState<TodoListProps[]>([
    { id: 1, text: "TypeScript 프로젝트 만들기", completed: false },
  ]);
  const nextId = useRef(2);

  //체크박스버튼 핸들러
  const handleClickCheckBox = (id: number) => {
    setLists(
      lists.map((list) =>
        list.id === id ? { ...list, completed: !list.completed } : list
      )
    );
  };

  // 삭제버튼 핸들러
  const handleClickDeleteBtn = (id: number) => {
    setLists(lists.filter((list) => list.id !== id));
  };

  //입력값변경 핸들러
  const handleInputTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputTodo(e.target.value);
  };

  //입력값엔터 핸들러
  const handleActiveEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const newList: TodoListProps = {
        id: nextId.current,
        text: inputTodo,
        completed: false,
      };
      setLists(lists.concat(newList));
      setInputTodo("");
      nextId.current++;
    }
  };

  return (
    <div className="main-container">
      <div className="app-container">
        <div className="todoList">
          {lists.map((list) => (
            <TodoItem
              key={`${list.id}list`}
              id={list.id}
              text={list.text}
              completed={list.completed}
              onClickCheckBox={handleClickCheckBox}
              onClickDeleteBtn={handleClickDeleteBtn}
            />
          ))}
        </div>
        <InputText
          onChange={handleInputTextChange}
          onKeyDown={handleActiveEnter}
          inputText={inputTodo}
        />
      </div>
    </div>
  );
}
