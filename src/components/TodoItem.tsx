import React, { useState } from "react";
import { Todo } from "../types";
import { useTodoDispatch } from "../App";
import "../components/todoItem.css";
import CheckBox from "./CheckBox";
interface Props extends Todo {}
interface TextProps extends Todo {
  completed?: boolean;
  children: React.ReactNode;
}

export default function TodoItem(props: Props, { completed, children }: TextProps) {
  const dispatch = useTodoDispatch();

  const onClickDeleteBtn = () => {
    dispatch.onClickDelete(props.id);
  };

  return (
    <div>
      <div className="item-Container">
        <CheckBox checked={completed} />
        <div className={`text ${completed ? "completedText" : ""}`}> {children} </div>
        No.{props.id} : {props.content}
        <button onClick={onClickDeleteBtn}>DELETE</button>
      </div>
    </div>
  );
}
