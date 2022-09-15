import * as React from "react"
import * as style from "./cv.module.scss";
import photoDima from "./photo-dima.png";
import CVPdf from "./cvPfd";
import chatIcon from "./chat-white.png";

const CV = ( ) => {

    const
        photo = photoDima,
        name = 'Dmytro',
        lastName = 'shelest',
        job = 'UI UX designer',
        description = ["UI UX Designer with 2.5 years of interface design experience is looking for a middle UX UI designer position. I have experience with Figma and Adobe Photoshop illustrator for designing and creating user interfaces. functional interfaces. highly motivated to learn new technologies, be a member of a team and improve their skills in real projects.",
                        "Hard work, purposefulness, result orientation, increased efficiency, discipline, responsibility, self-control, reliability, love for details, scrupulousness are inherent. Ability to complete things, non-standard thinking, analytical skills. My future is to be a leading expert in UX UI Design."],
        numberPhone = '+34 634 839 752',
        emailUser = 'info@smart-ui.pro',
        telegramUser = '@alexgashkov1',
        personalSkills1 = ['HTML5', 'CSS3', 'SCSS', 'Java Script', 'React.JS'],
        personalSkills2 = ['Typescript', 'Gatsby.JS', 'Graphql', 'Git', 'Next.JS', 'WorldPress'],
        personalSkills3 = ['Bootstrap', 'Tailwind', 'Webpack', 'Material-UI', 'Gulp', 'Redux', 'PHP', 'Node.JS'],
        personalSkills4 = ['Figma', 'Adobe Photoshop', 'WebStorm', 'Visual studio code'],
        personalSkills5 = ['Accessibility', 'Pagespeed optimization', 'Adobe XD'],
        personalSkills6 = ['Linux (Ubuntu)', 'Adobe Illustrator'],
        engLevel = 'A2',
        engLevelFull = 'Pre intermediate',
        ruLevel = 'B1',
        ruLevelFull = 'Intermediate',
        uaLevel = 'B2',
        uaLevelFull = 'Upper Intermediate',
        hardSkills = [{hardSkill: 'HTML5', percent: 90, years: 5},
                    {hardSkill: 'CSS3', percent: 90, years: 5},
                    {hardSkill: 'SCSS', percent: 90, years: 5},
                    {hardSkill: 'Java Script', percent: 80, years: 4},
                    {hardSkill: 'React.JS', percent: 60, years: 3},
                    {hardSkill: 'React.JS', percent: 90, years: 5},
                    {hardSkill: 'React.JS', percent: 40, years: 2},
                    {hardSkill: 'React.JS', percent: 90, years: 5}],
        experience = [{time: '2021-2022 1 year. 1m. ', work: 'UI UX designer', company: 'rocksolid'},
                    {time: '2020-21-1 year. 2022-8 months', work: 'ui ux designer', company: 'freelance'},
                    {time: '2022-2 month', work: 'Team Lead frontend developer', company: 'smart-ui'}];

    const listHardSkills = hardSkills?.map(({hardSkill, percent, years}) =>
        <li>
            <p>{hardSkill}</p>
            <div className="line-experience">
                <div className="line-skill" style={{width: `${percent}%`}}>
                    <span className="years">+{years}</span>
                </div>
            </div>
        </li>
    );

    const listExperience = experience?.map(({time, work, company}) =>
        <div className="wrap">
            <div className="company">
                <h4>{company}</h4>
                <p className="time">{time}</p>
            </div>
            <p className="work">
                {work}
            </p>
        </div>
    );

    const descriptions = description?.map((text) =>
        <p>{text}</p>
    );
    const listPersonalSkills1 = personalSkills1?.map((personalSkillItem) =>
        <li>{personalSkillItem}</li>
    );
    const listPersonalSkills2 = personalSkills2?.map((personalSkillItem) =>
        <li>{personalSkillItem}</li>
    );
    const listPersonalSkills3 = personalSkills3?.map((personalSkillItem) =>
        <li>{personalSkillItem}</li>
    );
    const listPersonalSkills4 = personalSkills4?.map((personalSkillItem) =>
        <li>{personalSkillItem}</li>
    );
    const listPersonalSkills5 = personalSkills5?.map((personalSkillItem) =>
        <li>{personalSkillItem}</li>
    );
    const listPersonalSkills6 = personalSkills6?.map((personalSkillItem) =>
        <li>{personalSkillItem}</li>
    );

    return <div className={style.cv}>

        {/*<CVPdf/>*/}
        <button className="button button__chat">
            <img src={chatIcon} alt="chatIcon"/>
        </button>
        <div className="container">
            <div className="hero">
                <div className="photo">
                    <picture>
                        <img src={photo} alt="photo"/>
                    </picture>
                    <button className="button">Chat</button>
                </div>
                <div className="description">
                    <div className="wrap-name">
                        <h1>
                            <span>{name} </span> {lastName}
                        </h1>
                        <p className="job">{job}</p>
                    </div>
                    <div className="content">{descriptions}</div>
                </div>
            </div>
            <div className="skills">
                <div className="skill">
                    <div className="skill__hard">
                        <div className="title">
                            <h3>Hard skills</h3>
                            <span>experiensce years +5</span>
                        </div>
                        <ul>
                            {listHardSkills}
                        </ul>
                    </div>
                    <div className="language">
                        <h3 className="title">language</h3>
                        <div className="wrap">
                            <div className="language__item">
                                <p className="language__name">
                                    English {engLevel}
                                </p>
                                <p>
                                    {engLevelFull}
                                </p>
                            </div>
                            <div className="language__item">
                                <p className="language__name">
                                    Ukrainian {uaLevel}
                                </p>
                                <p>
                                    {uaLevelFull}
                                </p>
                            </div>
                            <div className="language__item">
                                <p className="language__name">
                                    Russian {ruLevel}
                                </p>
                                <p>
                                    {ruLevelFull}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="skill">
                    <h3 className="title">PERSONAL SKILLS</h3>
                    <div className="wrap">
                        <div className="skill__list skill__main">
                            <h4>main</h4>
                            <ul>
                                {listPersonalSkills1}
                            </ul>
                            <ul>
                                {listPersonalSkills2}
                            </ul>
                            <ul>
                                {listPersonalSkills3}
                            </ul>
                        </div>
                        <div className="skill__list">
                            <h4>additional</h4>
                            <ul>
                                {listPersonalSkills4}
                            </ul>
                            <ul>
                                {listPersonalSkills5}
                            </ul>
                            <ul>
                                {listPersonalSkills6}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="skill experience">
                    <h3 className="title">EXPERIENCE</h3>
                    {listExperience}
                </div>
            </div>
            <div className="wrap__cv-button">
                <button className="button">Download CV</button>
            </div>
        </div>
    </div>


}
export default CV
