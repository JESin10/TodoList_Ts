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
  // const nextId = useRef(1); // db.json에 저장하다 보니 새로 구동할때마다 1부터 시작하게 됨.

  //현재 시간을 담을 상태변수 선언
  const [currentDateTime, setCurrentDateTime] = useState("");

  // useEffect를 사용하여 1초마다 현재 날짜, 시간을 업데이트
  // 컴포넌트 언마운트시 clearInterval 호출 -> 갱신 중지
  useEffect(() => {
    const update = () => {
      const date = new Date();
      const formatted = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
      setCurrentDateTime(formatted);
    };
    const intervalId = setInterval(update);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  //useEffect를 사용해 db.json 서버내의 데이터 호출
  useEffect(() => {
    fetch("http://localhost:3001/Todos")
      .then((res) => res.json())
      .then((data) => setLists(data));
  }, []);

  //체크박스버튼 핸들러
  const handleClickCheckBox = (id: number) => {
    setLists(
      lists.map((list) =>
        list.id === id ? { ...list, completed: !list.completed } : list
      )
    );
    fetch(`http://localhost:3001/Todos/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        complete: !lists.find((todo) => todo.id)?.completed,
      }),
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
      if (inputTodo.trim() === "") {
        window.alert("값을 입력하세요");
        return;
      }
      const currentId = lists.length > 0 ? lists[lists.length - 1].id : 0;
      const newList: TodoListProps = {
        id: currentId + 1,
        // id: nextId.current,
        text: inputTodo,
        completed: false,
      };
      setLists(lists.concat(newList));
      setInputTodo("");
      // nextId.current++;

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
      <MainContainer>
        <AppContainer>
          <MainBar>{currentDateTime}</MainBar>

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

const MainBar = tw.div`
w-auto h-10 bg-slate-500 text-right px-5 mx-2 text-white font-bold
py-1
`;

const MainContainer = tw.div`
  w-full h-full flex justify-center align-middle 
`;

const AppContainer = tw.div`
w-3/5 h-auto bg-white relative
`;

const TodoListContainer = tw.div`
w-auto h-auto mx-2 bg-yellow-100 overflow-y-auto
`;
