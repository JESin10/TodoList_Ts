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

// .container {
//   width: 25px;
//   height: 25px;
//   display: flex;
//   position: relative;
//   justify-content: center;
//   align-items: center;
//   border: 1px solid black;
//   cursor: pointer;
// }

// .container:hover {
//   border: 2px solid rgb(0, 216, 0);
// }

// .checkIcon {
//   position: absolute;
//   font-size: 30px;
//   color: rgb(0, 216, 0);
// }

const CheckBoxContainer = tw.div`
w-6 h-6 flex relative justify-center items-center
border-2 border-black cursor-pointer
`;
