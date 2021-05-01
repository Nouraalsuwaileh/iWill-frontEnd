import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import Profile from "../ProfileScreen/Profile";
import EditProfile from "../ProfileScreen/EditProfile";
import SignUp from "../components/SignUp";
import SignIn from "../components/SignIn";
import TabNavigator from "./TabNavigator";
import HabitList from "../components/HabitList";
import HabitDetails from "../components/HabitDetails";
import NewHabitForm from "../components/NewHabitForm";
import NewFeedbackForm from "../components/NewFeedbackForm";
import Home from "../components/Home";
import authStore from "../stores/authStore";
import { observer } from "mobx-react";

const RootStack = createStackNavigator();

const RootStackProfile = () => (
  <RootStack.Navigator
    initialRouteName={authStore.user ? "HabitList" : "SignIn"}
  >
    {/* {!authStore.user ? ( */}
    <>
      <RootStack.Screen
        options={{ headerShown: false }}
        name="SignIn"
        component={SignIn}
      />
      <RootStack.Screen
        options={{ headerShown: false }}
        name="SignUp"
        component={SignUp}
      />
    </>
    {/* ) : null} */}

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
      name="Home"
      component={Home}
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
    <RootStack.Screen
      options={{ headerShown: true }}
      name="NewHabitForm"
      component={NewHabitForm}
    />
    <RootStack.Screen
      options={{ headerShown: true }}
      name="NewFeedbackForm"
      component={NewFeedbackForm}
    />
  </RootStack.Navigator>
);

export default observer(RootStackProfile);
