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

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

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

  // const [selectedLanguage, setSelectedLanguage] = useState();

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={["#5B5E5A", "#5B5E5A"]}
        start={[0.1, 0.1]}
        style={styles.linearGradient}
      >
        {/* <View style={styles.header}>
          <Text style={styles.text_header}>Add Habit !!</Text>
        </View> */}
        <View style={styles.footer}>
          <Text style={[styles.text_footer, { marginTop: 20 }]}>
            Habit Name
          </Text>
          <View style={styles.action}>
            <MaterialIcons
              name="drive-file-rename-outline"
              size={24}
              color="black"
            />
            <TextInput
              style={styles.textInput}
              // placeholder="Habit Name"
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
              // placeholder="Category"
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
              // placeholder="Details"
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
        <View style={styles.textSign}>
          <Button
            title="Save New Habit"
            // style={styles.textSign}
            color="#E88873"
            onPress={() => {
              habitStore.createHabit(habit);
              navigation.goBack();
            }}
          />
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
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
    height: 400,
  },
  text_footer: {
    color: "#ffffff",
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
    color: "#ffffff",
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  textSign: {
    // fontSize: 18,
    // fontWeight: "bold",
    marginBottom: 70,
    color: "#ffffff",
  },
});

export default NewHabitForm;
