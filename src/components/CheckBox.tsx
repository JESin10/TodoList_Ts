import React from "react";
import "../style/CheckBox.css";
import { TextProps } from "./Text";

interface CheckBoxProps {
  checked?: boolean;
  onClick(): void;
}

export default function CheckBox(
  { checked, onClick }: CheckBoxProps,
  id: TextProps
) {
  return (
    <>
      <div className="container" onClick={() => onClick}>
        <div className="checkIcon">{checked && "✔️"}</div>
      </div>
    </>
  );
}
