const PostForm = () => {
  return (
    <div className="centered">
      <form className="form" style={{ minWidth: "60vw" }}>
        <h2>Edit Post</h2>
        <div className="form-control">
          <label htmlFor="title">Title</label>
          <input id="title" name="title" type="text" />
        </div>
        <div className="form-control">
          <label htmlFor="body">Post</label>
          <textarea id="body" name="body" style={{ minHeight: 200 }}></textarea>
        </div>
        <div className="form-control" style={{ display: "flex" }}>
          <label htmlFor="publish">Publish</label>
          <input id="publish" name="publish" type="checkbox" />
        </div>
        <div className="form-control">
          <div className="flex-end">
            <button type="submit" className="btn primary-btn">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PostForm;
