import habitStore from "../stores/habitStore";
import FeedbackItem from "./FeedbackItem";
import { List, Content } from "native-base";
import { observer } from "mobx-react";
import React from "react";
import { Text, View, Button, Alert, ScrollView } from "react-native";
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
        <Button
          onPress={() =>
            navigation.navigate("NewFeedbackForm", { habitId: habitFound.id })
          }
          title="Add Feedback"
          color="#a1c4fd"
        >
          Add Feedback!
        </Button>

        <List>{feedbackList}</List>
      </ScrollView>
    </View>
  );
};

export default observer(FeedbackList);
