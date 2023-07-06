import { BrowserRouter, Route, Routes } from "react-router-dom";
import useUser from "./hooks/useUser";
import AuthContent from "./context/AuthContext";
import Login from "./views/Login";
import App from "./App";
import Index from "./views/Index";
import PostForm from "./views/PostForm";
import EditPostForm from "./views/EditPostForm";
import RequireAuth from "./components/RequireAuth";

const AppRouter = () => {
  const { user, setUser, token, setToken } = useUser();

  return (
    <AuthContent.Provider value={{ user, setUser, token, setToken }}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <RequireAuth>
                <App />
              </RequireAuth>
            }
          >
            <Route path="/" element={<Index />} />
            <Route path="/posts/:postId/edit" element={<EditPostForm />} />
            <Route path="/posts/create" element={<PostForm />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </AuthContent.Provider>
  );
};

export default AppRouter;
