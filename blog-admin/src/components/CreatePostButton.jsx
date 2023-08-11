import { Link } from "react-router-dom";
import PlusIcon from "./icons/PlusIcon";

const CreatePostButton = () => {
  return (
    <Link
      to="/posts/create"
      style={{
        position: "fixed",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textDecoration: "none",
        height: 55,
        width: 55,
        fontSize: "1.7rem",
        boxShadow: "0px 0px 2px 2px rgba(0,0,0, 0.2)",
        color: "white",
        bottom: 20,
        right: 20,
        borderRadius: "50%",
        backgroundColor: "blueviolet",
      }}
    >
      <PlusIcon size={22} color="white"/>
    </Link>
  );
};

export default CreatePostButton;
