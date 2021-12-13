/*
 * @Date: 2021-11-29 10:32:12
 * @LastEditors: Aiva
 * @LastEditTime: 2021-12-13 09:16:26
 * @FilePath: \cra-project-template\src\views\Home\index.tsx
 */
import React, { FC } from "react"
import { Link } from "react-router-dom"

const Home: FC = () => (
    <div className="container">
        <h1>Home</h1>
        <Link to="/about">to About page</Link>
    </div>
)

export default Home