import { ListItem } from "native-base";
import React from "react";
import { Text, View, Image, Button } from "react-native";
import habitStore from "../stores/habitStore";

// Styling
// import { ImageBackground } from "react-native";
import { HabitItemStyled } from "../styles";

const FeedbackItem = ({ feedback, navigation }) => {
  return (
    <>
      <ListItem>
        <Button
          onPress={() => habitStore.deleteFeedback(feedback.id, navigation)}
          title="Delete Feedback"
          color="#8d063e"
        >
          Delete Feedback!
        </Button>
        {/* <Text> {feedback.user.username}</Text> */}
        <HabitItemStyled>{feedback.comment}</HabitItemStyled>
      </ListItem>
    </>
  );
};

export default FeedbackItem;
