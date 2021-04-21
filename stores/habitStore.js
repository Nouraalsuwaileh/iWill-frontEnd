import { makeAutoObservable } from "mobx";
import instance from "./instance";

class HabitStore {
  habits = [];
  loading = true;

  constructor() {
    makeAutoObservable(this);
  }

  fetchHabits = async () => {
    try {
      const res = await instance.get("/habit");
      this.habits = res.data;
      this.loading = false;
      console.log("fetchHabits response", res.data);
    } catch (error) {
      console.error("HabitStore -> fetchHabits -> error", error);
    }
  };
}

const habitStore = new HabitStore();
habitStore.fetchHabits();

export default habitStore;
