import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "./Login.css";
import DbService from "../shared/service/DataBaseService";
import { useLogin } from "./LoginContext";
const LoginApp = () => {
  const {
    login,
    showUserDashboard,
    setShowuserDashboard,
    showAdminDashboard,
    setShowadminDashboard,
    adminLogin, setAdminlogin,
    setLogin
  } = useLogin();

  const [user, setuser] = useState({
    userName: "",
    userPassword: "",
  });

  const [users, setusers] = useState();
  const [admins, setAdmins] = useState();

  useEffect(() => {
    if(sessionStorage.getItem("user")){
      setLogin(true)
      setShowuserDashboard(true)
      navigate(`/userdashboard/${sessionStorage.getItem("user")}`)
      
    }else if(sessionStorage.getItem("admin")){
      setLogin(true)
      setShowadminDashboard(true)
      navigate(`/admindashboard/`)
    }
    else{
    DbService.get("users").then((res) => {

      setusers(res.data);
    });
    DbService.get("admins").then((res) => {
      setAdmins(res.data);
    });

    setShowuserDashboard(false);
    setShowadminDashboard(false);
  }
  }, []);

  const navigate = useNavigate();

  const inputChangeHandler = (event) => {
    const { name, value } = event.target;
    setuser({ ...user, [name]: value });
  };
  const checkData = (event) => {
    event.preventDefault();
    if (user.userName.trim() === "") {
      window.alert("Username is Required");
      return false;
    }
    if (!user.userName.trim().match("^[a-zA-Z0-9]{3,20}$")) {
      window.alert("User Name must contain only character min-3 and max-20");
      return false;
    }

    if (user.userPassword.trim() === "") {
      window.alert("Password is Required");
      return false;
    }
    if (
      !user.userPassword
        .trim()
        .match("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")
    ) {
      window.alert(
        "Password must contain Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character"
      );
      return false;
    }
    // window.alert(JSON.stringify(user));
    const isUser = users.find(
      (u) => u.username === user.userName && u.password === user.userPassword
    );
    if (isUser) {
      setShowuserDashboard(true);
      
      sessionStorage.setItem("user",isUser.id)
      navigate(`/userdashboard/${isUser.id}`);
    } else if (
      admins.find(
        (admin) =>
          admin.name === user.userName && admin.password === user.userPassword
      )
    ) {
      setAdminlogin(true)
      setShowadminDashboard(true);
      if(adminLogin){
        sessionStorage.setItem("admin","true")
      navigate("/admindashboard");
      }
    } else {
      window.alert("new user ? sign in");
    }
  };
  if (login) {
    return (
      <div className="Login_container">
        <h1 className="Title">Login</h1>
        <form onSubmit={checkData}>
          <label>
            Username:
            <input
              type="text"
              name="userName"
              onChange={inputChangeHandler}
              value={user.userName}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              name="userPassword"
              onChange={inputChangeHandler}
              value={user.userPassword}
            />
          </label>
          <br />
          <button className="login btn btn-primary" type="submit">
            Login
          </button>
          <button
            className=" signup btn btn-primary"
            type="submit"
            onClick={() => navigate("/signup")}
          >
            SignUp{" "}
          </button>
          {/* <Link to="productdashboard" className='btn btn-primary btn-sm'>SignUp</Link> */}
        </form>
      </div>
    );
  }
  const goToLogin = () => {
    navigate("/login");
  };

  return <>{goToLogin()}</>;
};

export default LoginApp;
