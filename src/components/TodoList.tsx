import React, { useState, useRef, useEffect } from "react";
import TodoItem from "./TodoItem";
import InputText from "./InputText";
import tw from "tailwind-styled-components";

interface TodoListProps {
  id: number;
  text: string;
  completed: boolean;
}

export default function TodoList() {
  const [inputTodo, setInputTodo] = useState("");
  const [lists, setLists] = useState<TodoListProps[]>([]);
  const nextId = useRef(1);

  //useEffect를 사용해 db.json 서버내의 데이터 호출
  useEffect(() => {
    fetch("http://localhost:3001/Todos")
      .then((res) => res.json())
      .then((data) => setLists(data));
  }, []);

  //체크박스버튼 핸들러
  const handleClickCheckBox = (id: number) => {
    setLists(
      lists.map((list) => (list.id === id ? { ...list, completed: !list.completed } : list))
    );
    fetch(`http://localhost:3001/Todos/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ complete: !lists.find((todo) => todo.id)?.completed }),
    });
  };

  // 삭제버튼 핸들러
  const handleClickDeleteBtn = (id: number) => {
    setLists(lists.filter((list) => list.id !== id));
    fetch(`http://localhost:3001/Todos/${id}`, {
      method: "DELETE",
    });
  };

  //입력값변경 핸들러
  const handleInputTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputTodo(e.target.value);
  };

  //입력값엔터 핸들러
  const handleActiveEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && e.nativeEvent.isComposing === false) {
      e.preventDefault();
      const newList: TodoListProps = {
        id: nextId.current,
        text: inputTodo,
        completed: false,
      };
      setLists(lists.concat(newList));
      setInputTodo("");
      nextId.current++;

      fetch("http://localhost:3001/Todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newList),
      })
        .then((res) => res.json())
        .then((data) => setLists([...lists, data]));
    }
  };

  return (
    <>
      <div className="w-full h-6 bg-slate-500" />
      <MainContainer>
        <AppContainer>
          <TodoListContainer>
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
          </TodoListContainer>
          <InputText
            onChange={handleInputTextChange}
            onKeyDown={handleActiveEnter}
            inputText={inputTodo}
          />
        </AppContainer>
      </MainContainer>
    </>
  );
}

const MainContainer = tw.div`
  w-full h-full flex justify-center align-middle
`;

const AppContainer = tw.div`
w-3/5 h-auto bg-white relative
`;

const TodoListContainer = tw.div`
w-auto h-auto mx-2 bg-yellow-100 overflow-y-auto
`;
