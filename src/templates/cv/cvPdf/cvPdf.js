import React from 'react';
import {Page, Text, Image, Document, StyleSheet, Font, View} from '@react-pdf/renderer';
import bgDesktop from "./background.png"
import bgFull from "./bg-full-green.png"
import mobile from "./mobile.png";
import email from "./success.png";
import telegram from "./telegram.png";
import logoSmartUI from "./logo-smart-ui.png";

import PoppinsLight from './Poppins/Poppins-Light.ttf';
import PoppinsRegular from './Poppins/Poppins-Regular.ttf';
import PoppinsSemiBold from './Poppins/Poppins-SemiBold.ttf';

// Create styles
Font.register({ family: 'Poppins', fonts: [
        { src: PoppinsRegular },
        { src: PoppinsLight, fontWeight: 300 },
        { src: PoppinsSemiBold, fontWeight: 600 },
    ]});

const styles = StyleSheet.create({
    body: {
        color: "white",
        position: 'relative',
        flexDirection: 'row',
        fontFamily: "Poppins",
        lineHeight: 1,
        fontSize: 8,
    },
    sectionRight: {
        width: '45%',
        paddingRight: 30,
    },
    sectionLeft:{
        width: '55%',

    },
    pageBackground: {
        position: 'absolute',
        minWidth: '100%',
        display: 'block',
        width: '100%',
        height: '100%',
    },
    logoSmartUI: {
        position: 'absolute',
        bottom: 20,
        left: 30,
        width: 32,
        height: 34,
    },
    title: {
        fontSize: 15,
        textTransform: "uppercase",
        fontWeight: "black",
        paddingBottom: 10,
        marginBottom: 20,
        borderBottom: "1px solid #AEAEAE"
    },
    contactText: {
        marginBottom: 4,
        textAlign: 'justify',
    },
    image: {
        marginTop: 45,
        marginBottom: 60,
        marginLeft: 60,
        width: 200,
        height: 210,
    },
    photo: {
        marginTop: 50,
        marginBottom: 60,
        marginLeft: 70,
        width: 210,
        height: 230,
    },
    iconMobile: {
        height: 27,
        width: 15,
        marginRight: 16,
        marginLeft: 5,
    },
    iconEmail: {
        height: 23,
        width: 26,
        marginRight: 11,
    },
    iconTelegram: {
        height: 22,
        width: 22,
        marginRight: 13,
    },
    contact: {
        paddingHorizontal: 30,
        maxWidth: 190,
        marginBottom: 50,
    },
    contactItem:{
        flexDirection: 'row',
        borderBottom: '1px solid #AEAEAE',
        paddingBottom: 13,
        marginBottom: 10,
    },
    contactItemLast:{
        flexDirection: 'row',
    },
    personalSkills: {
        paddingHorizontal: 30,
    },
    titleList: {
        textTransform: 'uppercase',
        width: 75,
        borderRight: '0.5px solid #AEAEAE',
        marginRight: 10,
        paddingRight: 10,
    },
    blockList: {
        flexDirection: 'row',
    },
    wrapList: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottom: '0.5px solid #AEAEAE',
        width: '100%',
        paddingBottom: 10,
        marginBottom: 10,
    },
    wrapListLast: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: "wrap",
        width: '100%',
    },
    wrapTopBlock: {
        marginBottom: 35,
    },
    topBlock: {
        marginTop: 45,
        marginBottom: 20,
        textTransform: "uppercase",
    },
    name: {
        fontSize: 35,
        fontWeight: "black",
    },
    lastName: {
        fontSize: 40,
        marginBottom: 10,
        fontWeight: "black",
        color: "#10BE43",
    },
    job: {
        fontSize: 20,
    },
    description: {
        marginBottom: 13,
        lineHeight: '1.2',
        fontWeight: 100
    },
    wrapSkills: {
        marginBottom: 27,
        paddingLeft: 25,
    },
    experienceItem: {
        flexDirection: 'row',
        textTransform: "uppercase",
    },
    experienceLeft:{
        width: 90,
        borderRight: '0.5px solid #AEAEAE',
        marginRight: 10,
    },
    experienceRight:{
        width: '100%',
        marginBottom: 12,
        paddingBottom: 10,
        borderBottom: '0.5px solid #AEAEAE',
    },
    experienceRightLast:{
        width: '100%',
    },
    hardSkillsList: {
        lineHeight: '1.5',
    },
    languageItem:{
        width: '30%',
        maxWidth: 55,
    },
    languageName:{
        marginBottom: 5,
        fontWeight: "demibold",
    },
});

