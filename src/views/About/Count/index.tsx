/*
 * @Author: Aiva
 * @Date: 2021-12-13 10:33:26
 * @LastEditors: Aiva
 * @LastEditTime: 2021-12-13 17:25:05
 * @Description:
 * @FilePath: \cra-project-template\src\views\About\Count\index.tsx
 */
import { connect } from "react-redux";
import { incremented, decremented, } from "@/redux/Count";
import CountUI from "./view";

export interface TCountProps {
  value: number;
  createIncrement: (num: number) => void;
  createDecrement: (num: number) => void;
  // createAsyncIncrement: (num: number,time:number) => void;
  children?: React.ReactNode;
}

const mapStateToProps = (state: TStore) => {
  const { value } = state;
  return { value };
};
const mapDispatchToProps = (dispatch: any) => ({
  createIncrement (num: number) {
    dispatch(incremented(num));
  },
  createDecrement (num: number) {
    dispatch(decremented(num));
  },
  // createAsyncIncrement (num: number, time: number) {
  //   dispatch(asyncDecrement(num, time));
  // },
});

export default connect(mapStateToProps, mapDispatchToProps)(CountUI);
