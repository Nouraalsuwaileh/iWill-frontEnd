import { makeAutoObservable } from "mobx";
import instance from "./instance";

class AuthStore {
  user = null;

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
}

const authStore = new AuthStore();

export default authStore;
