// important imports
import React,{useState} from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
// import MainFileCrud from "./components/crud/MainFileCrud";
import Homepage from "./components/Homepage/Homepage";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

function App() {
  const [loginUser, setLoginUser] = useState({});
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            loginUser && loginUser._id ? <Homepage setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser} />
          }
        />
        <Route path="/login" element={<Login setLoginUser={setLoginUser} />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
