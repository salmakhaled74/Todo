import React, { useState } from "react";
import "../index.css";

export default function Form({ addTask }) {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(task);
    setTask("");
  };

  return (
    <>
      <form

        onSubmit={handleSubmit}
        className="flex items-center border-yellow-50 border-2 mt-6 p-2 max-w-lg m-auto rounded-full "
      >
        <button
          type="submit"
          disabled={!task}
          className="bg-cyan-500 w-8 h-8 rounded-xl"
        >
          +
        </button>
        <input
          onChange={(e) => setTask(e.target.value)}
          value={task}
          className="px-8 dark:bg-slate-800 text-white outline-none focus:ring-0"
          type="text"
          placeholder="Your next task..."
        />
      </form>
    </>
  );
}
