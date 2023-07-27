import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const PostSkeleton = () => (
  <div className="post">
    <Skeleton />
    <Skeleton width="20%" style={{ marginTop: 10 }} />

    <div style={{ marginTop: 40 }}>
      <Skeleton width="90%" />
      <Skeleton width={"70%"} style={{ marginTop: 10 }} />
      <Skeleton width="80%" style={{ marginTop: 10 }} />
      <Skeleton width="40%" style={{ marginTop: 10 }} />
    </div>
  </div>
);

export default PostSkeleton;
