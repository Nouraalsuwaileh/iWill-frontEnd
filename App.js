import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "styled-components";
import HabitDetails from "./components/HabitDetails";
import HabitList from "./components/HabitList";
import Home from "./components/Home";
import habitStore from "./stores/habitStore";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from "./navigation/TabNavigator";
import RootStackProfile from "./ProfileScreen/RootStackProfile";

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

    // <NavigationContainer>
    //   <RootStackProfile />
    //   {/* <TabNavigator /> */}
    // </NavigationContainer>

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
        </Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
