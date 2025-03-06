"use client";
import React, { useState } from "react";

export default function Hero() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="hero bg-base-200 min-h-screen bg-image flex flex-col items-center justify-center">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">The Developer API Emulator</h1>
          <p className="py-6">
            Free fake and reliable API for testing and prototyping. Powered by
            JSON Next.js engine.
          </p>
          <button
            className="btn btn-primary"
            onClick={() => setShowVideo(true)}
          >
            How to use
          </button>
        </div>
      </div>

      {/* Video Popup */}
      {showVideo && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
          <div className="relative bg-white p-4 rounded-lg">
            <button
              className="absolute top-2 right-2 text-black text-2xl"
              onClick={() => setShowVideo(false)}
            >
              ✖
            </button>
            <iframe
              src="https://www.youtube.com/embed/GUgvTWNw0f4?si=Xs2V0tq66yljYkYl"
              title="YouTube Video"
              frameBorder="0"
              allowFullScreen
              className="rounded-lg w-[300px] h-[200px]"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}
