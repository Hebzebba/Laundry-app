import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { login, loading, end_loading, loginStat } from "../../actions/Action";
import "./Login.css";
import { useAlert } from "react-alert";

import { css } from "@emotion/react";
import ScaleLoader from "react-spinners/ScaleLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Login = () => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const alert = useAlert();

  const status = useSelector((state) => state.auth);
  const load = useSelector((state) => state.loadingReducer);

  const dispatch = useDispatch();

  const handleUserChange = (e) => {
    setUser(e.target.value);
  };
  const handlePassChange = (e) => {
    setPass(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(loading());
    const status = await login(user, pass);
    if (status) {
      dispatch(end_loading());
      if (status === "No record found" || status === "Authentication failed") {
        alert.error("User not found or invalid account");
      } else {
        dispatch(loginStat());
        localStorage.setItem("loginStat", status);
      }
    }
  };

  if (status || localStorage.getItem("loginStat")) {
    return <Navigate to="/laundry" />;
  } else {
    return (
      <div className="login-container">
        <div className="login-card">
          <div className="login-profile-img">
            <img src="img/avatar.png" alt="..." width="100%" />
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Email</label>
              <div className="input-form">
                <input
                  type="email"
                  name="email"
                  id="emal"
                  required={true}
                  onChange={handleUserChange}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="username">Password</label>
              <div className="input-form">
                <input
                  type="password"
                  name="pass"
                  id="password"
                  required={true}
                  onChange={handlePassChange}
                />
              </div>
            </div>
            <div className="form-group">
              <button type="submit">Login</button>
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
            <Link to="/sign-up">Don't have an account {">>"}</Link>
          </small>
        </div>
      </div>
    );
  }
};

export default Login;
