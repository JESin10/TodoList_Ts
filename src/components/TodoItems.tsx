import React, { useState } from "react";
import { TodoList } from "./Todos";
import {
  AiOutlineEdit,
  AiOutlineDelete,
  AiOutlineCheck,
  AiOutlineClose,
} from "react-icons/ai";

interface TodoItemProps {
  id: number;
  contents: string;
  done: boolean;
  onClickDelete(id: number): void;
  onClickEdit(EditTodoItem: TodoList): void;
}

export default function TodoItems({
  id,
  contents,
  done,
  onClickDelete,
  onClickEdit,
}: TodoItemProps) {
  //수정여부
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [EditedContent, setEditedContent] = useState<string>(contents);

  const HandleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedContent(e.target.value);
  };

  const HandleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const EditedTodoItem = {
      id: id,
      contents: EditedContent,
      done: done,
    };
    onClickEdit(EditedTodoItem);
    setIsEditing(false);
  };

  const HandleDone = () => {
    const EditedTodoItem = {
      id: id,
      contents: contents,
      done: !done,
    };
    onClickEdit(EditedTodoItem);
  };

  return (
    <div>
      {!isEditing ? (
        <li className="todoContainer">
          <button className="doneBtn" onClick={HandleDone}>
            {done ? "✔︎" : null}
          </button>
          <div className="ItemContainer">
            <p
              className="ItemContent"
              style={done ? { textDecoration: "line-throgh" } : undefined}
            >
              {contents}
            </p>
            <div className="buttonContainer">
              <button
                type="button"
                className="inlineBtnBox"
                onClick={() => setIsEditing(true)}
              >
                <AiOutlineDelete size="17" />
              </button>
            </div>
          </div>
        </li>
      ) : (
        <li className="todoContainer">
          <button className="doneBtn" onClick={HandleDone}>
            {done ? "✔︎" : null}
          </button>
          <form onSubmit={HandleFormSubmit} className="ItemContainer">
            <input
              className="itemContentInput"
              type="text"
              value={EditedContent}
              onChange={HandleInputChange}
            />
            <div className="buttonContainer">
              <button type="submit" className="inlineBtnBox">
                <AiOutlineCheck size="17" />
              </button>
              <button
                type="button"
                className="inlineBtnBox"
                onClick={() => setIsEditing(false)}
              >
                <AiOutlineClose size="17" />
              </button>
            </div>
          </form>
        </li>
      )}
    </div>
  );
}
