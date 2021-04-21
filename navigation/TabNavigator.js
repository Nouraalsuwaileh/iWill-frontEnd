import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../components/Home";
import Create from "../components/Create";
import Profile from "../ProfileScreen/Profile";
import TabBar from "./TabBar";
import Test from "../components/Test";
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
        name="EditProfile"
        component={EditProfile}
        initialParams={{ icon: "plus" }}
      /> */}
      <Tab.Screen
        name="Profile"
        component={Profile}
        initialParams={{ icon: "user" }}
      />
      <Tab.Screen
        name="Test"
        component={Test}
        initialParams={{ icon: "user" }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

//icon source
//https://icons.expo.fyi
