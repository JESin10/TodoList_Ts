import React from "react";
import Comment from "../components/Comment";

export default function DetailPage(): JSX.Element {
  return (
    <div>
      <div>작성자</div>
      <div>내용</div>
      <div>2023-05-05</div>
      <div>
        댓글 목록
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </div>
    </div>
  );
}
