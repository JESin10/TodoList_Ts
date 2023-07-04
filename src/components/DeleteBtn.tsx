import React from "react";
import "../style/DeleteBtn.css";
import { BsTrash } from "react-icons/bs";

interface DeleteBtnProps {
  onClick?(): void;
}

export default function DeleteBtn(props: DeleteBtnProps) {
  return (
    <>
      <div className="deleteBtn-container" onClick={props.onClick}>
        <BsTrash />
      </div>
    </>
  );
}
