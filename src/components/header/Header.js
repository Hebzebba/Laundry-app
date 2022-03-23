import { CloseOutlined, MenuOutlined } from "@material-ui/icons";
import "./Header.css";
import { Link } from "react-router-dom";

let name = "black";

const openNav = () =>
  (document.querySelector(".menu-nav").style = "width: 30vw");
const closeNav = () => (document.querySelector(".menu-nav").style = "width: 0");

const Header = () => {
  return (
    <div>
      <div className="menu-nav">
        <div className="close-btn-container">
          <CloseOutlined className="close-btn" onClick={closeNav} />
        </div>
        <div className="menu-nav-link">
          <div className="nav-links">
            <Link to="/" style={{ color: "#fff" }}>
              Home
            </Link>
          </div>

          <div className="nav-links">
            {" "}
            <Link to="/laundry" style={{ color: "#fff" }}>
              Laundrys
            </Link>
          </div>
          <div className="nav-links">
            {" "}
            <Link to="/about" style={{ color: "#fff" }}>
              About
            </Link>
          </div>
          <div className="nav-links">
            {" "}
            <Link to="/contact" style={{ color: "#fff" }}>
              Contact
            </Link>
          </div>

          <div className="nav-links">
            {" "}
            <Link to="/sign-up" style={{ color: "#fff" }}>
              Sign-up
            </Link>
          </div>

          <div className="nav-links">
            {" "}
            <Link to="/login" style={{ color: "#fff" }}>
              Login
            </Link>
          </div>
        </div>
      </div>
      <div className="header-container">
        <div className="header-sub-container">
          <Link to="/">
            <div className="brand">
              <img src="../../../img/brand.png" alt="" width="100%" />
            </div>
          </Link>
          <div className="nav">
            <ul>
              <Link to="/">Home</Link>
              <Link to="/laundry">Laundry</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
            </ul>
          </div>

          <div className="header-btn-group">
            <div className="login-btn">Login</div>
            <div className="sign-up-btn">Sign-up</div>
          </div>
          <div className="menu-icon">
            <MenuOutlined onClick={openNav} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
