import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../components/Home";
// import progrees from "../components/Create";
import Profile from "../ProfileScreen/Profile";
import TabBar from "./TabBar";
import Progrees from "../components/Progrees";
import EditProfile from "../ProfileScreen/EditProfile";
import SignUp from "../components/SignUp";

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
        name="Home"
        component={Home}
        initialParams={{ icon: "home" }}
      />
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
        name="Progrees"
        component={Progrees}
        initialParams={{ icon: "plus" }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

//icon source
//https://icons.expo.fyi
