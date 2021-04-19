import React from "react";
import habitStore from "../stores/habitStore";
import { observer } from "mobx-react";
import {
  HabitDetailTitle,
  HabitDetailImage,
  HabitDetailWrapper,
} from "../styles";
import { Spinner } from "native-base";

const HabitDetails = ({ route }) => {
  const { habit } = route.params;
  // const habit = habitStore.habits[0];
  if (habitStore.loading) return <Spinner />;
  return (
    <HabitDetailWrapper>
      <HabitDetailImage source={{ uri: habit.image }} />
      <HabitDetailTitle>{habit.name}</HabitDetailTitle>
      <HabitDetailTitle>{habit.category}</HabitDetailTitle>
      <HabitDetailTitle>{habit.details}</HabitDetailTitle>
      {/* <HabitDetailTitle>{habit.daily}</HabitDetailTitle> */}
      {/* <HabitDetailTitle>{habit.completed}</HabitDetailTitle> */}
    </HabitDetailWrapper>
  );
};

export default observer(HabitDetails);
