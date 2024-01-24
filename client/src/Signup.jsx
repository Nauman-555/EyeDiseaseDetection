import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { onLogin } from "./features/authSlice";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      alert("Please fill in all fields");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3001/register", {
        name,
        email,
        password,
      });
      console.log(response);

      const responseData = response.data;
      if (responseData && responseData.success) {
        dispatch(
          onLogin({
            user: responseData.user,
            token: "",
          })
        );
        navigate("/");
      } else {
        alert(responseData.message || "Registration failed. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center h-screen bg-cyan-500">
      <h1 className="text-6xl py-8 font-bold text-white mb-8">
        REAL TIME EYE DISEASE DETECTION
      </h1>
      <div className="w-96 p-8 rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-600"
            >
              Name
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              autoComplete="off"
              name="name"
              className="mt-1 p-2 w-full border rounded-md"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
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
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:border-green-300 w-full"
          >
            Register
          </button>
        </form>
        <p className="mt-4 text-sm text-white">
          Already have an account?{" "}
          <Link to="/login" className="text-green-200">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
