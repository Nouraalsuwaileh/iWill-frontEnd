import habitStore from "../stores/habitStore";
import FeedbackItem from "./FeedbackItem";
import { List, Content } from "native-base";
import { observer } from "mobx-react";
import React from "react";
import {
  Text,
  View,
  Button,
  Alert,
  ScrollView,
  StyleSheet,
} from "react-native";
import { Spinner } from "native-base";
const FeedbackList = ({ name, navigation }) => {
  // if (habitStore.loadingFeedbacks) return <Spinner />;

  const habitFeedbacks = habitStore.feedbacks.filter(
    (feedback) => feedback.habit.name === name
  );
  const feedbackList = habitFeedbacks.map((feedback) => (
    <FeedbackItem
      feedback={feedback}
      key={feedback.id}
      navigation={navigation}
    />
  ));
  const habitFound = habitStore.habits.find((m) => m.name === name);
  return (
    <View>
      <ScrollView>
        <View style={styles.button}>
          <Button
            onPress={() =>
              navigation.navigate("NewFeedbackForm", { habitId: habitFound.id })
            }
            title="Add Comment"
            color="#a1c4fd"
          >
            Add Feedback!
          </Button>
        </View>
        <List>{feedbackList}</List>
      </ScrollView>
    </View>
  );
};

export default observer(FeedbackList);
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: "#fff",
  },
  button: {
    alignItems: "center",
    marginTop: 50,
  },
});
