import { makeAutoObservable } from "mobx";
import instance from "./instance";
import { configure } from "mobx";

configure({
  enforceActions: "never",
});

class HabitStore {
  habits = [];
  feedbacks = [];
  loading = true;
  loadingFeedbacks = true;
  partnerHabits = [];
  // partner's habits array? fetch?

  constructor() {
    makeAutoObservable(this);
  }

  fetchHabits = async () => {
    //HabitList
    try {
      const res = await instance.get("/habit");
      this.habits = res.data;
      this.loading = false;
      console.log("fetchHabits response", res.data);
      console.log("habit partner 1", res.data[0].partners[0]);
    } catch (error) {
      console.error("HabitStore -> fetchHabits -> error", error);
    }
  };

  fetchPartnerHabits = async () => {
    //PartnerHabitList
    try {
      const res = await instance.get("/habit/partners");
      this.partnerHabits = res.data;
      this.loading = false;
      console.log("fetchPartnerHabits response", res.data);
    } catch (error) {
      console.error("HabitStore -> fetchPartnerHabits -> error", error);
    }
  };

  addPartner = async (habitId, partner, navigation) => {
    try {
      await instance.put(`/habit/${habitId}/partner`, { username: partner });
      console.log("Added partner username", partner);
      navigation.replace("HabitDetails");
    } catch (error) {
      console.log("HabitStore -> addPartner -> error", error);
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
      // navigation.goBack();
    } catch (error) {
      console.error("HabitStore -> deleteHabit -> error", error);
    }
  };
  fetchFeedbacks = async () => {
    try {
      const res = await instance.get("/feedback");
      this.feedbacks = res.data;
      this.loadingFeedbacks = false;
      console.log("fetchFeedbacks response", res.data);
    } catch (error) {
      console.error("HabitStore -> fetchFeedbacks -> error", error);
    }
  };
  createFeedback = async (newFeedback) => {
    try {
      // const res = await instance.post("/feedback", newFeedback);
      await instance.post("/feedback", newFeedback);
      this.fetchFeedbacks(); //why fetch here?
      console.log(
        "HabitStore -> createFeedback -> this.feedbacks",
        this.feedbacks
      );
    } catch (error) {
      console.error("HabitStore -> createFeedback -> error", error);
    }
  };
  deleteFeedback = async (feedbackId) => {
    try {
      await instance.delete(`/feedback/${feedbackId}`);
      this.feedbacks = this.feedbacks.filter(
        (feedback) => feedback.id !== feedbackId
      );
    } catch (error) {
      console.error("HabitStore -> deleteHabit-> error", error);
    }
  };
  toggleCompleted = async (habitId, status) => {
    try {
      await instance.put(`/habit/${habitId}`, { completed: status });
    } catch (error) {
      console.log("HabitStore -> toggleCompleted -> error", error);
    }
  };
}

const habitStore = new HabitStore();
// habitStore.fetchHabits();
// habitStore.fetchFeedbacks();
// habitStore.fetchPartnerHabits();

export default habitStore;
