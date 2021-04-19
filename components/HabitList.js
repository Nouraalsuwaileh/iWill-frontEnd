import React from "react";
import habitStore from "../stores/habitStore";
import HabitItem from "./HabitItem";
import { observer } from "mobx-react";
import { View } from "react-native";
import { List, Spinner } from "native-base";

const HabitList = ({ navigation }) => {
  if (habitStore.loading) return <Spinner />;
  const habitList = habitStore.habits.map((habit) => (
    <HabitItem habit={habit} key={habit.id} navigation={navigation} />
  ));
  return (
    <View>
      <List>{habitList}</List>
    </View>
  );
};

export default observer(HabitList);
