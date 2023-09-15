/* eslint-disable react/prop-types */
// Task.jsx

import "../index.css";

// eslint-disable-next-line react/prop-types
export default function Task({ tasks }) {
  return (
    <>
      {tasks.map((task, index) => (
        <div
          key={index}
          className="flex flex-col items-center bg-slate-700 border-yellow-50 border-2 mt-6 p-2 max-w-lg m-auto rounded-xl"
        >
          <p className="text-white ">{task}</p>
        </div>
      ))}
    </>
  );
}
