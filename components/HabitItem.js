import { ListItem } from "native-base";
import React, { useState } from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { Checkbox } from "react-native-paper";
import { HabitItemStyled, HabitImage } from "../styles";
import habitStore from "../stores/habitStore";
import HabitDetails from "./HabitDetails";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const HabitItem = ({ habit, navigation }) => {
  // const [isSelected, setSelection] = useState(habit.completed);
  const [checked, setChecked] = useState(habit.completed);
  return (
    <ListItem
      onPress={() => navigation.navigate("HabitDetails", { habit: habit })}
    >
      {/* {habit.image ? (
        <HabitImage source={{ uri: habit.image }} />
      ) : (
        <HabitImage />
      )} */}

      {/* <CheckBox
        value={isSelected}
        onValueChange={(value) => {
          setSelection(value);
          habitStore.toggleCompleted(habit.id, value);
          console.log(habit.completed);
        }}
        style={styles.checkbox}
      /> */}

      <Checkbox
        status={checked ? "checked" : "unchecked"}
        onPress={() => {
          setChecked(!checked);
          habitStore.toggleCompleted(habit.id, !checked);
        }}
      />

      <MaterialCommunityIcons name="account-details" size={24} color="black" />
      <HabitItemStyled>
        {habit.name}
        {/* <View style={styles.titleBar}>
          <AntDesign name="arrowright" size={24} color="black" />
        </View> */}
      </HabitItemStyled>
    </ListItem>
  );
};
export default HabitItem;

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
  titleBar: {
    // flexDirection: "row",
    // justifyContent: "space-between",
    // marginTop: 24,
    // marginHorizontal: 16,
    // marginRight: 150,
  },
});
