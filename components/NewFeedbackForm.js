import React, { useState } from "react";
import { useReducer } from "react";
import { SafeAreaView, StyleSheet, TextInput, Button } from "react-native";
import habitStore from "../stores/habitStore";
// import { CreateButtonStyled } from "../styles";
import { LinearGradient } from "expo-linear-gradient";

const NewFeedbackForm = ({ route, navigation }) => {
  const [feedback, setFeedback] = useState({
    content: "",
    // userId: 0,
  });

  const { habitId } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        multiline
        numberOfLines={4}
        onChangeText={(value) =>
          setFeedback({ ...feedback, comment: value, habitId: habitId })
        }
        value={feedback.comment}
      />
      <LinearGradient
        colors={["#ffffff", "#cfd9df"]}
        start={[0.1, 0.1]}
        style={styles.linearGradient}
      >
        <Button
          title="Save New Feedback"
          color="#a1c4fd"
          onPress={() => {
            habitStore.createFeedback(feedback);
            navigation.goBack();
          }}
        />
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
    height: 550,
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

export default NewFeedbackForm;
