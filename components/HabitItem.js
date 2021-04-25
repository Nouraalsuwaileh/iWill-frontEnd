import { ListItem } from "native-base";
import React from "react";
import { StyleSheet, View } from "react-native";
import { HabitItemStyled, HabitImage } from "../styles";
import habitStore from "../stores/habitStore";
import HabitDetails from "./HabitDetails";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const HabitItem = ({ habit, navigation }) => {
  return (
    <ListItem
      onPress={() => navigation.navigate("HabitDetails", { habit: habit })}
    >
      <MaterialCommunityIcons name="account-details" size={24} color="black" />

      {/* {habit.image ? (
        <HabitImage source={{ uri: habit.image }} />
      ) : (
        <HabitImage />
      )} */}

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
  titleBar: {
    // flexDirection: "row",
    // justifyContent: "space-between",
    // marginTop: 24,
    // marginHorizontal: 16,
    // marginRight: 150,
  },
});
