import React, { useContext } from "react";

import { TasksContext } from "../context/Tasks";
import { ThemeContext } from "../context/Theme";

import saveTasks from "../hooks/saveTasks";
import Checkbox from "./Checkbox";
import { colors, themes } from "./theme";
import styled from "styled-components";

function TaskItem({ task, id }) {
  const [tasks, setTasks] = useContext(TasksContext);

  const [theme] = useContext(ThemeContext);

  const deleteTask = async (id) => {
    let updated = tasks.filter((task, index) => index !== id);
    setTasks(updated);
    saveTasks(updated);
  };

  const switchTask = (id) => {
    const updated = tasks.map((task, index) => {
      if (index === id)
        return {
          ...task,
          completed: !tasks[id].completed,
        };
      else return task;
    });
    setTasks(updated);
    saveTasks(updated);
  };

  return (
    <Item theme={theme} completed={task.completed}>
      <CheckboxContainer>
        <label>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => switchTask(id)}
          />
          <Checkbox />
          <span>{task.name}</span>
        </label>
      </CheckboxContainer>
      {task.completed && <button onClick={() => deleteTask(id)}>Delete</button>}
    </Item>
  );
}

const Item = styled.li`
  background: ${({ theme }) => themes[theme].item};
  border-radius: 7px;
  box-shadow: 0 2px 10px -2px rgba(33, 33, 33, 0.1);
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 1.2em;
  color: ${({ theme }) => themes[theme].textColor};
  ${(props) =>
    props.completed &&
    `
    label { 
    text-decoration: line-through;
    }  
  `}
  button {
    background: transparent;
    color: #f44336;
  }
  &:hover {
    box-shadow: 0 2px 10px -2px rgba(0, 0, 0, 0.16);
  }
`;

const CheckboxContainer = styled.div`
  flex: 1;
  margin-right: 10px;
  label {
    display: flex;
    align-items: center;
    margin-right: 10px;
    cursor: pointer;
    svg {
      margin-right: 10px;
      width: 20px;
      height: 20px;
      .box {
        fill: rgba(0, 0, 0, 0.3);
      }
      .check {
        opacity: 0;
        stroke: ${colors.blue};
      }
    }
    input {
      display: none;
      &:checked {
        ~ svg {
          .box {
            fill: ${colors.blue};
          }
          .check {
            opacity: 1;
          }
        }
        ~ span {
          opacity: 0.5;
          text-decoration: line-through;
        }
      }
    }
  }
`;

export default TaskItem;
