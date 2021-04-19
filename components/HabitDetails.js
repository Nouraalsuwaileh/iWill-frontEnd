import React from "react";
import habitStore from "../stores/habitStore";
import { observer } from "mobx-react";
import {
  HabitDetailTitle,
  HabitDetailImage,
  HabitDetailWrapper,
} from "../styles";
import { Spinner } from "native-base";

const HabitDetail = () => {
  const habit = habitStore.habits[0];
  if (habitStore.loading) return <Spinner />;
  return (
    <HabitDetailWrapper>
      <HabitDetailImage source={{ uri: habit.image }} />
      <HabitDetailTitle>{habit.name}</HabitDetailTitle>
    </HabitDetailWrapper>
  );
};

export default observer(HabitDetail);
