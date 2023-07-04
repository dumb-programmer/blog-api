import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Login from "./views/Login";
import App from "./App";
import Index from "./views/Index";
import AuthContent from "./context/AuthContext";
import PostForm from "./views/PostForm";

const AppRouter = () => {
  const [user, setUser] = useState(null);
  return (
    <AuthContent.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/" element={<Index />} />
            <Route path="/posts/:postId/edit" element={<PostForm />} />
            <Route path="/posts/create" element={<PostForm />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </AuthContent.Provider>
  );
};

export default AppRouter;
