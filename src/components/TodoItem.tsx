import React, { useState } from "react";
import "../style/TodoItem.css";
import CheckBox from "./CheckBox";
import DeleteBtn from "./DeleteBtn";
import Text from "./Text";

interface TextProps {
  onClickCheckBox(id: number): void;
  onClickDeleteBtn(id: number): void;
  text: string;
  id: number;
  completed?: boolean;
}

export default function TodoItem({
  onClickCheckBox,
  onClickDeleteBtn,
  text,
  id,
  completed,
}: TextProps) {
  return (
    <>
      <div className="item-container">
        <CheckBox checked={completed} onClick={() => onClickCheckBox(id)} />
        <Text completed={completed}>
          no.{id}: {text}
        </Text>
        <DeleteBtn onClick={() => onClickDeleteBtn(id)} />
      </div>
    </>
  );
}
