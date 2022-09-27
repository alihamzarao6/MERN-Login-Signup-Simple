import React, {useState} from 'react';
import styles from './Login.module.css';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Login = ({ setLoginUser }) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
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

  const onUserLogin = () => {
    axios.post("http://localhost:8000/login", user).then((res) => {
      alert(res.data.message)
      setLoginUser(res.data.user)
      navigate("/")
    });
  };

  return (
    <div className={styles.login}>
      <h1>Login</h1>
      <input
        type="text"
        name="email"
        value={user.email}
        onChange={inputChangeHandler}
        placeholder="Enter your Email"
      ></input>
      <input
        type="password"
        name="password"
        value={user.password}
        onChange={inputChangeHandler}
        placeholder="Enter your Password"
      ></input>
      <div className={styles.button} onClick={onUserLogin}>
        Login
      </div>
      <div>or</div>
      <div className={styles.button} onClick={() => navigate("/register")}>
        Register
      </div>
    </div>
  );
};

export default Login