import React, { FC } from "react"
import { Button } from "antd"
import { useNavigate } from "react-router-dom"
import "./index.scss"

interface TProps {
  code: 404 | 403
}

const Abnormal: FC<TProps> = (props) => {
  
  const navigate = useNavigate()
  return (
    <div className="Abnormal">
      <p>哎呀，出错了！</p>
      <h2>{props.code}</h2>
      <p>您可以通过以下方式继续访问</p>
      <Button type="text" href="/">
        返回首页
      </Button>
      <Button type="text" onClick={() => {navigate(-1)}}>
        返回上一页
      </Button>
    </div>
  )
}
export default Abnormal
