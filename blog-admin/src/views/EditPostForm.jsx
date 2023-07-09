import { useParams } from "react-router-dom";
import useApi from "../hooks/useApi";
import getPost from "../api/getPost";
import PostForm from "./PostForm";
import updatePost from "../api/updatePost";
import useAuthContext from "../hooks/useAuthContext";
import PostFormSkeleton from "../components/PostFormSkeleton";
import ErrorPage from "./ErrorPage";

const EditPostForm = () => {
  const { postId } = useParams();
  const { token } = useAuthContext();
  const { data, loading, error } = useApi(() => getPost(postId, token));

  return (
    <>
      {error && <ErrorPage error={error} />}
      {loading && <PostFormSkeleton />}
      {data && (
        <PostForm
          title="Edit Post"
          post={data}
          onSubmit={(data, token) => updatePost(postId, data, token)}
        />
      )}
    </>
  );
};

export default EditPostForm;
