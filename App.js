import React from "react";
import { ThemeProvider } from "styled-components";
import HabitDetails from "./components/HabitDetails";
import HabitList from "./components/HabitList";
import Home from "./components/Home";

const theme = {
  light: {
    mainColor: "darkred", // main font color
    backgroundColor: "white", // main background color
    otherColor: "grey",
    buttonTitle: "Dark Mode",
    red: "#ff3232",
  },

  dark: {
    mainColor: "#fefafb", // main font color
    backgroundColor: "#242424", // main background color
    otherColor: "grey",
    buttonTitle: "Light Mode",
    red: "#ff3232",
  },
};

export default function App() {
  return (
    <ThemeProvider theme={theme.dark}>
      {/* <Home /> */}
      <HabitList />
      {/* <HabitDetails /> */}
    </ThemeProvider>
  );
}
