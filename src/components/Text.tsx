import React, { useState } from "react";
import tw from "tailwind-styled-components";

export interface TextProps {
  completed?: boolean;
  children: React.ReactNode;
}

export default function Text({ completed, children }: TextProps) {
  return (
    <>
      {completed ? (
        <CompletedText>{children}</CompletedText>
      ) : (
        <TextContainer>{children}</TextContainer>
      )}
    </>
  );
}

const TextContainer = tw.div`
w-full h-auto box-border 
overflow-hidden truncate whitespace-nowrap
px-2.5per
`;

const CompletedText = tw(TextContainer)`
line-through
`;
