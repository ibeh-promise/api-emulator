"use client";
import { useEffect } from "react";
import Header from "./components/Header";
import getAllUsers from "./server/actions";
import "./globals.css";
export default function Home() {
  useEffect(() => {
    const users: any = getAllUsers();
    console.log("all users ", users);
  }, []);
  return (
    <>
      <Header />
      <div className="hero bg-base-200 min-h-screen bg-image">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">The Developer Api Emulator</h1>
            <p className="py-6">
              Free fake and reliable API for testing and prototyping. Powered by
              JSON nexjs engine
            </p>
            <button className="btn btn-primary">How to use</button>
          </div>
        </div>
      </div>
      <div className=" text-center p-20 bg-base-100 min-h-screen bg-image">
        <h1 className="pb-10 text-xl font-extrabold">Try It</h1>
        <div className=" text-center hero">
          <div className="mockup-code   w-[80%] box-content">
            <div
              role="tablist"
              className="tabs bg-transparent text-red-200 tabs-lifted"
            >
              <input
                type="radio"
                name="my_tabs_2"
                role="tab"
                className="tab text-neutral-500"
                aria-label="Fetch"
              />
              <div
                role="tabpanel"
                className="tab-content bg-transparent border-t-slate-100 rounded-box p-6 ml-7"
              >
                <pre data-prefix="1">
                  <code>fetch('https://unidb-server.com/todos/1')</code>

                  <code>.then(res ={">"} res.json())</code>

                  <code>.then(data ={">"} console.log(data))</code>
                </pre>
              </div>

              <input
                type="radio"
                name="my_tabs_2"
                role="tab"
                className="tab text-neutral-500"
                aria-label="Axios"
                defaultChecked
              />
              <div
                role="tabpanel"
                className="tab-content bg-transparent  border-t-slate-100   p-6"
              >
                <pre data-prefix="1">
                  <code>axios.get('https://unidb-server.com/todos/1')</code>

                  <code>.then(res ={">"} res.json())</code>

                  <code>.then(result ={">"} console.log(result.data))</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
        <h2 className="font-bold mt-7">
          Api Emulator can give you your desired data
        </h2>
        <div className="flex flex-col items-center gap-6 p-7 md:flex-row rounded-2xl">
          <div className="card bg-base-300 w-96 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Card title!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="card bg-base-300 w-96 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Card title!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="card bg-base-300 w-96 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Card title!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
