import React, { useState } from "react";
import { SafeAreaView, StyleSheet, TextInput, Button } from "react-native";
import habitStore from "../stores/habitStore";

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
    <SafeAreaView>
      <TextInput
        style={styles.input}
        placeholder="Habit Name"
        placeholderTextColor={"#808080"}
        onChangeText={(value) => setHabit({ ...habit, name: value })}
        value={habit.name}
        autoCorrect={false}
      />

      <TextInput
        style={styles.input}
        placeholder="category"
        placeholderTextColor={"#808080"}
        onChangeText={(value) => setHabit({ ...habit, category: value })}
        value={habit.category}
        autoCorrect={false}
      />

      <TextInput
        multiline
        numberOfLines={4}
        onChangeText={(value) => setHabit({ ...habit, details: value })}
        value={habit.details}
      />

      <TextInput
        style={styles.input}
        placeholder="Habit Poster URL"
        placeholderTextColor={"#808080"}
        onChangeText={(value) => setHabit({ ...habit, image: value })}
        value={habit.image}
        autoCorrect={false}
      />

      <Button
        title="Save New Habit"
        color="#8d063e"
        onPress={() => {
          habitStore.createHabit(habit);
          navigation.goBack();
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
});

export default NewHabitForm;
