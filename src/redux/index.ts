/*
 * @Author: Aiva
 * @Date: 2021-12-13 15:54:32
 * @LastEditors: Aiva
 * @LastEditTime: 2021-12-14 13:44:02
 * @Description:
 * @FilePath: \cra-project-template\src\redux\index.ts
 */
import {
  configureStore,
  createAction,
  createReducer,
  PayloadAction,
} from "@reduxjs/toolkit";
import { CountConstants } from "../constants/Action";

// 初始State
const initState:TStore = {
  value: 0,
};

// 创建Action
export const increment = createAction<number>(CountConstants.INCREMENT);
export const decrement = createAction<number>(CountConstants.DECREMENT);

// 创建Reducer
const reducer = createReducer(initState, {
  [increment.type]: (state, action: PayloadAction<number>) => {
    // Redux Toolkit allows us to write "mutating" logic in reducers. It
    // doesn't actually mutate the state because it uses the Immer library,
    // which detects changes to a "draft state" and produces a brand new
    // immutable state based off those changes
    state.value += action.payload;
  },
  [decrement.type]: (state, action: PayloadAction<number>) => {
    state.value -= action.payload;
  },
});

export const Store = configureStore({
  reducer,
});
