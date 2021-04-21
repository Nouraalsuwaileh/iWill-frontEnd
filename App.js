import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SignUp from "./components/SignUp";

//Nav imports
// import { NavigationContainer } from "@react-navigation/native";
// import TabNavigator from "./navigation/TabNavigator";

export default function App() {
  return (
    
    //nav 
    // <NavigationContainer>
    //  <TabNavigator />
    // </NavigationContainer>
    
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      //<SignUp />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    justifyContent: "center",
  },
});