import React, { useState } from "react";
import { Todo } from "../types";
import { useTodoDispatch } from "../App";

interface Props extends Todo {}
export default function TodoItem(props: Props) {
  const dispatch = useTodoDispatch();
  const [editText, setEditText] = useState("");
  const [isEditMode, setIsEditMode] = useState(false);

  const onClickDeleteBtn = () => {
    dispatch.onClickDelete(props.id);
  };

  // const onClickEditBtn = () => {
  //   dispatch.onClickEdit(EditText);
  // };

  return (
    <div>
      No.{props.id} : {props.content}
      <button onClick={() => setIsEditMode(true)}> EDIT </button>
      <button onClick={onClickDeleteBtn}>DELETE</button>
    </div>
  );
}
