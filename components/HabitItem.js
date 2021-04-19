import { ListItem } from "native-base";
import React from "react";
import { Image, Text, View } from "react-native";
import { HabitItemStyled, HabitImage } from "../styles";
import habitStore from "../stores/habitStore";
import HabitDetails from "./HabitDetails";

const HabitItem = ({ habit, navigation }) => {
  return (
    <ListItem
      onPress={() => navigation.navigate("HabitDetails", { habit: habit })}
    >
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
