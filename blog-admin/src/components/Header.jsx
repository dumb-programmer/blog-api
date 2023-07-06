import { Link } from "react-router-dom";
import useAuthContext from "../hooks/useAuthContext";

const Header = () => {
  const { setUser, setToken } = useAuthContext();

  const handleLogout = () => {
    setUser(null);
    setToken(null);
    localStorage.clear();
  };

  return (
    <header>
      <h1>
        <Link to="/">Blog</Link>
      </h1>
      <button className="btn primary-btn" onClick={handleLogout}>
        Logout
      </button>
    </header>
  );
};

export default Header;
