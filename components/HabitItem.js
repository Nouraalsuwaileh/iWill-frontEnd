import { ListItem } from "native-base";
import { HabitItemStyled, HabitImage } from "../styles";
import habitStore from "../stores/habitStore";
import HabitDetails from "./HabitDetails";
import React, { useState } from "react";
import { CheckBox, Text, StyleSheet, View, Image } from "react-native";

const HabitItem = ({ habit, navigation }) => {
  const [isSelected, setSelection] = useState(false);
  return (
    <ListItem
      onPress={() => navigation.navigate("HabitDetails", { habit: habit })}
    >
      {habit.image ? (
        <HabitImage source={{ uri: habit.image }} />
      ) : (
        <HabitImage />
      )}

      <CheckBox
        value={isSelected}
        onValueChange={setSelection}
        style={styles.checkbox}
      />

      <HabitItemStyled>{habit.name}</HabitItemStyled>
    </ListItem>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
  },
});

export default HabitItem;
