/*
 * @Author: Aiva
 * @Date: 2021-12-13 15:54:32
 * @LastEditors: Aiva
 * @LastEditTime: 2021-12-16 15:05:54
 * @Description:
 * @FilePath: \cra-project-template\src\redux\index.ts
 */
import {
    configureStore,
    createAction,
    createReducer,
    PayloadAction,
    createAsyncThunk,
} from "@reduxjs/toolkit";
import { CountConstants } from "../constants/Action";

// 初始State
const initState: TStore = {
    value: 0,
};

// 模拟异步请求
const mockAsyncFn = (t: number = 500) =>
    new Promise<number>(resolve => {
        setTimeout(() => {
            resolve(1);
        }, t);
    });

// 创建Action
export const increment = createAction<number>(CountConstants.INCREMENT);
export const decrement = createAction<number>(CountConstants.DECREMENT);
export const incrementAsync = createAsyncThunk(
    CountConstants.ASYNCINCREMENT,
    async (t: number,{dispatch}) => {
        const res:number = await mockAsyncFn(t);
        dispatch(increment(res))
    }
);

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
    devTools: process.env.NODE_ENV !== "production",
});
