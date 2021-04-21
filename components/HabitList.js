import React from "react";
import habitStore from "../stores/habitStore";
import HabitItem from "./HabitItem";
import { observer } from "mobx-react";
import { View, Button, ScrollView } from "react-native";
import { List, Spinner } from "native-base";

const HabitList = ({ navigation }) => {
  if (habitStore.loading) return <Spinner />;
  const habitList = habitStore.habits.map((habit) => (
    <HabitItem habit={habit} key={habit.id} navigation={navigation} />
  ));
  return (
    <View>
      <ScrollView>
        <Button
          onPress={() => navigation.navigate("NewHabitForm")}
          title="Create Habit"
          color="#8d063e"
        >
          Add Habit!
        </Button>
        <List>{habitList}</List>
      </ScrollView>
    </View>
  );
};

export default observer(HabitList);
