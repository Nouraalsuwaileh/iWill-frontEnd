import React, { useRef, useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import Animated from "react-native-reanimated";
import { ProgressBar, Colors } from "react-native-paper";
import authStore from "../stores/authStore";
import habitStore from "../stores/habitStore";
// function useInterval(callback, delay) {
//   // need to add Boolean
//   const savedCallback = useRef();
//   // Remember the latest callback.
//   useEffect(() => {
//     savedCallback.current = callback;
//   }, [callback]);
//   // Set up the interval.
//   useEffect(() => {
//     function tick() {
//       savedCallback.current();
//     }
//     if (delay !== null) {
//       let id = setInterval(tick, delay);
//       return () => clearInterval(id);
//     }
//   }, [delay]);
// }
// export default function Progrees() {
//   let animation = useRef(new Animated.Value(0));
//   const [progress, setProgress] = useState(0);
//   useInterval(() => {
//     if (progress < 100) {
//       setProgress(progress + 5);
//     }
//   }, 1000);

//   useEffect(() => {
//     Animated.timing(animation.current, {
//       toValue: progress,
//       duration: 100,
//     }).start();
//   }, [progress]);

//   const width = animation.current.interpolate({
//     inputRange: [0, 100],
//     outputRange: ["0%", "100%"],
//     extrapolate: "clamp",
//   });
//   return (
//     <View style={styles.container}>
//       <Text> Loading.....</Text>
//       <View style={styles.progressBar}>
//         <Animated.View
//           style={
//             ([StyleSheet.absoluteFill],
//             { backgroundColor: "8BED4F", width: "50%" })
//           }
//         />
//       </View>

//       <Text>{`${progress}%`}</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     paddingTop: Constants.statusBarHeight,
//     backgroundColor: "#ecf0f1",
//     padding: 8,
//   },
//   progressBar: {
//     height: 20,
//     width: "100%",
//     backgroundColor: "white",
//     borderColor: "#000",
//     borderWidth: 2,
//     borderRadius: 5,
//   },
// });

//https://blog.logrocket.com/how-to-build-a-progress-bar-with-react-native/

// import * as React from 'react';
// import { ProgressBar, Colors } from 'react-native-paper';

let tasks = [
  {
    completed: true,
  },
  {
    completed: true,
  },
  {
    completed: false,
  },
  {
    completed: false,
  },
];

// let numberOfTasks = tasks.length;
// let numberOfCompletedTasks = tasks.filter((task) => task.completed == true)
//   .length;

let numberOfTasks = habitStore.habits.length;
let numberOfCompletedTasks = habitStore.habits.filter(
  (habits) => habitStore.habits.completed == true
).length;
// progess={numberOfCompletedTasks/numberOfTasks}

const MyComponent = () => (
  <View style={styles.container}>
    <ProgressBar
      style={{ marginTop: 300 }}
      progress={numberOfCompletedTasks / numberOfTasks}
      // progress={habitStore.habits.completed / habitStore.habits.length}

      color={Colors.red800}
    />
  </View>
);

export default MyComponent;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // // justifyContent: "center",
    // alignItems: "center",
    // // paddingTop: Constants.statusBarHeight,
    // // backgroundColor: "#ecf0f1",
    // padding: 20,
  },
  progressBar: {
    height: 20,
    width: "100%",
    backgroundColor: "white",
    borderColor: "#000",
    borderWidth: 2,
    borderRadius: 5,
  },
});
