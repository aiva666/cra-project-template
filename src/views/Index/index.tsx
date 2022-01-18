import React, { FC, ReactNode } from "react"
import { menuConfig, TRoutes } from "../../routes"
import { useNavigate, Outlet } from "react-router-dom"
import { Menu, Typography } from "antd"

const Index: FC = () => {
  const navigate = useNavigate()

  const renderMenu = (config: TRoutes[]): ReactNode =>
    config.map((item) =>
      item.children && item.children.length ? (
        <Menu.SubMenu key={item.path} icon={item.icon} title={item.title}>
          {renderMenu(item.children)}
        </Menu.SubMenu>
      ) : (
        <Menu.Item key={item.path} icon={item.icon}>
          {item.title}
        </Menu.Item>
      )
    )

  return (
    <div className="container">
      <Typography.Title level={3}>Demo</Typography.Title>
      <div style={{ display: "flex" }}>
        <Menu
          style={{ width: 200 }}
          mode="vertical"
          onClick={({ item, key, keyPath, domEvent }) => {
            navigate(key)
          }}
        >
          {renderMenu(menuConfig[0]["children"] || [])}
        </Menu>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Index
