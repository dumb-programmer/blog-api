import formatDate from "../../utils/formatDate";

const Post = ({ post }) => {
  const { _id, title, body } = post;
  return (
    <div className="post">
      <a href={`/posts/${_id}`}>
        <h2>{title}</h2>
      </a>
      <p className="post-meta">{formatDate(post.createdAt)}</p>
      <p>{body}</p>
    </div>
  );
};

export default Post;
