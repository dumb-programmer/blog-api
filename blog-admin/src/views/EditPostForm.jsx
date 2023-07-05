import { useParams } from "react-router-dom";
import useApi from "../hooks/useApi";
import getPost from "../api/getPost";
import PostForm from "./PostForm";
import updatePost from "../api/updatePost";

const EditPostForm = () => {
  const { postId } = useParams();
  const { data, loading, error } = useApi(() => getPost(postId));

  return (
    data && (
      <PostForm
        post={data}
        onSubmit={(data, token) => updatePost(postId, data, token)}
      />
    )
  );
};

export default EditPostForm;
