import React from "react";

export default function Sponsors() {
  return (
    <div className="hero box-content flex flex-col md:flex-row justify-center items-center gap-10 p-10 w-full">
      <div className="steps steps-vertical w-[90%] md:w-[50%] text-stone-400">
        <div className="step step-primary">
          <h1 className="font-extrabold text-xl">6thtouch Robotics</h1>
        </div>
        <div className="step step-primary">
          <h1 className="font-extrabold text-xl">Maxbot Solution</h1>
        </div>
        <div className="step step-primary">
          <h1 className="font-extrabold text-xl">Proxytech</h1>
        </div>
        <div className="step step-primary">
          <h1 className="font-extrabold text-xl">Champay</h1>
        </div>
        <div className="step step-primary">
          <h1 className="font-extrabold text-xl">Inkreo Labs</h1>
        </div>
      </div>

      <div className="rounded-2xl border-b-4 border-b-base-400 bg-cyan-950 p-12 w-[90%] md:w-[40%] text-center md:text-left">
        <h1 className="font-bold text-white text-xl">
          This project has been trusted and sponsored by many companies,
          agencies, and GitHub users.
        </h1>
      </div>
    </div>
  );
}
