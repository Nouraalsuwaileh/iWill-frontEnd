import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import progrees from "../components/Create";
import Profile from "../ProfileScreen/Profile";
import TabBar from "./TabBar";
import Progress from "../components/Progress";
import HabitList from "../components/HabitList";
// import Home from "../components/Home";

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
        name="Habit"
        component={HabitList}
        initialParams={{ icon: "search1" }}
      />

      {/* <Tab.Screen
        name="uWill"
        component={HabitList}
        initialParams={{ icon: "search1" }}
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
      <Tab.Screen
        name="Progress"
        component={Progress}
        initialParams={{ icon: "plus" }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

//icon source
//https://icons.expo.fyi
