import "./Header.css";

let name = "black";
const Header = () => {
  return (
    <div className="header-container">
      <div className="header-sub-container">
        <div className="brand">
          <img src="../../../img/brand.png" alt="" width="100%" />
        </div>
        <div className="nav">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Login/Register</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
