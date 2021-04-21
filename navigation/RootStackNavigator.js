import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import Profile from "../ProfileScreen/Profile";
import EditProfile from "../ProfileScreen/EditProfile";
import SignUp from "../components/SignUp";
import TabNavigator from "./TabNavigator";
import HabitList from "../components/HabitList";
import HabitDetails from "../components/HabitDetails";

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
    <RootStack.Screen
      options={{ headerShown: true }}
      name="HabitList"
      component={HabitList}
    />
    <RootStack.Screen
      options={{ headerShown: true }}
      name="HabitDetails"
      component={HabitDetails}
    />
  </RootStack.Navigator>
);

export default RootStackProfile;
