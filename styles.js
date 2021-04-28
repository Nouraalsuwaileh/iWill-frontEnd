import styled from "styled-components/native";

export const HomeBackground = styled.ImageBackground`
  width: 50%;
  height: 50%;
  background-color: blue;
`;

export const HabitImage = styled.Image`
  width: 25;
  height: 25;
`;

export const TopStyling = styled.View`
  height: 40%;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: black;
  font-size: 38;
  text-align: center;
  font-family: sans-serif;
  font-weight: bold;
`;

export const OverLayContainer = styled.View`
  flex: 1;
  background-color: rgba(100, 40, 60, 0.4);
`;

export const BottomStyling = styled.View`
  height: 40%;
  align-items: center;
  justify-content: center;
`;

export const ButtonStyled = styled.Text`
  font-size: 30;
  color: black;
`;

export const HabitItemStyled = styled.Text`
  /* color: ${(props) => props.theme.mainColor}; */
  color: #0b090a;
  font-size: 20;
  margin-top: 10;
  margin-bottom: 10;
  margin-left: 10;
  width: 100%;
  font-weight: bold;
`;

// export const CreateButtonStyled = styled.Button`
//   /* font-size: 1;
//   margin: 1.25; */
//   /* padding: 2; */
//   /* border-radius: 3;
//   background-color: pink;
//   color: black; */
//   /* color: ${(props) => props.theme.backgroundColor};
//   background-color: ${(props) => props.theme.mainColor}; */
//   /* &:hover {
//     color: ${(props) => props.theme.mainColor};
//     background-color: ${(props) => props.theme.backgroundColor};
//   } */
// `;

export const HabitDetailWrapper = styled.View`
  margin-top: 100;
  /* margin-bottom: 35; */
`;

export const HabitDetailImage = styled.Image`
  width: 150;
  height: 150;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20;
`;

export const HabitDetailTitle = styled.Text`
  font-weight: bold;
  font-size: 25;
  text-align: center;
`;

export const HabitContent = styled.Text`
  margin-top: 5;
`;

// export const Habitbutton = styled.button`
//   background-color: #4caf50;
//   border: none;
//   color: white;
//   padding: 15px 32px;
//   text-align: center;
//   text-decoration: none;
//   display: inline-block;
//   font-size: 16px;
// `;
