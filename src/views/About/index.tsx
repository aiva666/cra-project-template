/*
 * @Date: 2021-11-29 12:06:35
 * @LastEditors: Aiva
 * @LastEditTime: 2021-12-15 13:44:12
 * @FilePath: \cra-project-template\src\views\About\index.tsx
 */
import { FC } from "react";
import { Link } from "react-router-dom";
import Count from "./Count";

const About: FC = () => (
    <div className="container">
        <h1>About</h1>
        <Link to="/">to Home page</Link>
        <div className="container">
            <Count />
        </div>
    </div>
);

export default About;
