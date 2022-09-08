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
export function CVPdfItem({infoPdf}){
    const {photoUser, name, lastName, job, description, numberPhone, emailUser, telegramUser, personalSkills1, personalSkills2, personalSkills3, personalSkills4, personalSkills5, personalSkills6, experience, hardSkills, engLevel, ruLevel, uaLevel, engLevelFull, ruLevelFull, uaLevelFull} = infoPdf;
    const listHardSkills = hardSkills?.map(({hardSkill, percent}) =>
        <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 4}}>
            <Text style={{width: '60%'}}>{hardSkill}</Text>
            <View style={{width: '40%', backgroundColor: 'white', height: 3, borderRadius: '50%', overflow: 'hidden' }}>
                <Text style={{width: `${percent}%`, backgroundColor: '#10BE43', height: 3, borderRadius: '50%'}}></Text>
            </View>
        </View>
    );

    const listExperience = experience?.map(({time, work, company}) =>
        <View style={styles.experienceItem}>
            <View style={styles.experienceLeft}>
                <Text style={{ fontWeight: 'black', marginBottom: 2}}>{company}</Text>
                <Text style={{ fontWeight: 'thin' }}>{time}</Text>
            </View>
            <Text style={styles.experienceRight}>
                {work}
            </Text>
        </View>
    );

    const descriptions = description?.map((text) =>
        <Text style={styles.description}>{text}</Text>
    );
    const listPersonalSkills1 = personalSkills1?.map((personalSkillItem) =>
        <Text style={{marginBottom: 2}}>{personalSkillItem}</Text>
    );
    const listPersonalSkills2 = personalSkills2?.map((personalSkillItem) =>
        <Text style={{marginBottom: 2}}>{personalSkillItem}</Text>
    );
    const listPersonalSkills3 = personalSkills3?.map((personalSkillItem) =>
        <Text style={{marginBottom: 2}}>{personalSkillItem}</Text>
    );
    const listPersonalSkills4 = personalSkills4?.map((personalSkillItem) =>
        <Text style={{marginBottom: 2}}>{personalSkillItem}</Text>
    );
    const listPersonalSkills5 = personalSkills5?.map((personalSkillItem) =>
        <Text style={{marginBottom: 2}}>{personalSkillItem}</Text>
    );
    const listPersonalSkills6 = personalSkills6?.map((personalSkillItem) =>
        <Text style={{marginBottom: 2}}>{personalSkillItem}</Text>
    );


    return <Document>
        <Page size="A4" style={styles.body}>
            <Image src={bgFull} style={styles.pageBackground} fixed/>
            <View style={styles.sectionLeft}>
                <Image src={bgDesktop} style={styles.pageBackground} />
                <Image src={photoUser} style={styles.photo} />

                {/* contact */}
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
                            <View style={{width: '30%'}}>
                                {listPersonalSkills1}
                            </View>
                            <View style={{width: '30%'}}>
                                {listPersonalSkills2}
                            </View>
                            <View style={{width: '30%'}}>
                                {listPersonalSkills3}
                            </View>
                        </View>
                    </View>
                    <View style={styles.blockList}>
                        <Text style={styles.titleList}>additional</Text>
                        <View style={styles.wrapListLast}>
                            <View style={{width: '30%'}}>
                                {listPersonalSkills4}
                            </View>
                            <View style={{width: '30%'}}>
                                {listPersonalSkills5}
                            </View>
                            <View style={{width: '30%'}}>
                                {listPersonalSkills6}
                            </View>
                        </View>
                    </View>
                </View>
            </View>

            <View style={styles.sectionRight}>
                <View style={styles.wrapTopBlock}>
                    <View style={styles.topBlock}>
                        <Text style={styles.name}>{name} </Text>
                        <Text style={styles.lastName}>{lastName} </Text>
                        <Text style={styles.job}>{job}</Text>
                    </View>
                    {descriptions}
                </View>

                {/* EXPERIENCE */}
                <View style={styles.wrapSkills}>
                    <Text style={styles.title}>
                        EXPERIENCE
                    </Text>
                    {listExperience}
                </View>

                {/* Hard skills */}
                <View style={styles.wrapSkills}>
                    <View style={[styles.title, {flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}]}>
                        <Text>Hard skills</Text>
                        <Text style={{fontSize: 8, textTransform: 'lowercase', fontWeight: 'normal'}}>experience years +5</Text>
                    </View>
                    <View style={styles.hardSkillsList}>
                        {listHardSkills}
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
                                English {engLevel}
                            </Text>
                            <Text>
                                {engLevelFull}
                            </Text>
                        </View>
                        <View style={styles.languageItem}>
                            <Text style={styles.languageName}>
                                Russian {ruLevel}
                            </Text>
                            <Text>
                                {ruLevelFull}
                            </Text>
                        </View>
                        <View style={styles.languageItem}>
                            <Text style={styles.languageName}>
                                Ukrainian {uaLevel}
                            </Text>
                            <Text>
                                {uaLevelFull}
                            </Text>
                        </View>
                    </View>
                </View>
           </View>
           <Image src={logoSmartUI} style={styles.logoSmartUI} fixed/>
        </Page>
    </Document>
}