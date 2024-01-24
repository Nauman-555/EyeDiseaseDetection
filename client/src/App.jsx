import React, { useEffect } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from "./Signup";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import { useDispatch, useSelector } from "react-redux";
import { onLogin, onLogout } from "./features/authSlice";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoggedIn } = useSelector((state) => state.auth);

  useEffect(() => {
    // fetch the user data from the local storage and set it in the redux store
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user);
    if (user) {
      // dispatch the action to set the user and token in the redux store
      dispatch(onLogin({ user, token: "" }));
      navigate("/");
    } else {
      // dispatch the action to remove the user and token from the redux store
      dispatch(onLogout());
    }
  }, [dispatch]);

  return (
    <Routes>
      {!isLoggedIn && <Route path="/register" element={<Signup />}></Route>}
      {!isLoggedIn && <Route path="/login" element={<Login />}></Route>}
      <Route path="/" element={<Home />}></Route>
    </Routes>
  );
}

export default App;
