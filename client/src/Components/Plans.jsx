import React from "react";
export default function Plans() {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          {/* <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt="/" /> */}
          <h2 className="text-4xl font-bold text-center py-8">Prevention</h2>
          {/* <p className='text-center text-4xl font-bold'>$149</p> */}
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">Regular Eye Exams</p>
            <p className="py-2 border-b mx-8">Eye Protection</p>
            <p className="py-2 border-b mx-8">Healthy Lifestyle Choices</p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            Know More
          </button>
        </div>
        <div className="w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
          {/* <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Double} alt="/" /> */}
          <h2 className="text-4xl font-bold text-center py-8">Diseases</h2>
          {/* <p className='text-center text-4xl font-bold'>$149</p> */}
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">Amblyopia (Lazy Eye) </p>
            <p className="py-2 border-b mx-8">Hyperopia (Farsightedness)</p>
            <p className="py-2 border-b mx-8">Myopia (Nearsightedness)</p>
          </div>
          <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            Know More
          </button>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          {/* <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Triple} alt="/" /> */}
          <h2 className="text-4xl font-bold text-center py-8">Cure</h2>
          {/* <p className='text-center text-4xl font-bold'>$149</p> */}
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">Medical Treatment </p>
            <p className="py-2 border-b mx-8">Follow Treatment Plans</p>
            <p className="py-2 border-b mx-8">Healthy Lifestyle Practices</p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            Know More
          </button>
        </div>
      </div>
    </div>
  );
}
