import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CommentSkeleton = (props) => (
  <div style={{ marginTop: 50 }}>
    <Skeleton width={200} />

    <div style={{ marginTop: 10 }}>
      <Skeleton />
      <Skeleton width={"70%"} style={{ marginTop: 10 }} />
      <Skeleton width="40%" style={{ marginTop: 10 }} />
    </div>
  </div>
);

export default CommentSkeleton;
