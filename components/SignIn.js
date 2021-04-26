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
import { LinearGradient } from "expo-linear-gradient";

//libraries
import Feather from "react-native-vector-icons/Feather";
import { Entypo } from "@expo/vector-icons";

const SignIn = ({ navigation }) => {
  //user state
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  return (
    <LinearGradient
      colors={["#6E23FB", "#C1D3FE", "#1b1b1e"]}
      start={[0.1, 0.1]}
      style={styles.linearGradient}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          {/* <Text style={styles.text_header}>Sign In</Text> */}
        </View>

        <View style={styles.footer}>
          <Text style={[styles.text_footer, { marginTop: 20 }]}>Username</Text>
          <View style={styles.action}>
            <Feather name="user" size={24} color="#6E23FB" />
            <TextInput
              onChangeText={(value) => setUser({ ...user, username: value })}
              placeholder="Your Username"
              style={styles.textInput}
              autoCapitalize="none"
              autoCompleteType="username"
            />
          </View>

          <Text style={[styles.text_footer, { marginTop: 20 }]}>Password</Text>
          <View style={styles.action}>
            <Entypo name="lock" size={24} color="#6E23FB" />
            <TextInput
              onChangeText={(value) => setUser({ ...user, password: value })}
              placeholder="Your Password"
              secureTextEntry={true}
              style={styles.textInput}
              autoCapitalize="none"
              autoCompleteType="password"
            />
          </View>

          <View style={styles.button}>
            <TouchableOpacity
              onPress={() => {
                authStore.signin(user);
                // navigation.navigate("Home");
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
              <Text style={[styles.textSign, { color: "#6E23FB" }]}>
                Sign In
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.button}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("SignUp");
                // navigation.replace("tab");
              }}
              // style={[
              //   styles.signIn,
              //   {
              //     borderColor: "009387",
              //     borderWidth: 1,
              //     marginTop: 1,
              //   },
              // ]}
            >
              <Text style={[styles.textSign, { color: "#BFDCF2" }]}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

export default SignIn;

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
    height: 400,
  },
  text_header: {
    color: "#0D2D44",
    fontWeight: "bold",
    fontSize: 30,
  },
  text_footer: {
    color: "#2C0278",
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
    width: 100,
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
