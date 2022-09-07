import * as React from "react"
import * as style from "./cv.module.scss";
import photoVictor from "./cvPdf/photo-victor.png";
import {CVPdfItem} from "./cvPdf/cvPdfItem";
import { PDFViewer } from '@react-pdf/renderer';


const CVPdf = ( ) => {

    return <div className={style.cv}>

        <PDFViewer className="wrap-pdf">
            <CVPdfItem infoPdf={{
                photoUser: photoVictor,
                name: 'Victor',
                lastName: 'moskalev',
                job: 'Front-End teAM LEAD',
                description: ["Hello,my name is Victor Moskalev. I`m front-end developer with 4  years experience. For 3 years I`ve studied html, css, js and wordpress. Last 1.5 years I`ve worked with  React , Next js and Gatsby.",
                            "I live in Kharkiv, but I worked and still working with pepole all around the world. Looking for an entry-level position at a great company to be a hard-working asset to any team, to learn, grow and develop long-term.",
                            "Take your time, check my resume, see my skills, some of my works, my experience and when you are ready drop me a message."],
                numberPhone: '+34 634 839 752',
                emailUser: 'info@smart-ui.pro',
                telegramUser: 'telegramUser',
                personalSkills1: ['HTML5', 'CSS3', 'SCSS', 'Java Script', 'React.JS'],
                personalSkills2: ['Typescript', 'Gatsby.JS', 'Graphql', 'Git', 'Next.JS', 'WorldPress'],
                personalSkills3: ['Bootstrap', 'Tailwind', 'Webpack', 'Material-UI', 'Gulp', 'Redux', 'PHP', 'Node.JS'],
                engLevel: 'A2',
                engLevelFull: 'Pre intermediate',
                ruLevel: 'B1',
                ruLevelFull: 'Intermediate',
                uaLevel: 'B2',
                uaLevelFull: 'Upper Intermediate',
                hardSkills: ['HTML5', 'CSS3', 'SCSS', 'Java Script', 'React.JS', 'React.JS', 'React.JS', 'React.JS'],
                experience: [{time: '2017', work: 'freelance', company: 'freelance'},
                            {time: '2020', work: 'Frontend developer', company: 'freelance'},
                            {time: '2021-22', work: 'Team Lead frontend developer', company: 'smart-ui'}],
            }}/>
        </PDFViewer>
    </div>
}
export default CVPdf
