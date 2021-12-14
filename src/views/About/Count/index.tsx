/*
 * @Author: Aiva
 * @Date: 2021-12-13 09:17:33
 * @LastEditors: Aiva
 * @LastEditTime: 2021-12-14 13:49:55
 * @Description:
 * @FilePath: \cra-project-template\src\views\About\Count\index.tsx
 */

import React, { FC, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {increment,decrement} from "@/redux/index";
import { Button, InputNumber } from "antd";

const Count: FC = () => {
  const { value } = useSelector((state: TStore) => state);
  const dispatch = useDispatch();
  const [num, setNum] = useState(0);

  return (
    <div>
      <h3>Count:{value}</h3>
      <br />
      <div>
        <InputNumber
          value={num}
          style={{ width: 60 }}
          onChange={(val: number) => {
            setNum(val);
          }}
        />
        &emsp;
        <Button
          onClick={() => {
            dispatch(increment(num))
          }}
        >
          +
        </Button>
        &emsp;
        <Button
          onClick={() => {
            dispatch(decrement(num))
          }}
        >
          -
        </Button>
        &emsp;
        {/* <Button onClick={() => {props.createAsyncIncrement(num,2000)}}>异步增加</Button> */}
      </div>
    </div>
  );
};

export default Count;
