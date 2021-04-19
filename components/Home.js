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
} from "../styles";

const Home = () => {
  return (
    <HomeBackground source={require("../image/background1.jpg")}>
      <TopStyling>{/* <Title>Habits</Title> */}</TopStyling>
      <BottomStyling>
        <ButtonStyled onPress={() => alert("Take me to the list of Habits")}>
          Click here to skip
        </ButtonStyled>
      </BottomStyling>
    </HomeBackground>
  );
};

export default Home;
