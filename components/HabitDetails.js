import React from "react";
import habitStore from "../stores/habitStore";
import { Text, Button, StyleSheet } from "react-native";
import FeedbackList from "./FeedbackList";
import { observer } from "mobx-react";
import {
  HabitDetailTitle,
  HabitDetailImage,
  HabitDetailWrapper,
} from "../styles";
import { Spinner } from "native-base";
import { LinearGradient } from "expo-linear-gradient";
import DeleteButton from "./DeleteButton";

const HabitDetails = ({ route, navigation }) => {
  const { habit } = route.params;
  if (habitStore.loading) return <Spinner />;

  return (
    <LinearGradient
      colors={["#ffffff", "#cfd9df"]}
      start={[0.1, 0.1]}
      style={styles.linearGradient}
    >
      <HabitDetailWrapper>
        {/* <HabitDetailImage source={{ uri: habit.image }} /> */}
        {/* <DeleteButton habit={habit} navigation={navigation} /> */}
        <HabitDetailTitle>{habit.name}</HabitDetailTitle>
        <HabitDetailTitle>{habit.category}</HabitDetailTitle>
        <HabitDetailTitle>{habit.details}</HabitDetailTitle>
        {/* <HabitDetailTitle>{habit.daily}</HabitDetailTitle> */}
        {/* <HabitDetailTitle>{habit.completed}</HabitDetailTitle> */}

        <FeedbackList name={habit.name} navigation={navigation} />
      </HabitDetailWrapper>
    </LinearGradient>
  );
};

export default observer(HabitDetails);

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: "#fff",
  },
  titleBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 100,
  },
  habitlist: {
    height: 30,
    fontSize: 16,
    marginTop: 15,
  },
  icon: {
    // color: "rgba(31,178,204,1)",
    fontSize: 30,
    alignSelf: "center",
    marginTop: 150,
    // alignItems: "center",
  },
  text: {
    width: 149,
    height: 21,
  },
  expanded: {
    color: "#121212",
    fontSize: 20,
    marginStart: 40,
  },
  container: {
    // flex: 1,
    // backgroundColor: "#BFDCF2",
  },
  header: {
    // flex: 1,
    marginTop: 50,
    // justifyContent: "flex-end",
    // paddingHorizontal: 20,
    // paddingBottom: 20,
  },
  linearGradient: {
    width: "100%",
    height: "100%",
    opacity: 0.95,
    justifyContent: "center",
    alignItems: "center",
  },

  footer: {
    // flex: 15,
    backgroundColor: "transparent",
    borderTopLeftRadius: 100,
    borderTopRightRadius: 50,
    paddingHorizontal: 20,
    paddingVertical: 30,
    width: 350,
    height: 550,
  },
  text_header: {
    color: "#0D2D44",
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
  },
  text_footer: {
    color: "#0b090a",
    fontSize: 18,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#FF0000",
    paddingBottom: 5,
  },
  textInput: {
    // flex: 1,
    // marginTop: Platform.OS === "ios" ? 0 : -12,
    width: 200,
    paddingLeft: 10,
    // color: "#d6d6d6",
  },
  errorMsg: {
    color: "#d6d6d6",
    fontSize: 14,
  },
  button: {
    alignItems: "center",
    marginTop: 30,
  },
  signIn: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
