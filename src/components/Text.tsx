import React, { useState } from "react";
import "../style/Text.css";

export interface TextProps {
  completed?: boolean;
  children: React.ReactNode;
}

export default function Text({ completed, children }: TextProps) {
  return (
    <>
      <div className={`text ${completed ? "completedText" : ""}`}>
        {children}
      </div>
    </>
  );
}
