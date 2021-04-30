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
import { LinearGradient } from "expo-linear-gradient";

// compare token id to partner ids in array
// if there's at least one match, show Partner Habit List
// If there's a partner habit list, filter by habits I am a partner in

const PartnerHabitList = ({ navigation }) => {
  if (habitStore.loading) return <Spinner />;
  const partnerHabitList = habitStore.partnerHabits.map((habit) => (
    <HabitItem habit={habit} key={habit.id} navigation={navigation} />
  ));
  return (
    <LinearGradient
      colors={["#ffffff", "#cfd9df"]}
      start={[0.1, 0.1]}
      style={styles.linearGradient}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.titleBar}></View>
        <View style={styles.text}>
          {/* <View style={styles.expanded}>
          <Text>Add Habit</Text>
        </View> */}
        </View>

        <List>{partnerHabitList}</List>
        {/* <ScrollView>
          <View style={styles.icon}>
            <Ionicons
              name="add-circle-sharp"
              size={60}
              color="black"
              onPress={() => navigation.navigate("NewHabitForm")}
            />
          </View>
        </ScrollView> */}

        {/* <View style={styles.icon}>
          <AntDesign name="arrowright" size={24} color="black" />
        </View> */}
      </SafeAreaView>
    </LinearGradient>
  );
};

{
  /* <View style={styles.container}>
  <Text style={styles.text10}>Edit Profile</Text>
  <Icon name="ios-arrow-forward" style={styles.icon}></Icon>
</View>; */
}

export default observer(PartnerHabitList);

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: "#fff",
  },
  titleBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 100,
  },
  habitlist: {
    height: 30,
    fontSize: 16,
    marginTop: 15,
  },
  icon: {
    // color: "rgba(31,178,204,1)",
    fontSize: 30,
    alignSelf: "center",
    marginTop: 150,
    // alignItems: "center",
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
  container: {
    // flex: 1,
    // backgroundColor: "#BFDCF2",
  },
  header: {
    // flex: 1,
    marginTop: 50,
    // justifyContent: "flex-end",
    // paddingHorizontal: 20,
    // paddingBottom: 20,
  },
  linearGradient: {
    width: "100%",
    height: "100%",
    opacity: 0.95,
    justifyContent: "center",
    alignItems: "center",
  },

  footer: {
    // flex: 15,
    backgroundColor: "transparent",
    borderTopLeftRadius: 100,
    borderTopRightRadius: 50,
    paddingHorizontal: 20,
    paddingVertical: 30,
    width: 350,
    height: 550,
  },
  text_header: {
    color: "#0D2D44",
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
  },
  text_footer: {
    color: "#0b090a",
    fontSize: 18,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#FF0000",
    paddingBottom: 5,
  },
  textInput: {
    // flex: 1,
    // marginTop: Platform.OS === "ios" ? 0 : -12,
    width: 200,
    paddingLeft: 10,
    // color: "#d6d6d6",
  },
  errorMsg: {
    color: "#d6d6d6",
    fontSize: 14,
  },
  button: {
    alignItems: "center",
    marginTop: 30,
  },
  signIn: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
