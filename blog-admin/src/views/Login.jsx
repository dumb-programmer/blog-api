import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import login from "../api/login";
import useAuthContext from "../hooks/useAuthContext";
import "../styles/Form.css";

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(false);
  const { setUser, setToken } = useAuthContext();
  const navigate = useNavigate();

  const handleInput = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    setErrors(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors(null);
    try {
      const response = await login(data);
      if (response.status === 200) {
        const { token, user } = await response.json();
        localStorage.setItem("token", token);
        localStorage.setItem("user", user);
        setUser(user);
        setToken(token);
        navigate("/");
      } else if (response.status === 404) {
        setErrors({
          email: "No user with this email exists",
        });
      } else if (response.status === 401) {
        setErrors({
          password: "Incorrect password",
        });
      } else if (response.status === 403) {
        const { errors: errorMessage } = await response.json();
        setErrors({
          [errorMessage.path]: errorMessage.msg,
        });
      } else if (response.status === 429) {
        setErrors({
          tooManyRequests: "There were too many requests, calm down",
        });
      }
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <main className="centered">
      <form className="form" onSubmit={loading ? null : handleSubmit}>
        <h1>Login</h1>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            className={errors?.email ? "input__invalid" : ""}
            onInput={handleInput}
            required
          />
          <span className="error-message">{errors?.email}</span>
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            className={errors?.password ? "input__invalid" : ""}
            onInput={handleInput}
            required
          />
          <span className="error-message">{errors?.password}</span>
        </div>
        <span className="error-message">{errors?.tooManyRequests}</span>
        <div className="form-control flex-end">
          <button className="btn primary-btn" disabled={loading}>
            {loading ? <Loader size={24} color="#fff" /> : "Login"}
          </button>
        </div>
      </form>
    </main>
  );
};

export default Login;
