import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { ProgressBar, Colors } from "react-native-paper";
import habitStore from "../stores/habitStore";
import { observer } from "mobx-react";

const progress = () => {
  let numberOfTasks = habitStore.habits.length;
  let numberOfCompletedTasks = habitStore.habits.filter(
    (habit) => habit.completed == true
  ).length;

  return (
    <View style={styles.container}>
      <View style={styles.footer}>
        <Text style={styles.text}> Progress </Text>
        <ProgressBar
          // style={{ width: 200 }}
          progress={numberOfCompletedTasks / numberOfTasks}
          color={Colors.blue900}
        />
      </View>
    </View>
  );
};

export default observer(progress);

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    // paddingTop: Constants.statusBarHeight,
    // backgroundColor: "#ecf0f1",
    // padding: 20,
  },
  progressBar: {
    height: 20,
    width: "100%",
    backgroundColor: "white",
    borderColor: "#000",
    borderWidth: 2,
    borderRadius: 5,
  },
  text: {
    textAlign: "center",
    fontSize: 20,
    marginBottom: 35,
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
    // backgroundColor: "transparent",
    // borderTopLeftRadius: 100,
    // borderTopRightRadius: 50,
    // paddingHorizontal: 20,
    // paddingVertical: 30,
    width: 350,
    marginTop: 100,
    // height: 50,
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
});
