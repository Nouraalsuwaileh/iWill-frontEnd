import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { ThemeProvider } from "styled-components";
import HabitDetails from "./components/HabitDetails";
import HabitList from "./components/HabitList";
import Home from "./components/Home";
import habitStore from "./stores/habitStore";
import { createStackNavigator } from "@react-navigation/stack";
import NewHabitForm from "./components/NewHabitForm";

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
const { Navigator, Screen } = createStackNavigator();

export default function App() {
  return (
    <ThemeProvider theme={theme.dark}>
      <NavigationContainer>
        <Navigator>
          <Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Screen name="HabitList" component={HabitList} />
          <Screen name="HabitDetails" component={HabitDetails} />
          <Screen name="NewHabitForm" component={NewHabitForm} />
        </Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
