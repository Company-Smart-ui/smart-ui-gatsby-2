import * as React from "react"
import * as style from "./cv.module.scss";
import photoVictor from "./cvPdf/photo-victor.png";
import {ItemJob} from "./experience/experience";
import {HardSkills} from "./hardSkills/hardSkills";
import CVPdf from "./cvPfd";

const CV = ( ) => {

    return <div className={style.cv}>

        <CVPdf/>

        {/*<div className="container">
            <div className="hero">
                <div className="photo">
                    <picture>
                        <img src={photoVictor} alt="photoVictor"/>
                    </picture>
                </div>
                <div className="description">
                    <div className="wrap-name">
                        <h1>
                            <span>Victor </span>
                            Moskalev
                        </h1>
                        <p className="job">Front-End teAM LEAD</p>
                    </div>
                    <div className="content">
                        <p>Hello,my name is Victor Moskalev. I`m front-end developer with 4  years experience. For 3 years I`ve studied html, css, js and wordpress. Last 1.5 years I`ve worked with  React , Next js and Gatsby.</p>
                        <p>I live in Kharkiv, but I worked and still working with pepole all around the world. Looking for an entry-level position at a great company to be a hard-working asset to any team, to learn, grow and develop long-term.</p>
                        <p>Take your time, check my resume, see my skills, some of my works, my experience and when you are ready drop me a message.</p>
                    </div>
                </div>
            </div>
            <div className="skills">
                <HardSkills/>
                <div className="info">
                    <div className="experience">
                        <h2 className="title">EXPERIENCE</h2>
                        <div>
                            <ItemJob infoJob={{
                                nameCompany: 'Freelance',
                                time: '2017',
                                nameJob: 'freelance'
                            }} />
                            <ItemJob infoJob={{
                                nameCompany: 'LOREM IPSUM',
                                time: '2020',
                                nameJob: 'Frontend developer '
                            }} />
                            <ItemJob infoJob={{
                                nameCompany: 'LOREM IPSUM',
                                time: '2021-2022',
                                nameJob: 'Team Lead frontend developer'
                            }} />
                        </div>
                    </div>
                    <div className="personal-skills">
                        <h2 className="title">PERSONAL SKILLS</h2>
                        <ul>
                            <li>Communication</li>
                            <li>Confidence</li>
                            <li>Team work</li>
                            <li>Reliability</li>
                            <li>Leadership</li>
                            <li>Independence</li>
                            <li>Interpersonal skills</li>
                            <li>Self-awereness</li>
                            <li>Integrity</li>
                        </ul>
                    </div>
                    <div className="language">
                        <h2 className="title">language</h2>
                    </div>
                </div>
            </div>
        </div>*/}
    </div>


}
export default CV
