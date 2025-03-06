import React from "react";

export default function Sponsors() {
  return (
    <div className="hero">
      <div className="flex flex-col md:flex-row justify-evenly rounded-2xl border-b-4 border-b-base-400 bg-cyan-950 w-[90%] p-10 text-stone-400 mt-10">
        <div className="">
          <h1 className="font-extrabold text-xl">6thtouch robotics</h1>
          <h1 className="font-extrabold text-xl">Maxbot Solution</h1>
          <h1 className="font-extrabold text-xl">Proxytech</h1>
          <h1 className="font-extrabold text-xl">Champay</h1>
          <h1 className="font-extrabold text-xl">Inkreo Labs</h1>
        </div>
        <div className="">
          <h1 className="font-bold text-white text-xl w-80">
            This Project has been trusted and sponsored by so many company,
            agencies, github users.
          </h1>
        </div>
      </div>
    </div>
  );
}
