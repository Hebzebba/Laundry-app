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
          <div className="nav-links">Home</div>
          <div className="nav-links">Laundrys</div>
          <div className="nav-links">About</div>
          <div className="nav-links">Contact</div>
        </div>
      </div>
      <div className="header-container">
        <div className="header-sub-container">
          <div className="brand">
            <img src="../../../img/brand.png" alt="" width="100%" />
          </div>
          <div className="nav">
            <ul>
              <Link to="/">Home</Link>
              <Link to="/laundry">Laundry</Link>
              <li>About</li>
              <li>Contact</li>
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
