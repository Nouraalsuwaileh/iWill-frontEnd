import React, { useState } from "react";
import { useReducer } from "react";
import { SafeAreaView, StyleSheet, TextInput, Button } from "react-native";
import habitStore from "../stores/habitStore";
// import { CreateButtonStyled } from "../styles";

const NewFeedbackForm = ({ route, navigation }) => {
  const [feedback, setFeedback] = useState({
    content: "",
    // userId: 0,
  });

  const { habitId } = route.params;
  return (
    <SafeAreaView>
      <TextInput
        multiline
        numberOfLines={4}
        onChangeText={(value) =>
          setFeedback({ ...feedback, comment: value, habitId: habitId })
        }
        value={feedback.comment}
      />

      <Button
        title="Save New Feedback"
        color="#8d063e"
        onPress={() => {
          habitStore.createFeedback(feedback);
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

export default NewFeedbackForm;
