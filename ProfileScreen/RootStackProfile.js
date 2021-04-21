import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import Profile from "./Profile";
import EditProfile from "./EditProfile";
import SignUp from "../components/SignUp";
import TabNavigator from "../navigation/TabNavigator";

const RootStack = createStackNavigator();

const RootStackProfile = () => (
  <RootStack.Navigator>
    <RootStack.Screen
      options={{ headerShown: false }}
      name="SignUp"
      component={SignUp}
    />
    <RootStack.Screen
      options={{ headerShown: false }}
      name="tab"
      component={TabNavigator}
    />
    <RootStack.Screen
      options={{ headerShown: false }}
      name="Profile"
      component={Profile}
    />
    <RootStack.Screen
      options={{ headerShown: false }}
      name="EditProfile"
      component={EditProfile}
    />
  </RootStack.Navigator>
);

export default RootStackProfile;
