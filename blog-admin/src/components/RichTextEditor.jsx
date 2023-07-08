import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "../styles/RichTextEditor.css";

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["bold", "italic", "underline", "strike"],
    [{ script: "sub" }, { script: "super" }],
    ["blockquote", "code-block"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ indent: "-1" }, { indent: "+1" }, { align: [] }],
    ["link", "image", "video"],
    ["clean"],
  ],
};

const RichTextEditor = (props) => {
  return <ReactQuill modules={modules} theme="snow" {...props} />;
};

export default RichTextEditor;
