import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function EditProfile({ navigation }) {
  <View style={styles.titleBar}>
    <Ionicons name="ios-arrow-back" size={24} color="#52575D"></Ionicons>
    <Ionicons name="md-more" size={24} color="#52575D"></Ionicons>
  </View>;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>EditProfile Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#76a6ef",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  titleBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 24,
    marginHorizontal: 16,
  },
});
