import { useState } from "react";
import createPost from "../api/createPost";
import useAuthContext from "../hooks/useAuthContext";

const PostForm = ({ title = "Create Post", post, onSubmit = createPost }) => {
  const [data, setData] = useState(post || { title: "", body: "" });
  const { token } = useAuthContext();

  const handleInput = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await onSubmit(data, token);
      if (response === 200) {
        console.log("Post created");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="centered">
      <form
        className="form"
        style={{ minWidth: "60vw" }}
        onSubmit={handleSubmit}
      >
        <h2>{title}</h2>
        <div className="form-control">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            name="title"
            type="text"
            value={data.title}
            onChange={handleInput}
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="body">Post</label>
          <textarea
            id="body"
            name="body"
            value={data.body}
            style={{ minHeight: 200 }}
            onChange={handleInput}
          ></textarea>
        </div>
        <div className="form-control" style={{ display: "flex" }}>
          <label htmlFor="publish">Publish</label>
          <input
            id="publish"
            name="publish"
            type="checkbox"
            onChange={handleInput}
          />
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
