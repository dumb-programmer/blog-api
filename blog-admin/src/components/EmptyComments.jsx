import CommentIcon from "./icons/CommentIcon";

const EmptyComments = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "0.7rem",
      }}
    >
      <CommentIcon size={30} color="blueviolet" />
      <h3>No Comments Yet</h3>
      <p>No has posted any comments on this post yet</p>
    </div>
  );
};

export default EmptyComments;
