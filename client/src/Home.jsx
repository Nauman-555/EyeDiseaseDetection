import React, { useEffect } from "react";
import Header from "./Components/Header";
import Banner from "./Components/Banner";
import Experts from "./Components/Experts";
// import Newsletter from './Components/Newsletter';
import Plans from "./Components/Plans";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn]);
  return (
    <>
      <Header />
      <Banner />
      <Experts />
      {/* <Newsletter/> */}
      <Plans />
    </>
  );
}
export default Home;
