import React from "react";
import eyeImg from "../assets/eyeImg.jpg";
export default function Experts() {
  return (
    <div className="p-2 max-w-[1240px] mx-auto my-10 md:grid grid-cols-2">
      <div className=" col-span-1 md:w-[80%] text-center">
        <img src={eyeImg} alt="error 404" className="inline" />
      </div>
      <div className="col-span-1 flex flex-col justify-center">
        <h1 className="text-[#00df9a] font-bold my-2">Disease Detection</h1>
        <p className="my-2 text-justify">
          The term "eye disease" refers to a wide range of medical conditions
          that can affect the eyes, vision, and overall eye health. These
          diseases can involve different parts of the eye, including the cornea,
          retina, lens, optic nerve, and other structures. Eye diseases can be
          caused by various factors such as genetics, age, environmental
          factors, and underlying health conditions.Conditions like
          nearsightedness (myopia), farsightedness (hyperopia), and astigmatism
          are examples of refractive errors that affect the eye's ability to
          focus light.Cataracts occur when the lens of the eye becomes cloudy,
          leading to blurred vision. It is often associated with aging but can
          also result from injury or other medical conditions.Age-related
          macular degeneration (AMD) affects the central part of the retina
          (macula) and can result in gradual loss of central vision.It's
          important to note that early detection and treatment of eye diseases
          are crucial for preserving vision. Regular eye exams with an eye care
          professional can help identify potential issues ..... Read More
        </p>
        {/* <button className="w-[30%] bg-black text-white p-3 rounded">
          Read More
        </button> */}
      </div>
    </div>
  );
}
