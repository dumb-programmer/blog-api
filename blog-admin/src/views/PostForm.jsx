import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropType from "prop-types";
import createPost from "../api/createPost";
import useAuthContext from "../hooks/useAuthContext";
import Loader from "../components/Loader";
import RichTextEditor from "../components/RichTextEditor";

const PostForm = ({ title = "Create Post", post, onSubmit = createPost }) => {
  const [data, setData] = useState({
    title: post?.title || "",
    body: post?.body || "",
    publish: post?.isPublished || false,
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { token } = useAuthContext();

  const handleInput = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await onSubmit(data, token);
      if (response.status === 200) {
        navigate("/");
      }
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <div className="centered">
      <form className="form" onSubmit={loading ? null : handleSubmit}>
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
          <RichTextEditor
            onChange={(value) => setData({ ...data, body: value })}
            value={data.body}
          />
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
          <label htmlFor="publish">Publish</label>
          <input
            id="publish"
            name="publish"
            className="toggle"
            type="checkbox"
            onChange={() =>
              setData({
                ...data,
                publish: !data.publish,
              })
            }
            defaultChecked={data?.publish}
          />
        </div>
        <div className="form-control">
          <div className="flex-end">
            <button
              type="submit"
              className="btn primary-btn"
              disabled={loading}
            >
              {loading ? <Loader size={24} color="#fff" /> : "Submit"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

PostForm.propTypes = {
  title: PropType.string,
  post: PropType.object,
  onSubmit: PropType.func,
};

export default PostForm;
