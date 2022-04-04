import { useRef } from "react";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  IoLogOutOutline,
  IoLogInOutline,
  IoPersonSharp,
  IoCloseCircleSharp,
  IoMenu,
} from "react-icons/io5";

const Header = () => {
  const authStatus = useSelector((state) => state.auth);
  const toggleNavRef = useRef(null);
  const openNav = () => (toggleNavRef.current.style.width = "200px");
  const closeNav = () => (toggleNavRef.current.style.width = 0);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
    window.location.reload(true);
  };
  return (
    <div>
      <div className="menu-nav" ref={toggleNavRef}>
        <div className="close-btn-container">
          <IoCloseCircleSharp
            className="close-btn"
            onClick={closeNav}
            size={24}
          />
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
          {authStatus || localStorage.getItem("loginStat") ? (
            <div className="nav-links nav-link-logout" onClick={handleLogout}>
              Logout <IoLogOutOutline />
            </div>
          ) : (
            <>
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
            </>
          )}
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

          {authStatus || localStorage.getItem("loginStat") ? (
            <div className="logout-btn" onClick={handleLogout}>
              Logout <IoLogOutOutline />
            </div>
          ) : (
            <div className="header-btn-group">
              <Link to="/login">
                <div className="login-btn">
                  Login <IoLogInOutline />
                </div>
              </Link>
              <Link to="sign-up">
                <div className="sign-up-btn">
                  Sign-up <IoPersonSharp />
                </div>
              </Link>
            </div>
          )}
          <div className="menu-icon">
            <IoMenu onClick={openNav} size={24} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
