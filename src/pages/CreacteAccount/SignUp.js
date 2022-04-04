import { useDispatch, useSelector } from "react-redux";
import "./SignUp.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { register, loading, end_loading } from "../../actions/Action";
import { css } from "@emotion/react";
import ScaleLoader from "react-spinners/ScaleLoader";
import { useAlert } from "react-alert";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
const SignUp = () => {
  const load = useSelector((state) => state.loadingReducer);
  const alert = useAlert();
  const navigate = useNavigate();

  const [fName, setFname] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(loading());
    const data = await register(
      fName,
      email,
      contact,
      password,
      confirmPassword
    );

    if (data[0] === "User added") {
      dispatch(end_loading());
      alert.info("Account creation successful");
      navigate("/login");
    } else {
      alert.error("Password don't match");
    }
  };
  return (
    <div className="login-container">
      <div className="sign-up-card">
        <div className="login-profile-img">
          <img src="img/avatar.png" alt="..." width="100%" />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Full name</label>
            <div className="input-form">
              <input
                type="text"
                id="username"
                required={true}
                onChange={(e) => setFname(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <div className="input-form">
              <input
                type="email"
                id="email"
                required={true}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="contact">Contact</label>
            <div className="input-form">
              <input
                type="text"
                id="contact"
                required={true}
                onChange={(e) => setContact(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="input-form">
              <input
                type="password"
                id="password"
                required={true}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="confirmPass">Confirm password</label>
            <div className="input-form">
              <input
                type="password"
                id="confirmPass"
                required={true}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group">
            <button type="submit">Sign Up</button>
            <div className="loader">
              <ScaleLoader
                color={"#03e3fc"}
                loading={load}
                css={override}
                size={50}
              />
            </div>
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
