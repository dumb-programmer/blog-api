import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  return (
    <header>
      <h1>
        <Link to="/">Blog</Link>
      </h1>
    </header>
  );
};

export default Header;
