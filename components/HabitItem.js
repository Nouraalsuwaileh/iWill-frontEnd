import { ListItem } from "native-base";
import React, { useState } from "react";
import { Text, StyleSheet, View, Image, CheckBox } from "react-native";
import { Checkbox } from "react-native-paper";
import { HabitItemStyled, HabitImage } from "../styles";
import habitStore from "../stores/habitStore";
import HabitDetails from "./HabitDetails";
import { AntDesign } from "@expo/vector-icons";
import { observer } from "mobx-react";

// import { MaterialCommunityIcons } from "@expo/vector-icons";
import { color } from "react-native-reanimated";
const HabitItem = ({ habit, navigation }) => {
  // const [isSelected, setSelection] = useState(habit.completed);
  const [checked, setChecked] = useState(habit.completed);
  console.log(habit);
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
      <View style={styles.icon}>
        <Checkbox
          // status={checked ? "checked" : "unchecked"}
          status={habit.completed ? "checked" : "unchecked"}
          onPress={() => {
            habitStore.toggleCompleted(habit.id, !habit.completed);
            // setChecked(!checked);
            habit.completed = !habit.completed;

            console.log(habit.completed);
          }}
          style={styles.checkbox}
          color={"#E0E0E0"}
        />
      </View>
      {/* <MaterialCommunityIcons name="account-details" size={24} color="black" /> */}

      <HabitItemStyled>
        {habit.name}

        <AntDesign
          name="minuscircleo"
          size={18}
          color="#ffffff"
          style={styles.icon2}
          onPress={() => habitStore.deleteHabit(habit.id, navigation)}
        />
      </HabitItemStyled>
    </ListItem>
  );
};
export default observer(HabitItem);

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
  icon: {
    // color: "rgba(31,178,204,1)",
    fontSize: 30,
    alignSelf: "center",
    marginLeft: 50,
    color: "#E49A88",
    // marginTop: 150,
    // alignItems: "center",
  },
  icon2: {
    // color: "rgba(31,178,204,1)",
    // fontSize: 30,
    // alignSelf: "stretch",
    // alignItems: "center",
    marginLeft: 70,
    // alignItems: "flex-end",
    // marginLeft: 100,
    // marginLeft: 40,
    // marginTop: 150,
    // alignItems: "center",
  },
});
