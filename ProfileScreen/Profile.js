import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  Button,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons, AntDesign, FontAwesome } from "@expo/vector-icons";
import authStore from "../stores/authStore";
import { observer } from "mobx-react";
import { LinearGradient } from "expo-linear-gradient";

const Profile = ({ navigation }) => {
  // useEffect(() => {
  //   authStore.fetchProfile(authStore.user.id);
  // }, []);

  if (!authStore.user) return navigation.replace("SignIn");

  return (
    <LinearGradient
      colors={["#5B5E5A", "#5B5E5A"]}
      start={[0.1, 0.1]}
      style={styles.linearGradient}
    >
      <SafeAreaView style={styles.container}>
        {/* <ScrollView showsVerticalScrollIndicator={false}> */}
        <View style={styles.titleBar} /*the edit icone*/>
          <FontAwesome
            name="sign-out"
            size={35}
            color="#E88873"
            onPress={() => {
              navigation.replace("SignIn");
            }}
          />

          <AntDesign
            name="edit"
            size={35}
            color="#E88873"
            onPress={() => navigation.navigate("EditProfile")}
          />
        </View>

        <View style={{ alignSelf: "center" }}>
          <View style={styles.profileImage} /*profile image*/>
            <Image
              // source={require("../image/icon_f.png")}
              // source={{ uri: authStore.user?.photo }}
              // source={require("../image/woman.jpg")}
              source={require("../image/profile2.jpg")}
              // source={require("../image/iWill.png")}
              style={styles.image}
              resizeMode="center"
            ></Image>
          </View>
        </View>

        <View style={styles.infoContainer}>
          <Text style={[styles.text, { fontWeight: "200", fontSize: 36 }]}>
            {/* onChangeText={(value) => setUser({ ...user, username: value })} */}
            {authStore.user?.fullname || "Name"}
            {/* {fetchedProfile.fullname} */}
          </Text>
          <Text style={[styles.text, { color: "#ffffff", fontSize: 14 }]}>
            {/* onChangeText={(value) => setUser({ ...user, dateOfBirth: value })} */}
            {authStore.user?.dateOfBirth || "MM/DD/YYYY"}
            {/* {user.dateOfBirth} */}
          </Text>
        </View>

        {/* <Text style={[styles.subText, styles.recent, { fontSize: 15 }]}>
          User Information
        </Text> */}

        <View style={{ alignItems: "center" }}>
          <View style={styles.recentItem}>
            <View style={{ width: 250 }}>
              <Text
                style={[
                  styles.text,
                  { color: "#E0E0E0", fontWeight: "300", textAlign: "center" },
                ]}
              >
                <Text
                  style={{
                    fontWeight: "400",
                    textAlign: "center",
                    marginBottom: "10",
                  }}
                >
                  {authStore.user?.username || "Username"}
                </Text>
              </Text>
            </View>
          </View>

          <View style={styles.recentItem}>
            <View style={{ width: 250 }}>
              <Text
                style={[
                  styles.text,
                  { color: "#E0E0E0", fontWeight: "300", textAlign: "center" },
                ]}
              >
                <Text style={{ fontWeight: "400" }}>
                  {" "}
                  {authStore.user?.email || "E-Mail"}
                </Text>
              </Text>
            </View>
          </View>
        </View>
        {/* </ScrollView> */}
      </SafeAreaView>
    </LinearGradient>
  );
};

export default observer(Profile);

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: "#FFF",
    marginBottom: 130,
  },
  text: {
    fontFamily: "sans-serif", //original "HelveticaNeue" caused error
    color: "#E0E0E0",
    fontSize: 18,
    // marginTop: 15,
  },
  image: {
    flex: 1,
    height: undefined,
    width: undefined,
  },
  titleBar: {
    flexDirection: "row",
    justifyContent: "space-between",

    marginBottom: 20,
    // marginHorizontal: 16,
    // marginRight: 50,
  },
  subText: {
    fontSize: 12,
    color: "#AEB5BC",
    textTransform: "uppercase",
    fontWeight: "500",
  },
  profileImage: {
    width: 250,
    height: 200,
    borderRadius: 100,
    overflow: "hidden",
    marginBottom: 70,
  },
  dm: {
    backgroundColor: "#41444B",
    position: "absolute",
    top: 20,
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
  },
  active: {
    backgroundColor: "#34FFB9",
    position: "absolute",
    bottom: 28,
    left: 10,
    padding: 4,
    height: 20,
    width: 20,
    borderRadius: 10,
  },
  add: {
    backgroundColor: "#41444B",
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 100,
  },
  infoContainer: {
    alignSelf: "center",
    alignItems: "center",
  },
  statsContainer: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 32,
  },
  // statsBox: {
  //   alignItems: "center",
  //   // flex: 1,
  // },
  info: {
    // width: 180,
    // height: 200,
    // borderRadius: 12,
    // overflow: "hidden",
    // marginHorizontal: 10,
    // marginBottom: 30,
    // fontSize: 50,
  },
  recent: {
    marginLeft: 78,
    marginTop: 32,
    marginBottom: 6,
    fontSize: 10,
  },
  recentItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 16,
  },
  activityIndicator: {
    // backgroundColor: "#CABFAB",
    // padding: 1,
    height: 12,
    width: 12,
    borderRadius: 6,
    alignItems: "flex-start",
    // marginBottom: 50,
    marginRight: 20,
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
    color: "#0D2D44",
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
  },
  text_footer: {
    color: "#0b090a",
    fontSize: 18,
  },
});
