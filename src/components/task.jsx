import React from "react";

export default function Task({ tasks }) {
  return (
    <>
      {tasks.map((task, index) => (
        <div className="flex flex-col items-center bg-slate-700 border-yellow-50 border-2 mt-6 p-2 max-w-lg m-auto rounded-xl">
          <p className="text-white " key={index}>{task}</p>
        </div>
      ))}
    </>
  );
}
