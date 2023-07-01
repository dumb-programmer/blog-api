import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import PostDetail from "./components/PostDetail";
import Posts from "./components/Posts";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Posts />} />
          <Route path="/posts/:postId" element={<PostDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
