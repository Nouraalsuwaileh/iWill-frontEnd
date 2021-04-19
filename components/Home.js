import React from "react";
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

export default Home;
