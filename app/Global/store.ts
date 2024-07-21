"use client";
import { configureStore } from "@reduxjs/toolkit";
import reducer from "./redux";

export const makeStore = () => {
  return configureStore({
    reducer: {
      reducer,
    },
  });
};

const add = ["jae", "sdkjs", "sjd"];

const dd = add.filter((el: any) => {
  return el !== "jae";
});
// console.log(dd);

export const store = makeStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
