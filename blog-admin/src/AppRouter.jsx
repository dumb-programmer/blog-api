import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./views/Login";
import "./App.css";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
