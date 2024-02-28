import React, { useState, useEffect, createContext } from "react";

export const TasksContext = createContext();

const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem("react-tasks"));
    if (storage !== null && storage !== undefined) setTasks(storage);
  }, []);

  return (
    <TasksContext.Provider value={[tasks, setTasks]}>
      {children}
    </TasksContext.Provider>
  );
};

export default TasksProvider;
