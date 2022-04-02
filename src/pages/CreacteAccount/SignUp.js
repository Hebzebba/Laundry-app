import "./SignUp.css";
import { Link } from "react-router-dom";
const SignUp = () => {
  return (
    <div className="login-container">
      <div className="sign-up-card">
        <div className="login-profile-img">
          <img src="img/avatar.png" alt="..." width="100%" />
        </div>
        <form>
          <div className="form-group">
            <label htmlFor="username">Full name</label>
            <div className="input-form">
              <input type="text" id="username" required={true} />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <div className="input-form">
              <input type="email" id="email" required={true} />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="contact">Contact</label>
            <div className="input-form">
              <input type="text" id="contact" required={true} />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="input-form">
              <input type="password" id="password" required={true} />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="confirmPass">Confirm password</label>
            <div className="input-form">
              <input type="password" id="confirmPass" required={true} />
            </div>
          </div>
          <div className="form-group">
            <button>Sign Up</button>
          </div>
        </form>
        <small>
          <Link to="/login"> {"<<"} Already have an account</Link>
        </small>
      </div>
    </div>
  );
};

export default SignUp;
