const Post = ({ post }) => {
  const { _id, title, body } = post;
  return (
    <div className="post">
      <a href={`/posts/${_id}`}>
        <h2>{title}</h2>
      </a>
      <p className="post-meta">
        {new Intl.DateTimeFormat("en-pk").format(post.createdOn)}
      </p>
      <p>{body}</p>
    </div>
  );
};

export default Post;
