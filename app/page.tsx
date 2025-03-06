"use client";
import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Code from "./components/Code";
import Resources from "./components/Resources";
import Sponsors from "./components/Sponsors";
import Footer from "./components/Footer";
import "./globals.css";
export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [url, setUrl] = useState("");
  return (
    <>
      <Header />
      <Hero />
      <div className=" text-center p-20 bg-base-100 min-h-screen bg-image">
        <h1 className="pb-10 text-xl font-extrabold">Try It</h1>
        <Code />
        <h2 className="font-bold mt-7">
          Api Emulator can give you your desired data
        </h2>
        {isModalOpen && (
          <div className=" fixed z-10 inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="modal-box bg-white p-5 rounded-md shadow-lg">
              <h3 className="font-bold text-lg">Copy!</h3>
              <code>{url}</code>
              <div className="modal-action">
                <button className="btn" onClick={() => setIsModalOpen(false)}>
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
        <h1 className="mt-10 text-xl font-extrabold">Resources</h1>

        <Resources setUrl={setUrl} setIsModalOpen={setIsModalOpen} />
        <Sponsors />
      </div>
      <Footer />
    </>
  );
}
