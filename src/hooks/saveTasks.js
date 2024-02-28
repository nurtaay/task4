const saveTasks = tasks => {
  localStorage.setItem("react-tasks", JSON.stringify(tasks));
};

export default saveTasks;
