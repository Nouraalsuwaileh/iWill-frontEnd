import data from "./data";
import { makeObservable, observable, action } from "mobx";
class dataStore {
  data = data;

  constructor() {
    makeObservable(this, {
      data: observable,
    });
  }
}

const dataStore = new dataStore();
export default dataStore;