// Create Document Component
export function MyDocument({infoPdf}){
const {numberPhone, emailUser, telegramUser, photoUser} = infoPdf;
    return <Document>
        <Page size="A4" style={styles.body}>
            <Image src={bgFull} style={styles.pageBackground} fixed/>
            <View style={styles.sectionLeft}>
                <Image src={bgDesktop} style={styles.pageBackground} />
                <Image src={photoUser} style={styles.photo} />
                <View style={styles.contact}>
                    <View style={styles.contactItem}>
                        <Image src={mobile} style={styles.iconMobile} />
                        <div>
                            <Text style={styles.contactText}>
                                Phone
                            </Text>
                            <Text style={styles.contactText}>
                                {numberPhone}
                            </Text>
                        </div>
                    </View>
                    <View style={styles.contactItem}>
                        <Image src={email} style={styles.iconEmail} />
                        <div>
                            <Text style={styles.contactText}>
                                Email
                            </Text>
                            <Text style={styles.contactText}>
                                {emailUser}
                            </Text>
                        </div>
                    </View>
                    <View style={styles.contactItemLast}>
                        <Image src={telegram} style={styles.iconTelegram} />
                        <div>
                            <Text style={styles.contactText}>
                                Telegram
                            </Text>
                            <Text style={styles.contactText}>
                                {telegramUser}
                            </Text>
                        </div>
                    </View>
                </View>
                {/* PERSONAL SKILLS */}
                <View style={styles.personalSkills}>
                    <Text style={[styles.title, {borderBottom: 0}]}>
                        PERSONAL SKILLS
                    </Text>
                    <View style={styles.blockList}>
                        <Text style={styles.titleList}>main</Text>
                        <View style={styles.wrapList}>
                            <View>
                                <Text>HTML5</Text>
                                <Text>CSS3</Text>
                                <Text>SCSS</Text>
                                <Text>Java Script</Text>
                                <Text>React.JS</Text>
                            </View>
                            <View>
                                <Text>Typescript</Text>
                                <Text>Gatsby.JS</Text>
                                <Text>Graphql</Text>
                                <Text>Git</Text>
                                <Text>Next.JS</Text>
                                <Text>WorldPress</Text>
                            </View>
                            <View>
                                <Text>Bootstrap</Text>
                                <Text>Tailwind</Text>
                                <Text>Webpack</Text>
                                <Text>Material-UI</Text>
                                <Text>Gulp</Text>
                                <Text>Redux</Text>
                                <Text>PHP</Text>
                                <Text>Node.JS</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.blockList}>
                        <Text style={styles.titleList}>additional</Text>
                        <View style={styles.wrapListLast}>
                            <View>
                                <Text>Figma</Text>
                                <Text>Adobe Photoshop</Text>
                                <Text>WebStorm</Text>
                                <Text>Visual studio code</Text>
                            </View>
                            <View>
                                <Text>Accessibility</Text>
                                <Text>Pagespeed optimization</Text>
                                <Text>Adobe XD</Text>
                            </View>
                            <View>
                                <Text>Linux (Ubuntu)</Text>
                                <Text>Adobe Illustrator</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>

            <View style={styles.sectionRight}>
                <View style={styles.wrapTopBlock}>
                    <View style={styles.topBlock}>
                        <Text style={styles.name}>victor </Text>
                        <Text style={styles.lastName}>moskalev </Text>
                        <Text style={styles.job}>Front-End teAM LEAD</Text>
                    </View>
                    <Text style={styles.description}>
                        Hello,my name is Victor Moskalev. I`m front-end developer with 4  years experience. For 3 years I`ve studied html, css, js and wordpress. Last 1.5 years I`ve worked with  React , Next js and Gatsby.
                    </Text>
                    <Text style={styles.description}>
                        I live in Kharkiv, but I worked and still working with pepole all around the world. Looking for an entry-level position at a great company to be a hard-working asset to any team, to learn, grow and develop long-term.
                    </Text>
                    <Text style={styles.description}>
                        Take your time, check my resume, see my skills, some of my works, my experience and when you are ready drop me a message.
                    </Text>
                </View>
                {/* EXPERIENCE */}
                <View style={styles.wrapSkills}>
                    <Text style={styles.title}>
                        EXPERIENCE
                    </Text>
                    <View style={styles.experienceItem}>
                        <View style={styles.experienceLeft}>
                            <Text style={{ fontWeight: 'black', marginBottom: 2}}>freelance</Text>
                            <Text style={{ fontWeight: 'thin' }}>2017</Text>
                        </View>
                        <Text style={styles.experienceRight}>
                            freelance
                        </Text>
                    </View>
                    <View style={styles.experienceItem}>
                        <View style={styles.experienceLeft}>
                            <Text style={{ fontWeight: 'black', marginBottom: 2}}>freelance</Text>
                            <Text style={{ fontWeight: 'thin' }}>2020</Text>
                        </View>
                        <Text style={styles.experienceRight}>
                            Frontend developer
                        </Text>
                    </View>
                    <View style={styles.experienceItem}>
                        <View style={styles.experienceLeft}>
                            <Text style={{ fontWeight: 'black', marginBottom: 2}}>smart-ui</Text>
                            <Text style={{ fontWeight: 'thin' }}>2021-22</Text>
                        </View>
                        <Text style={styles.experienceRightLast}>
                            Team Lead frontend developer
                        </Text>
                    </View>
                </View>
                {/* Hard skills */}
                <View style={styles.wrapSkills}>
                    <Text style={styles.title}>
                        Hard skills
                    </Text>
                    <View style={styles.hardSkillsList}>
                        <Text>HTML5</Text>
                        <Text>CSS3</Text>
                        <Text>SCSS</Text>
                        <Text>Java Script</Text>
                        <Text>React.JS</Text>
                        <Text>React.JS</Text>
                        <Text>React.JS</Text>
                        <Text>React.JS</Text>
                    </View>
                </View>
                {/* language */}
                <View style={styles.wrapSkills}>
                    <Text style={styles.title}>
                        language
                    </Text>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View style={styles.languageItem}>
                            <Text style={styles.languageName}>
                                English A2
                            </Text>
                            <Text>
                                Pre intermediate
                            </Text>
                        </View>
                        <View style={styles.languageItem}>
                            <Text style={styles.languageName}>
                                Russian B1
                            </Text>
                            <Text>
                                Intermediate
                            </Text>
                        </View>
                        <View style={styles.languageItem}>
                            <Text style={styles.languageName}>
                                Ukrainian B2
                            </Text>
                            <Text>
                                Upper Intermediate
                            </Text>
                        </View>
                    </View>
                </View>
           </View>
           <Image src={logoSmartUI} style={styles.logoSmartUI} fixed/>
        </Page>
    </Document>
}