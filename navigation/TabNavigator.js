import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../components/Home";
import Create from "../components/Create";
import Profile from "../components/Profile";
// import Frirnd from "../components/Friend.js";
import TabBar from "./TabBar";
import Test from "../components/Test";

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
      <Tab.Screen
        name="Home"
        component={Home}
        initialParams={{ icon: "home" }}
      />
      <Tab.Screen
        name="Create"
        component={Create}
        initialParams={{ icon: "plus" }}
      />
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
      {/* <Tab.Screen name="Friend" component={Friend} /> */}
    </Tab.Navigator>
  );
};

export default TabNavigator;

//icon source
//https://icons.expo.fyi
