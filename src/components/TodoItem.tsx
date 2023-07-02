import React, { useState } from "react";
import "../style/TodoItem.css";
import CheckBox from "./CheckBox";
import DeleteBtn from "./DeleteBtn";
import Text from "./Text";

interface TextProps {
  onClickCheckBox(id: number): void;
  onClickDeleteBtn(id: number): void;
  completed?: boolean;
  text: string;
  id: number;
}

export default function TodoItem({
  onClickCheckBox,
  onClickDeleteBtn,
  completed,
  text,
  id,
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
