import React, { useState, useRef } from "react";
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
