const Post = ({ post }) => {
  const { _id, title, body } = post;
  return (
    <div className="post">
      <a href={`/posts/${_id}`}>
        <h2>{title}</h2>
      </a>
      <p class="post-meta">1/07/2023</p>
      <p>{body}</p>
    </div>
  );
};

export default Post;
