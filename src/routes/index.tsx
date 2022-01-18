/**
 * 路由配置文件
 */
import { ReactNode } from "react"
import { AppstoreOutlined } from "@ant-design/icons"

import Index from "@/views/Index"
import ReduxDemo from "@/views/ReduxDemo"
import NotFount from "@/views/Common/NotFount"

export interface TRoutes {
  /** 路由标题 */
  title?: string
  /** 路由路径 */
  path: string
  /** 页面组件 */
  element?: ReactNode
  /** 图标 */
  icon?: ReactNode
  /** 是否在菜单隐藏 */
  hideInMenu?: boolean
  /** 子路由 */
  children?: TRoutes[]
}

const routes: TRoutes[] = [
  {
    path: "/",
    element: <Index />,
    title: "Index",
    icon: <AppstoreOutlined />,
    children: [
      {
        title: "Redux",
        path: "/demo/redux",
        element: <ReduxDemo />,
        icon: <AppstoreOutlined />,
      },
      {
        title: "Nav Demo",
        path: "/demo/nav-demo",
        icon: <AppstoreOutlined />,
        children: [
          {
            title: "Nav-1",
            path: "/demo/nav-demo/nav-1",
            icon: <AppstoreOutlined />,
          },
          {
            title: "Nav-2",
            path: "/demo/nav-demo/nav-2",
            icon: <AppstoreOutlined />,
            children: [
              {
                title: "Nav-2-1",
                path: "/demo/nav-demo/nav-2/nav-2-1",
                icon: <AppstoreOutlined />,
                hideInMenu: true,
              },
              {
                title: "Nav-2-2",
                path: "/demo/nav-demo/nav-2/nav-2-2",
                icon: <AppstoreOutlined />,
              },
            ],
          },
          {
            title: "Nav-3",
            path: "/demo/nav-demo/nav-3",
            icon: <AppstoreOutlined />,
            hideInMenu: true,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <NotFount />,
  },
]

/** 递归筛选路由菜单 */
const deepFilter = (list: TRoutes[]): TRoutes[] =>
  list
    .filter((item) => !item.hideInMenu)
    .map((item) =>
      item.children && item.children.length
        ? { ...item, children: deepFilter(item.children) }
        : item
    )

export const menuConfig = deepFilter(routes)

export default routes
