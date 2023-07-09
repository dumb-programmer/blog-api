import Skeleton from "react-loading-skeleton";

const PostSkeleton = () => {
  return (
    <div className="post">
      <Skeleton count={2} />
      <Skeleton width="20%" />
      <Skeleton
        count={4}
        width={25}
        height={25}
        containerClassName="btn-skeleton-container"
      />
    </div>
  );
};

export default PostSkeleton;
