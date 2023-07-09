import Skeleton from "react-loading-skeleton";

const CommentSkeleton = () => {
  return (
    <div className="comment">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Skeleton width={100} />
        <Skeleton width={24} height={24} />
      </div>
      <Skeleton width="40%" />
      <Skeleton count={3} />
    </div>
  );
};

export default CommentSkeleton;
