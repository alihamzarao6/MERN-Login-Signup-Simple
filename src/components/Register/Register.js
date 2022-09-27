import React, { useState } from "react";
import styles from "./Register.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    reEnterPassword: "",
  });

  const navigate = useNavigate();

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setUser({
      ...user,
      [name]: value,
    });
  };

  const onUserRegister = () => {
    const { name, email, password, reEnterPassword } = user;

    if (name && email && password && password === reEnterPassword) {
      axios.post("http://localhost:8000/register", user).then((res) => {
        alert(res.data.message);
        navigate("/login");
      })
    } 
    else {
      alert("Invallid Input");
    }
  };

  return (
    <div className={styles.register}>
      <h1>Register</h1>
      <input
        type="text"
        name="name"
        value={user.name}
        placeholder="Your Name"
        onChange={inputChangeHandler}
      ></input>
      <input
        type="text"
        name="email"
        value={user.email}
        placeholder="Your Email"
        onChange={inputChangeHandler}
      ></input>
      <input
        type="password"
        name="password"
        value={user.password}
        placeholder="Your Password"
        onChange={inputChangeHandler}
      ></input>
      <input
        type="password"
        name="reEnterPassword"
        value={user.reEnterPassword}
        placeholder="Re-enter Password"
        onChange={inputChangeHandler}
      ></input>
      <div className={styles.button} onClick={onUserRegister}>
        Register
      </div>
      <div>or</div>
      <div className={styles.button} onClick={() => navigate("/login")}>Login</div>
    </div>
  );
};

export default Register;
