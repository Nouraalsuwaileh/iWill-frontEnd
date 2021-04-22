import React from "react";
import habitStore from "../stores/habitStore";
import { Text, Button } from "react-native";
import FeedbackList from "./FeedbackList";
import { observer } from "mobx-react";
import {
  HabitDetailTitle,
  HabitDetailImage,
  HabitDetailWrapper,
} from "../styles";
import { Spinner } from "native-base";

const HabitDetails = ({ route, navigation }) => {
  const { habit } = route.params;
  if (habitStore.loading) return <Spinner />;
  return (
    <HabitDetailWrapper>
      <Button
        onPress={() => habitStore.deleteHabit(habit.id, navigation)}
        title="Delete Habit"
        color="#8d063e"
      >
        Delete Habit!
      </Button>
      <HabitDetailImage source={{ uri: habit.image }} />
      <HabitDetailTitle>{habit.name}</HabitDetailTitle>
      <HabitDetailTitle>{habit.category}</HabitDetailTitle>
      <HabitDetailTitle>{habit.details}</HabitDetailTitle>
      {/* <HabitDetailTitle>{habit.daily}</HabitDetailTitle> */}
      {/* <HabitDetailTitle>{habit.completed}</HabitDetailTitle> */}
      <FeedbackList name={habit.name} navigation={navigation} />
    </HabitDetailWrapper>
  );
};

export default observer(HabitDetails);
