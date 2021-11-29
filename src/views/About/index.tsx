/*
 * @Date: 2021-11-29 12:06:35
 * @LastEditors: Aiva
 * @LastEditTime: 2021-11-29 13:17:26
 * @FilePath: \yilin-music-ops\src\views\About\index.tsx
 */
import {FC} from 'react'
import { Link } from 'react-router-dom'

const About:FC = () => {
    return (
        <div>
            <h1>About</h1>
            <Link to="/">to Home page</Link>
            <ul>
                <li>1</li>
            </ul>
        </div>
    )
}

export default About