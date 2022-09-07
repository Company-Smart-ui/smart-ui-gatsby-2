import * as React from "react"
import * as style from "./hardSkills.module.scss";

export function HardSkills() {
    return <div className={style.hardSkills}>
        <h2 className="title modified">Hard skills</h2>
        <div className="wrapper">
            <div className="item">
                <h3>essential</h3>
                <div className="wrap">
                    <ul>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>SCSS</li>
                        <li>Java Script</li>
                        <li>React.JS</li>
                        <li>PHP</li>
                    </ul>
                    <ul>
                        <li>Typescript</li>
                        <li>Gatsby.JS</li>
                        <li>Graphql</li>
                        <li>Git</li>
                        <li>Next.JS</li>
                        <li>WorldPress</li>
                    </ul>
                    <ul>
                        <li>Bootstrap</li>
                        <li>Tailwind</li>
                        <li>Webpack</li>
                        <li>Material-UI</li>
                        <li>Gulp</li>
                        <li>Redux</li>
                        <li>Node.JS</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
}