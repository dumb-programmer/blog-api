import "../styles/Form.css";

const Login = () => {
  return (
    <main className="centered">
      <form className="form">
        <h1>Login</h1>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" />
        </div>
        <div className="form-control flex-end">
          <button className="btn primary-btn">Login</button>
        </div>
      </form>
    </main>
  );
};

export default Login;
