import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Button,
  View,
  Text,
} from "react-native";
import habitStore from "../stores/habitStore";
import Feather from "react-native-vector-icons/Feather";
import { Entypo } from "@expo/vector-icons";
import { version } from "react/cjs/react.development";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const NewHabitForm = ({ navigation }) => {
  const [habit, setHabit] = useState({
    name: "",
    category: "",
    details: "",
    image: "",
    // daily: "",
    // completed: "",
    // userId: 0,
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text_header}>Add Habit !!</Text>
      </View>
      <View style={styles.footer}>
        <Text style={[styles.text_footer, { marginTop: 20 }]}>Habit Name</Text>
        <View style={styles.action}>
          <MaterialIcons
            name="drive-file-rename-outline"
            size={24}
            color="black"
          />
          <TextInput
            style={styles.textInput}
            placeholder="Habit Name"
            onChangeText={(value) => setHabit({ ...habit, name: value })}
            value={habit.name}
            autoCorrect={false}
          />
        </View>
        <Text style={[styles.text_footer, { marginTop: 20 }]}>Category</Text>
        <View style={styles.action}>
          <AntDesign name="switcher" size={24} color="black" />
          <TextInput
            style={styles.textInput}
            placeholder="Category"
            onChangeText={(value) => setHabit({ ...habit, category: value })}
            value={habit.category}
            autoCorrect={false}
          />
        </View>
        <Text style={[styles.text_footer, { marginTop: 20 }]}>Details</Text>
        <View style={styles.action}>
          <MaterialCommunityIcons
            name="account-details-outline"
            size={24}
            color="black"
          />
          <TextInput
            style={styles.textInput}
            placeholder="Details"
            multiline
            numberOfLines={4}
            onChangeText={(value) => setHabit({ ...habit, details: value })}
            value={habit.details}
          />
        </View>
        {/* <Text style={[styles.text_footer, { marginTop: 20 }]}>URL</Text>
        <View style={styles.action}>
          <Feather name="user" size={24} color="black" />

          <TextInput
            style={styles.textInput}
            placeholder="Habit Poster URL"
            placeholderTextColor={"#808080"}
            onChangeText={(value) => setHabit({ ...habit, image: value })}
            value={habit.image}
            autoCorrect={false}
          />
        </View> */}
      </View>

      <Button
        title="Save New Habit"
        style={styles.textSign}
        // color="#8d063e"
        onPress={() => {
          habitStore.createHabit(habit);
          navigation.goBack();
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",

    // backgroundColor: "",
  },
  header: {
    // flex: 2,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
  text_footer: {
    color: "black",
    fontSize: 18,
  },
  text_header: {
    color: "black",
    fontWeight: "bold",
    fontSize: 30,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "#05375a",
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default NewHabitForm;
