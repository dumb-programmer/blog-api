import Skeleton from "react-loading-skeleton";

const PostFormSkeleton = () => {
  return (
    <div className="centered">
      <div className="form">
        <h2>Edit Post</h2>
        <Skeleton height={26} />
        <Skeleton height="50vh" style={{ marginTop: 10 }} />
        <Skeleton height={26} style={{ marginTop: 10 }} width="30%" />
        <div className="flex-end" style={{ marginTop: 10 }}>
          <Skeleton width={100} height={37} style={{ borderRadius: 20 }} />
        </div>
      </div>
    </div>
  );
};

export default PostFormSkeleton;
