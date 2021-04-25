import React from "react";
import habitStore from "../stores/habitStore";
import HabitItem from "./HabitItem";
import { observer } from "mobx-react";
import {
  View,
  Button,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  Text,
} from "react-native";
import { List, Spinner } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

// const HabitList = ({ navigation }) => {
//   if (habitStore.loading) return <Spinner />;
//   const habitList = habitStore.habits.map((habit) => (
//     <HabitItem habit={habit} key={habit.id} navigation={navigation} />
//   ));
//   return (
//     <View>
//       <Ionicons name="add-circle-sharp" size={50} color="black" />
//       <ScrollView>
//         <Button
//           onPress={() => navigation.navigate("NewHabitForm")}
//           title="Create Habit"
//           color="#8d063e"
//         >
//           Add Habit!
//         </Button>
//         <List>{habitList}</List>
//       </ScrollView>
//     </View>
//   );
// };

// export default observer(HabitList);

{
  /* <Ionicons name="add-circle-sharp" size={50} color="black" /> */
}

const HabitList = ({ navigation }) => {
  if (habitStore.loading) return <Spinner />;
  const habitList = habitStore.habits.map((habit) => (
    <HabitItem habit={habit} key={habit.id} navigation={navigation} />
  ));
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleBar}>
        <ScrollView>
          <Ionicons
            name="add-circle-sharp"
            size={50}
            color="black"
            onPress={() => navigation.navigate("NewHabitForm")}
          />
        </ScrollView>
      </View>
      <View style={styles.text}>
        {/* <View style={styles.expanded}>
          <Text>Add Habit</Text>
        </View> */}
      </View>

      <View style={styles.habitlist}>
        <List>{habitList}</List>

        {/* <View style={styles.icon}>
          <AntDesign name="arrowright" size={24} color="black" />
        </View> */}
      </View>
    </SafeAreaView>
  );
};

{
  /* <View style={styles.container}>
  <Text style={styles.text10}>Edit Profile</Text>
  <Icon name="ios-arrow-forward" style={styles.icon}></Icon>
</View>; */
}

export default observer(HabitList);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  titleBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 24,
    // marginHorizontal: 100,
    marginStart: 300,
  },
  habitlist: {
    height: 30,
    fontSize: 16,
    marginTop: 15,
  },
  icon: {
    color: "rgba(31,178,204,1)",
    fontSize: 30,
    alignSelf: "flex-end",
    marginTop: -6,
  },
  text: {
    width: 149,
    height: 21,
  },
  expanded: {
    color: "#121212",
    fontSize: 20,
    marginStart: 40,
  },
});
