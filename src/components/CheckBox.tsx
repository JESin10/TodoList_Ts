import React from "react";
import "../components/checkBox.css";

interface CheckBoxProps {
  checked?: boolean;
  onClickCheck?(): void;
}

export default function CheckBox({ checked, onClickCheck }: CheckBoxProps) {
  return (
    <>
      <div className="checkbox-container" onClick={onClickCheck}>
        <div className="checkIcon">{checked && "✔️"}</div>
      </div>
    </>
  );
}
