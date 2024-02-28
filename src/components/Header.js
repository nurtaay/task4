import React, { useContext } from "react";
import Form from "./Form";
import styled from "styled-components";
import { themes } from "./theme";
import { ThemeContext } from "../context/Theme";

const Header = () => {
  const [theme, darkTheme, setDarkTheme] = useContext(ThemeContext);

  const handleChange = () => setDarkTheme(!darkTheme);

  return (
    <AppHeader theme={theme}>
      <AppLogo theme={theme}>
        <span>DarkMode</span>
        <input type="checkbox" value={darkTheme} onChange={handleChange} />
      </AppLogo>
      <Form theme={theme} />
    </AppHeader>
  );
};

const AppHeader = styled.header`
  background: ${({ theme }) => themes[theme].nav};
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;

const AppLogo = styled.div`
  font-weight: 700;
  letter-spacing: 0.5px;
  font-size: 20px;
  display: flex;
  align-items: center;
  flex: 1;
  color: ${({ theme }) => themes[theme].textColor};
`;

export default Header;
