import React, { useContext } from "react";

import Header from "./Header";
import TasksList from "./TasksList";

import TasksProvider from "./../context/Tasks";
import ThemeProvider, { ThemeContext } from "./../context/Theme";

import { themes } from "./theme";

import styled from "styled-components";

const App = () => {
  return (
    <ThemeProvider>
      <AppWrapper>
        <TasksProvider>
          <Header />
          <TasksList />
        </TasksProvider>
      </AppWrapper>
    </ThemeProvider>
  );
};

const AppWrapper = ({ children }) => {
  const [theme] = useContext(ThemeContext);

  return <Wrapper theme={theme}>{children}</Wrapper>;
};

const Wrapper = styled.main`
  background-color: ${({ theme }) => themes[theme].background};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
`;

export default App;
