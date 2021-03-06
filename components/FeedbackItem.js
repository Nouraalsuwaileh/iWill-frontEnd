import { ListItem } from "native-base";
import React from "react";
import { Text, View, Image, Button } from "react-native";
import habitStore from "../stores/habitStore";
import { AntDesign } from "@expo/vector-icons";

// Styling
// import { ImageBackground } from "react-native";
import { HabitItemStyled } from "../styles";

const FeedbackItem = ({ feedback, navigation }) => {
  return (
    <>
      <ListItem>
        {/* <Text> {feedback.user.username}</Text> */}
        <HabitItemStyled>
          {/* {feedback.user.username} */}
          {feedback.comment}
          <AntDesign
            name="minuscircleo"
            size={18}
            color="#ffffff"
            // style={styles.icon2}
            onPress={() => habitStore.deleteFeedback(feedback.id, navigation)}
          />
        </HabitItemStyled>
      </ListItem>
    </>
  );
};

export default FeedbackItem;
