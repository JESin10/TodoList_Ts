import React, { useState } from "react";
import CheckBox from "./CheckBox";
import DeleteBtn from "./DeleteBtn";
import Text from "./Text";
import tw from "tailwind-styled-components";

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
      <AllTodoContainer className="all-todo-container">
        <CheckBox checked={completed} onClick={() => onClickCheckBox(id)} />
        <Text completed={completed}>
          no.{id}: {text}
        </Text>
        <DeleteBtn onClick={() => onClickDeleteBtn(id)} />
      </AllTodoContainer>
    </>
  );
}

const AllTodoContainer = tw.div`
w-auto h-full p-3 flex justify-between items-center mt-1
border-b-2 border-solid border-gray-500 box-border
font-bold
`;
