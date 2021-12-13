/*
 * @Author: Aiva
 * @Date: 2021-12-13 15:54:32
 * @LastEditors: Aiva
 * @LastEditTime: 2021-12-13 17:25:13
 * @Description:
 * @FilePath: \cra-project-template\src\redux\index.ts
 */
import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./Count";

export const Store = configureStore({
  reducer:counterSlice.reducer,
});
