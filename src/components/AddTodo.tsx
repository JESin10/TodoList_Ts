import React from "react";

interface InputContentProps {
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
  onSubmit(event: React.FormEvent<HTMLFormElement>): void;
  inputContent: string;
}

export default function AddTodo({
  onChange,
  onSubmit,
  inputContent,
}: InputContentProps) {
  return (
    <div className="AddTodoContainer">
      <form onSubmit={(event) => onSubmit(event)}>
        <input
          className="AddTodoInput"
          onChange={(e) => onChange(e)}
          type="text"
          placeholder="Tell me What TODO"
          value={inputContent}
        />
        <button type="submit" className="AddTodoSubmitBtn">
          Add
        </button>
      </form>
    </div>
  );
}
