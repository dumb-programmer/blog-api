import { Link } from "react-router-dom";
import formatDate from "../utils/formatDate";

const Post = ({ post }) => {
  const { _id, title } = post;
  return (
    <div className="post">
      <Link to={`/posts/${_id}`}>
        <h2>{title}</h2>
      </Link>
      <p className="meta-data">{formatDate(post.createdAt)}</p>
    </div>
  );
};

export default Post;
