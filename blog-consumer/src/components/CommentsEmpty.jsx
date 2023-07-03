import React from "react";
import CommentIcon from "../icons/CommentIcon";

const CommentsEmpty = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "0.7rem",
      }}
    >
      <CommentIcon height={30} width={30} stroke="blueviolet" />
      <h3>No Comments Yet</h3>
      <p>Be the first to post a comment</p>
    </div>
  );
};

export default CommentsEmpty;
