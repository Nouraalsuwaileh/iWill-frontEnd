import React, { Profiler } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../components/Home";
import Create from "../components/Create";
import Profile from "../components/Profile";
import Frirnd from "../components/Friend.js";
// import TabBar from "./TabBar";

// import TabBar from "../components/TabBar";
// import ProfileNavigator from "./ProfileNavigator";

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Create" component={Create} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Friend" component={Friend} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
