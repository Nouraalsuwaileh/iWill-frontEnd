import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import progrees from "../components/Create";
import Profile from "../ProfileScreen/Profile";
import TabBar from "./TabBar";
import HabitList from "../components/HabitList";
// import Home from "../components/Home";
import { Feather } from "@expo/vector-icons";
const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
      {/* <Tab.Screen
        name="SignUp"
        component={SignUp}
        initialParams={{ icon: "SignUp" }}
      /> */}
      <Tab.Screen
        name="My Habits"
        component={HabitList}
        initialParams={{ icon: "bars" }}
      />

      {/* <Tab.Screen
        name="uWill"
        component={HabitList}
        initialParams={{ icon: "team" }}
      /> */}
      {/* <Tab.Screen
        name="Progrees"
        component={Progrees}
        initialParams={{ icon: "plus" }}
      /> */}
      <Tab.Screen
        name="Profile"
        component={Profile}
        initialParams={{ icon: "user" }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

//icon source
//https://icons.expo.fyi
