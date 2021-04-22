import habitStore from "../stores/habitStore";
import FeedbackItem from "./FeedbackItem";
import { List, Content } from "native-base";
import { observer } from "mobx-react";
import React from "react";
import { Text, View, Button, Alert, ScrollView } from "react-native";

const FeedbackList = ({ name, navigation }) => {
  if (habitStore.loadingreviews) return <Text>Loading...</Text>;

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
          color="#8d063e"
        >
          Add Feedback!
        </Button>

        <List>{feedbackList}</List>
      </ScrollView>
    </View>
  );
};

export default observer(FeedbackList);