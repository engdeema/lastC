import { makeAutoObservable } from "mobx";

import instance from "./instance";

class Sweet {
  sweets = [];
  isLoading = true;

  constructor() {
    makeAutoObservable(this);
  }

  sweetListFetch = async () => {
    try {
      const res = await instance.get("/sweets");

      this.sweets = res.data;
      this.isLoading = false;
    } catch (error) {
      console.log(error);
    }
  };

  createSweet = async (newSweet) => {
    try {
      const formData = new FormData();
      for (const key in newSweet) {
        formData.append(key, newSweet[key]);
      }
      const response = await instance.post("/sweets", formData);
      this.sweets.push(response.data);
    } catch (error) {
      console.log("error", error);
    }
  };
}

const sweetStore = new Sweet();
sweetStore.sweetListFetch();
export default sweetStore;
