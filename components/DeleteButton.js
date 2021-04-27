import { Text, Button, StyleSheet, View } from "react-native";
import React from "react";
import habitStore from "../stores/habitStore";
import { AntDesign } from "@expo/vector-icons";

const DeleteButton = ({ habit, navigation }) => {
  return (
    <View style={styles.button}>
      {/* <Button
        style={styles.textInput}
        title="Delete "
        color="#a1c4fd"
        size={50}
      >
        Delete!
      </Button> */}
    </View>
  );
};
export default DeleteButton;
const styles = StyleSheet.create({
  container: {
    fontSize: 50,

    // flex: 1,
    // backgroundColor: "#fff",
  },
  textInput: {
    fontSize: 50,
    color: "black",
  },
});
