import React from "react";

export default function Resources({ setUrl, setIsModalOpen }) {
  return (
    <>
      <div className="flex flex-col items-center gap-6 p-7 md:flex-row rounded-2xl">
        <div className="card bg-base-300 w-96 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Posts</h2>
            <p>100+ posts available</p>
            <div className="card-actions justify-end">
              <button
                className="btn btn-primary"
                onClick={() => {
                  setUrl("api-emulator.vercel.app/api/route/posts");
                  setIsModalOpen(true);
                }}
              >
                Check Out
              </button>{" "}
            </div>
          </div>
        </div>
        <div className="card bg-base-300 w-96 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Comments</h2>
            <p>500+ comments available</p>
            <div className="card-actions justify-end">
              <button
                className="btn btn-primary"
                onClick={() => {
                  setUrl("api-emulator.vercel.app/api/route/comments");
                  setIsModalOpen(true);
                }}
              >
                Check Out
              </button>
            </div>
          </div>
        </div>
        <div className="card bg-base-300 w-96 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Album</h2>
            <p>50+ albums available</p>
            <div className="card-actions justify-end">
              <button
                className="btn btn-primary"
                onClick={() => {
                  setUrl("api-emulator.vercel.app/api/route/albums");
                  setIsModalOpen(true);
                }}
              >
                Check Out
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-6 p-7 md:flex-row rounded-2xl">
        <div className="card bg-base-300 w-96 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Photos</h2>
            <p>500+ photos available</p>
            <div className="card-actions justify-end">
              <button
                className="btn btn-primary"
                onClick={() => {
                  setUrl("api-emulator.vercel.app/api/route/photos");
                  setIsModalOpen(true);
                }}
              >
                Check Out
              </button>
            </div>
          </div>
        </div>
        <div className="card bg-base-300 w-96 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Todos</h2>
            <p>200+ todos available</p>
            <div className="card-actions justify-end">
              <button
                className="btn btn-primary"
                onClick={() => {
                  setUrl("api-emulator.vercel.app/api/route/todos");
                  setIsModalOpen(true);
                }}
              >
                Check Out
              </button>
            </div>
          </div>
        </div>
        <div className="card bg-base-300 w-96 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Users</h2>
            <p>10+ users available</p>
            <div className="card-actions justify-end">
              <button
                className="btn btn-primary"
                onClick={() => {
                  setUrl("api-emulator.vercel.app/api/route/users");
                  setIsModalOpen(true);
                }}
              >
                Check Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
