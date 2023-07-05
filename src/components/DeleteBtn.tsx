import React from "react";
import { BsTrash } from "react-icons/bs";
import tw from "tailwind-styled-components";

interface DeleteBtnProps {
  onClick?(): void;
}

export default function DeleteBtn(props: DeleteBtnProps) {
  return (
    <>
      <DeleteBtnContainer
        className="deleteBtn-container"
        onClick={props.onClick}
      >
        <BsTrash />
      </DeleteBtnContainer>
    </>
  );
}

const DeleteBtnContainer = tw.button`
w-6 h-6 cursor-pointer font-bold text-2xl
hover:text-red-500
`;
