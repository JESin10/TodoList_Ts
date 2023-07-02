import React from "react";
import "../style/InputText.css";

interface InputTodo {
  // onChange(): void;
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
  onKeyDown(e: React.KeyboardEvent<HTMLInputElement>): void;
  inputText: string;
}

export default function InputText({
  onChange,
  onKeyDown,
  inputText,
}: InputTodo) {
  return (
    <>
      <input
        className="inputText"
        type="text"
        value={inputText}
        placeholder="할일을 입력하세요"
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
    </>
  );
}
