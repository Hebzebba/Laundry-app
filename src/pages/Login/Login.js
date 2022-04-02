import { Link } from "react-router-dom";
import "./Login.css";
const Login = () => {
  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-profile-img">
          <img src="img/avatar.png" alt="..." width="100%" />
        </div>
        <form>
          <div className="form-group">
            <label htmlFor="username">User name</label>
            <div className="input-form">
              <input type="email" id="username" required={true} />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="username">Password</label>
            <div className="input-form">
              <input type="password" id="password" required={true} />
            </div>
          </div>
          <div className="form-group">
            <button>Login</button>
          </div>
        </form>
        <small>
          <Link to="/sign-up">Don't have an account {">>"}</Link>
        </small>
      </div>
    </div>
  );
};

export default Login;
