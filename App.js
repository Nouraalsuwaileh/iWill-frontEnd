import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "styled-components";
import { createStackNavigator } from "@react-navigation/stack";
import RootStackNavigator from "./navigation/RootStackNavigator";

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
const Stack = createStackNavigator();
console.log("App -> Stack", Stack);

export default function App() {
  return (
    <ThemeProvider theme={theme.dark}>
      <NavigationContainer>
        <RootStackNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
}
