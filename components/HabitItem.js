import { ListItem } from "native-base";
import React from "react";
import { Image, Text, View } from "react-native";
import { HabitItemStyled, HabitImage } from "../styles";
import habitStore from "../stores/habitStore";

const HabitItem = ({ habit }) => {
  return (
    <ListItem>
      {habit.image ? (
        <HabitImage source={{ uri: habit.image }} />
      ) : (
        <HabitImage />
      )}

      <HabitItemStyled>{habit.name}</HabitItemStyled>
    </ListItem>
  );
};

export default HabitItem;
