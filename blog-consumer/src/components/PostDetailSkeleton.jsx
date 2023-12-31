import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const PostDetailSkeleton = (props) => (
  <>
    <Skeleton height={25} />
    <Skeleton height={20} width={"70%"} style={{ marginTop: 10 }} />
    <Skeleton width="20%" style={{ marginTop: 10 }} />

    <div style={{ marginTop: 40 }}>
      <Skeleton />
      <Skeleton width={"70%"} style={{ marginTop: 10 }} />
      <Skeleton width="80%" style={{ marginTop: 10 }} />
      <Skeleton width="40%" style={{ marginTop: 10 }} />
    </div>
  </>
);

export default PostDetailSkeleton;
