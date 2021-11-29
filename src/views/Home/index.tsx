/*
 * @Date: 2021-11-29 10:32:12
 * @LastEditors: Aiva
 * @LastEditTime: 2021-11-29 12:59:51
 * @FilePath: \yilin-music-ops\src\views\Home\index.tsx
 */
import React,{FC} from 'react'
import { Link } from 'react-router-dom'

const Home:FC = () => {

    return(
        <div>
            <h1>Home</h1>
            <Link to="/about">to About page</Link>
        </div>
    )
}

export default Home