import { useState } from "react";
import login from "../api/login";
import "../styles/Form.css";
import useAuthContext from "../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const { setUser } = useAuthContext();
  const navigate = useNavigate();

  const handleInput = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login(data);
      const { token } = await response.json();
      localStorage.setItem("token", token);
      setUser(token);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className="centered">
      <form className="form" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onInput={handleInput}
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onInput={handleInput}
            required
          />
        </div>
        <div className="form-control flex-end">
          <button className="btn primary-btn">Login</button>
        </div>
      </form>
    </main>
  );
};

export default Login;
