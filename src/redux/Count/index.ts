/*
 * @Author: Aiva
 * @Date: 2021-12-13 15:55:30
 * @LastEditors: Aiva
 * @LastEditTime: 2021-12-13 16:36:44
 * @Description:
 * @FilePath: \cra-project-template\src\redux\Count\index.ts
 */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    incremented: (state, action:PayloadAction<number>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += action.payload;
    },
    decremented: (state, action:PayloadAction<number>) => {
      state.value -= action.payload;
    },
  },
});

export const { incremented, decremented } = counterSlice.actions;

export default counterSlice;
