import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const PostSkeleton = () => (
  <div className="post">
    <Skeleton />
    <Skeleton width="80%" style={{ marginTop: 10 }} />
    <Skeleton width="40%" style={{ marginTop: 10 }} />
    <Skeleton width="20%" style={{ marginTop: 10 }} />
  </div>
);

export default PostSkeleton;
