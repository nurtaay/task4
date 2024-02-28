const TasksReducer = (state, action) => {
  switch (action.type) {
    case "CREATE_TASK":
      return [
        ...state,
        {
          name: action.name,
          completed: false,
        },
      ];
  }
};

export default TasksReducer;
