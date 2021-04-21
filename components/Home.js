import React from "react";
<<<<<<< HEAD
import { StyleSheet, Text, View } from "react-native";

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#76a6ef",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
});

=======
import background1 from "../image/background1.jpg";

// Styling
import { ImageBackground, View, Text } from "react-native";
import {
  HomeBackground,
  TopStyling,
  Title,
  BottomStyling,
  ButtonStyled,
  OverLayContainer,
} from "../styles";
import HabitList from "./HabitList";

const Home = ({ habit, navigation }) => {
  return (
    <HomeBackground source={require("../image/background1.jpg")}>
      <TopStyling>{/* <Title>Habits</Title> */}</TopStyling>
      <BottomStyling>
        <ButtonStyled
          onPress={() => navigation.navigate("HabitList", { habit: habit })}
        >
          Habit List
        </ButtonStyled>
      </BottomStyling>
    </HomeBackground>
  );
};

>>>>>>> origin/HabitListANDFeedbackListWithCreateANDdelete
export default Home;
