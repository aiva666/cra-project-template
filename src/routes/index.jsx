/*
 * @Date: 2021-09-18 10:44:06
 * @LastEditors: Aiva
 * @LastEditTime: 2021-11-29 13:10:41
 * @FilePath: \yilin-music-ops\src\routes\index.jsx
 */

import Home from '@/views/Home'
import About from '@/views/About'
// import { RouteObject } from 'react-router'

const routes = [
    {
        path:"/",
        element:<Home />,
    },
    {
        path:"/about",
        element:<About />,
    },
]

export default routes