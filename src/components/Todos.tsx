import React, { useState } from "react";
import AddTodo from "./AddTodo";
import TodoItems from "./TodoItems";

export interface TodoList {
  id: number;
  contents: string;
  done: boolean;
}

export default function Todos() {
  const [inputcontents, setInputContents] = useState("");
  const [todoList, setTodoList] = useState<TodoList[]>([]);

  //입력값 변경내용 확인
  const contentTypingHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputContents(e.target.value);
  };

  //입력값 확인
  const contentInputHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newTodo: TodoList = {
      id: Date.now(),
      contents: inputcontents,
      done: false,
    };

    setTodoList(todoList.concat(newTodo));
    // 또는 setTodoList([...todoList, newTodo]);

    //입력값 초기화
    setInputContents("");
  };

  //입력값 삭제
  const contentDeleteHandler = (id: number) => {
    setTodoList(todoList.filter((todoItem) => todoItem.id !== id));
  };

  //입력값 수정
  const contentEditHandler = (newTodo: TodoList): void => {
    //새로운 입력값을 newTodo에 저장
    const newTodoList = todoList.map((item) => {
      //id가 같을 경우 새로운 입력값으로 return
      if (item.id === newTodo.id) {
        return newTodo;
      } else {
        //아닐 경우 기존의 값 return
        return item;
      }
    });
    setTodoList(newTodoList);
  };

  return (
    <div className="TodoListContainer">
      <h3>MY TODOLIST</h3>
      {todoList.map((item) => (
        <TodoItems
          id={item.id}
          contents={item.contents}
          done={item.done}
          onClickDelete={contentDeleteHandler}
          onClickEdit={contentEditHandler}
        />
      ))}
      <AddTodo
        onChange={contentTypingHandler}
        onSubmit={contentInputHandler}
        inputContent={inputcontents}
      />
    </div>
  );
}
