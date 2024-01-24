import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { onLogin } from "./features/authSlice";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/login", { email, password })
      .then((result) => {
        console.log(result);
        if (result.data.success) {
          dispatch(
            onLogin({
              user: result.data.user,
              token: "",
            })
          );
          navigate("/"); // Redirect to '/' on successful login
        } else {
          alert(result.data.message); // Display an alert for unsuccessful login
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex flex-col items-center h-screen bg-cyan-500">
      {/* Add the heading here */}
      <h1 className="text-6xl py-10 font-bold text-white mb-8">
        REAL TIME EYE DISEASE DETECTION
      </h1>

      {/* Login form */}
      <div className="w-96 p-8 rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              autoComplete="off"
              name="email"
              className="mt-1 p-2 w-full border rounded-md"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              className="mt-1 p-2 w-full border rounded-md"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-sm text-white">
          Don't have an account?{" "}
          <Link to="/register" className="text-black">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
