import React, { FC, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { increment, decrement, incrementAsync } from "@/redux/index"
import { Button, InputNumber } from "antd"

const Count: FC = () => {
  const { value } = useSelector((state: TStore) => state)
  const dispatch = useDispatch()
  const [num, setNum] = useState(0)

  return (
    <div>
      <h3>Count:{value}</h3>
      <br />
      <div>
        <InputNumber
          value={num}
          style={{ width: 60 }}
          onChange={(val: number) => {
            setNum(val)
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
        <Button
          onClick={() => {
            dispatch(incrementAsync(1000))
          }}
        >
          异步增加1
        </Button>
      </div>
    </div>
  )
}

export default Count
