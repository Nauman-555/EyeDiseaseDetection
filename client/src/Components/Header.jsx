import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { onLogout } from "../features/authSlice";
export default function Header() {
  const [toggle, setToggle] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoggedIn, user } = useSelector((state) => state.auth);

  const logoutHandler = () => {
    dispatch(onLogout());
    navigate("/login");
  };

  return (
    <div className=" bg-[#2699fb] p-4">
      <div className="max-w-[1240px] flex items-center py-[12px] justify-between mx-auto">
        <div className="text-3xl font-bold">EyeDisease</div>
        {toggle ? (
          <AiOutlineClose
            onClick={() => setToggle(!toggle)}
            className="text-white text-2xl md:hidden block"
          />
        ) : (
          <AiOutlineMenu
            onClick={() => setToggle(!toggle)}
            className="text-white text-2xl md:hidden block"
          />
        )}
        <ul className="hidden md:flex text-white gap-10 items-center">
          <li>Home</li>
          <li>Comapny</li>
          <li>Resources</li>
          <li>About</li>
          <li>Contact</li>
          {isLoggedIn && (
            <button
              className="bg-black text-white px-8 py-3 rounded-md"
              onClick={logoutHandler}
            >
              Logout
            </button>
          )}
        </ul>

        {/* Responsive */}
        <ul
          className={`duration-300 md:hidden w-full h-screen text-white gap-10 fixed bg-black top-[92px]
              ${toggle ? "left-[0]" : "left-[-100%]"}
        `}
        >
          <li className="p-5">Home</li>
          <li className="p-5">Comapny</li>
          <li className="p-5">Resources</li>
          <li className="p-5">About</li>
          <li className="p-5">Contact</li>
        </ul>
      </div>
    </div>
  );
}
