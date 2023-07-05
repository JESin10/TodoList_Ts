import React from "react";
import tw from "tailwind-styled-components";

interface InputTodo {
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
    <InputContainer>
      <TextInput
        className="TodoInputContainer"
        type="text"
        value={inputText}
        placeholder="Press Enter"
        onChange={(e) => onChange(e)}
        onKeyDown={(e) => onKeyDown(e)}
      />
    </InputContainer>
  );
}

const TextInput = tw.input`
w-full h-16 mx-1per border-gray-100 border-2 box-border
focus:outline-none focus:border-gray-300 rounded-md
indent-3
`;

const InputContainer = tw.div`
items-center flex justify-center
`;
