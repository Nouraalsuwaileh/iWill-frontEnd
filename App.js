import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
// import SignUp from "./components/SignUp";

//Nav imports
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./navigation/TabNavigator";
import RootStackProfile from "./ProfileScreen/RootStackProfile";

export default function App() {
  return (
    //nav
    <NavigationContainer>
      <RootStackProfile />
      {/* <TabNavigator /> */}
    </NavigationContainer>

    // <View >

    //   {/* <SignUp /> */}

    // </View>
  );
}
{
  /* <NavigationContainer>
        <RootStackScreen />
      
      </NavigationContainer> */
}
