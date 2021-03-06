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
// import DateTimePicker from "@react-native-community/datetimepicker";

const EditProfile = ({ navigation }) => {
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
    fullname: `${authStore.user?.fullname || "full name"}`,
    // username: `${authStore.user.username}`,
    // password: "",
    email: `${authStore.user?.email || "email"}`,
    dateOfBirth: `${authStore.user?.dateOfBirth || "DOB"}`,
  });

  return (
    <LinearGradient
      colors={["#5B5E5A", "#5B5E5A"]}
      start={[0.1, 0.1]}
      style={styles.linearGradient}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.text_header}>Edit Profile</Text>
        </View>

        <View style={styles.footer}>
          <Text style={[styles.text_footer, { marginTop: 20 }]}>Username</Text>
          <View style={styles.action}>
            <Feather name="user" size={24} color="#ACACAC" />
            <TextInput
              value={authStore.user?.username || "username"}
              onChangeText={(value) => setUser({ ...user, username: value })}
              placeholder="Sign in to access your data"
              style={styles.textInput_Uneditable}
              autoCompleteType="username"
              editable={false}
            />
          </View>

          {/* <Text style={[styles.text_footer, { marginTop: 20 }]}>Password</Text>
        <View style={styles.action}>
          <Entypo name="lock" size={24} color="#ACACAC" />
          <TextInput
            defaultValue={authStore.user.password}
            onChangeText={(value) => setUser({ ...user, password: value })}
            placeholder="New Password?"
            secureTextEntry={true}
            style={styles.textInput}
            autoCapitalize="none"
            autoCompleteType="password"
          />
        </View> */}

          <Text style={[styles.text_footer, { marginTop: 20 }]}>Full Name</Text>
          <View style={styles.action}>
            <Feather name="user" size={24} color="#ACACAC" />
            <TextInput
              defaultValue={authStore.user?.fullname || "full name"}
              onChangeText={(value) => setUser({ ...user, fullname: value })}
              placeholder="Sign in to access your data"
              style={styles.textInput}
              autoCapitalize="words"
            />
          </View>

          <Text style={[styles.text_footer, { marginTop: 20 }]}>E-Mail</Text>
          <View style={styles.action}>
            <Entypo name="email" size={20} color="#ACACAC" />
            <TextInput
              defaultValue={authStore.user?.email || "email"}
              onChangeText={(value) => setUser({ ...user, email: value })}
              placeholder="Sign in to access your data"
              style={styles.textInput}
              autoCompleteType="email"
              keyboardType="email-address"
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
            {/*** currently updatable as text only. Datepicker disabled. ***/}
            <TouchableOpacity onPress={showDatepicker}>
              <TextInput
                defaultValue={authStore.user?.dateOfBirth || "DOB"}
                // value={getDateStr(date)}
                // editable={false}
                onChangeText={(value) =>
                  setUser({ ...user, dateOfBirth: value })
                }
                placeholder="MM/DD/YYYY"
                style={styles.textInput}
                autoCapitalize="none"
              />
            </TouchableOpacity>
          </View>
          {/* <View>
          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode="date"
              display="default"
              onChange={onChange}
            />
          )}
        </View> */}

          <View style={styles.button}>
            <TouchableOpacity
              onPress={() => {
                authStore.updateProfile(user, navigation);
              }}
              style={[
                styles.signIn,
                {
                  borderColor: "#ffffff",
                  borderWidth: 1,
                  marginTop: 1,
                },
              ]}
            >
              <Text style={[styles.textSign, { color: "#E88873" }]}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

export default EditProfile;

//styles
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: "#8d063e",
    marginBottom: 100,
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  footer: {
    flex: 3,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
    color: "#ffffff",
  },
  text_header: {
    color: "#E88873",
    fontWeight: "bold",
    fontSize: 30,
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
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "#ffffff",
    fontSize: 15,
    fontWeight: "bold",
  },
  textInput_Uneditable: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "#C6C6C6",
    fontWeight: "bold",
  },
  errorMsg: {
    color: "#FF0000",
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
    height: 500,
  },
  text_header: {
    color: "#E88873",
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
  },
  text_footer: {
    color: "#ffffff",
    fontSize: 18,
  },
});
