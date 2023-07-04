import React from "react";
import "../style/CheckBox.css";

interface CheckBoxProps {
  checked?: boolean;
  onClick(): void;
}

export default function CheckBox(props: CheckBoxProps) {
  return (
    <>
      <div className="container" onClick={props.onClick}>
        <div className="checkIcon">{props.checked && "✔️"}</div>
      </div>
    </>
  );
}
