import { makeAutoObservable } from "mobx";
import instance from "./instance";
import { configure } from "mobx";

configure({
  enforceActions: "never",
});

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
  createHabit = async (newHabit) => {
    try {
      const res = await instance.post("/habit", newHabit);
      res.data.user = { id: newHabit.userId }; //change when auth is added
      this.habits.push(res.data);
      console.log("HabitStore -> createHabit -> this.habits", this.habits);
    } catch (error) {
      console.error("HabitStore -> createHabit -> error", error);
    }
  };
  deleteHabit = async (habitId, navigation) => {
    // console.log(habitId);
    try {
      let res = await instance.delete(`/habit/${habitId}`);
      // console.log(res);
      this.habits = this.habits.filter((habit) => habit.id !== habitId);
      navigation.goBack();
    } catch (error) {
      console.error("HabitStore -> deleteHabit -> error", error);
    }
  };
}

const habitStore = new HabitStore();
habitStore.fetchHabits();

export default habitStore;
