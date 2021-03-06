import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  TextInput,
  TouchableOpacity,
} from "react-native";

import authStore from "../stores/authStore";

//libraries
import Feather from "react-native-vector-icons/Feather";
import { Entypo } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

import DateTimePicker from "@react-native-community/datetimepicker";

const SignUp = ({ navigation }) => {
  //date states & functions
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const getDateStr = (date) =>
    `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`; // console.log("Selected Date:", getDateStr(date));

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
    setUser({
      ...user,
      dateOfBirth: getDateStr(currentDate),
    });
  };

  const showDatepicker = () => {
    setShow(true);
  };

  //user state
  const [user, setUser] = useState({
    fullname: "",
    username: "",
    password: "",
    email: "",
    dateOfBirth: "",
  });

  return (
    <LinearGradient
      colors={["#5B5E5A", "#5B5E5A", "#E88873"]}
      start={[0.1, 0.1]}
      style={styles.linearGradient}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.text_header}>Welcome!</Text>
        </View>

        <View style={styles.footer}>
          <Text style={[styles.text_footer, { marginTop: 20 }]}>Full Name</Text>
          <View style={styles.action}>
            <Feather name="user" size={24} color="#ACACAC" />
            <TextInput
              onChangeText={(value) => setUser({ ...user, fullname: value })}
              placeholder="Your Name"
              style={styles.textInput}
              autoCapitalize="words"
            />
          </View>

          <Text style={[styles.text_footer, { marginTop: 20 }]}>E-Mail</Text>
          <View style={styles.action}>
            <Entypo name="email" size={20} color="#ACACAC" />
            <TextInput
              onChangeText={(value) => setUser({ ...user, email: value })}
              placeholder="Your E-Mail Address"
              style={styles.textInput}
              autoCompleteType="email"
              autoCapitalize="none"
              keyboardType="email-address"
            />
          </View>

          <Text style={[styles.text_footer, { marginTop: 20 }]}>Username</Text>
          <View style={styles.action}>
            <Feather name="user" size={24} color="#ACACAC" />
            <TextInput
              onChangeText={(value) => setUser({ ...user, username: value })}
              placeholder="Your Username"
              style={styles.textInput}
              autoCompleteType="username"
              autoCapitalize="none"
            />
          </View>

          <Text style={[styles.text_footer, { marginTop: 20 }]}>Password</Text>
          <View style={styles.action}>
            <Entypo name="lock" size={24} color="#ACACAC" />
            <TextInput
              onChangeText={(value) => setUser({ ...user, password: value })}
              placeholder="Your Password"
              secureTextEntry={true}
              style={styles.textInput}
              autoCapitalize="none"
              autoCompleteType="password"
            />
          </View>

          <Text style={[styles.text_footer, { marginTop: 20 }]}>
            Date of Birth
          </Text>
          <View style={styles.action}>
            <Feather
              onPress={showDatepicker}
              name="calendar"
              size={24}
              color="#ACACAC"
            />
            <TouchableOpacity onPress={showDatepicker}>
              <TextInput
                value={getDateStr(date)}
                editable={false}
                // onChangeText={(value) =>
                // setUser({ ...user, dateOfBirth: value })
                // }
                placeholder="DD/MM/YYYY"
                style={styles.textInput}
                autoCapitalize="none"
              />
            </TouchableOpacity>
          </View>
          <View>
            {show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode="date"
                display="default"
                onChange={onChange}
              />
            )}
          </View>

          <View style={styles.button}>
            <TouchableOpacity
              onPress={() => {
                authStore.signup(user);
                navigation.replace("tab");
              }}
              style={[
                styles.signIn,
                {
                  borderColor: "009387",
                  borderWidth: 1,
                  marginTop: 1,
                },
              ]}
            >
              <Text style={[styles.textSign, { color: "#ffffff" }]}>
                Create Account
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

export default SignUp;

//styles
const styles = StyleSheet.create({
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
    color: "#E88873",
    fontWeight: "bold",
    fontSize: 35,
    textAlign: "center",
  },
  text_footer: {
    color: "#ffffff",
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
    color: "#ffffff",
    // color: "#E88873",
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
