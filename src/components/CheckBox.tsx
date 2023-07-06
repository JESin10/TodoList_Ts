import React from "react";
import tw from "tailwind-styled-components";

interface CheckBoxProps {
  checked?: boolean;
  onClick(): void;
}

export default function CheckBox(props: CheckBoxProps) {
  return (
    <>
      <CheckBoxContainer className="container" onClick={props.onClick}>
        <div className="checkIcon">{props.checked && "✔️"}</div>
      </CheckBoxContainer>
    </>
  );
}

const CheckBoxContainer = tw.div`
w-6 h-6 flex relative justify-center items-center
border-2 border-black cursor-pointer
`;
