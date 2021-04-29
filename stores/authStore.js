import { makeAutoObservable } from "mobx";
import instance from "./instance";
import jwtDecode from "jwt-decode";
import AsyncStorage from "@react-native-async-storage/async-storage";

class AuthStore {
  user = null;
  // user = {};

  constructor() {
    makeAutoObservable(this);
  }

  signup = async (userData) => {
    try {
      await instance.post("/user/signup", userData);
      // await instance.post("/signup", userData).then(res => setToken(res.data.token)).catch(err => console.log(err.message));
      console.log("Added user:", userData);
    } catch (error) {
      console.log("AuthStore -> signup -> error", error);
    }
  };

  signin = async (userData) => {
    try {
      const response = await instance.post("/user/signin", userData);
      console.log("response token: ", response.data.token);
      const token = response.data.token;

      this.user = jwtDecode(token);
      instance.defaults.headers.common = {
        Authorization: `Bearer ${token}`,
      };

      await AsyncStorage.setItem("userToken", token);

      // this.checkForToken();

      console.log("user token => ", this.user, token);
    } catch (error) {
      console.log("AuthStore -> signin -> error", error);
    }
  };

  // fetchProfile = async (userId) => {
  //   console.log("authStore -> fetchProfile -> user id", userId);

  //   try {
  //     const response = await instance.get(`/user/profile/${userId}`);
  //     console.log("authStore -> fetchedProfile", response.data);
  //   } catch (error) {
  //     console.log("authStore -> fetchProfile -> error", error);
  //   }
  // };

  updateProfile = async (updatedUserData, navigation) => {
    console.log(
      "authStore -> updateProfile -> updatedProfile",
      updatedUserData
    );

    try {
      // await instance.put(`/user/edit/${this.user.id}`, updatedUserData);
      const response = await instance.put(
        `/user/edit/${this.user.id}`,
        updatedUserData
      );
      // navigation.navigate("Profile");
      navigation.goBack();
      const editedUser = response.data;
      console.log("authStore -> edited User", editedUser);
      for (const key in this.user) this.user[key] = editedUser[key];
    } catch (error) {
      console.log("authStore -> updateProfile -> error", error);
    }
  };
}

const authStore = new AuthStore();
//authStore.fetchProfile(44); //test fetch

export default authStore;
