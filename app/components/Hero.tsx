import React from "react";

export default function Hero() {
  return (
    <div className="hero bg-base-200 min-h-screen bg-image">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">The Developer Api Emulator</h1>
          <p className="py-6">
            Free fake and reliable API for testing and prototyping. Powered by
            JSON nextjs engine
          </p>
          <button className="btn btn-primary">How to use</button>
        </div>
      </div>
    </div>
  );
}
