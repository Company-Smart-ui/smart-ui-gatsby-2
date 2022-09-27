import React from "react";
import {
  Document,
  Font,
  Image,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";
import bgDesktop from "./background.png";
import bgFull from "./bg-full-green.png";
import mobile from "./mobile.png";
import email from "./success.png";
import telegram from "./telegram.png";
import logoSmartUI from "./logo-smart-ui.png";

import PoppinsLight from "./Poppins/Poppins-Light.ttf";
import PoppinsRegular from "./Poppins/Poppins-Regular.ttf";
import PoppinsSemiBold from "./Poppins/Poppins-SemiBold.ttf";

// Create styles
Font.register({
  family: "Poppins",
  fonts: [
    { src: PoppinsRegular },
    { src: PoppinsLight, fontWeight: 300 },
    { src: PoppinsSemiBold, fontWeight: 600 },
  ],
});

const styles = StyleSheet.create({
  body: {
    color: "white",
    position: "relative",
    flexDirection: "row",
    fontFamily: "Poppins",
    lineHeight: 1,
    fontSize: 8,
  },
  sectionRight: {
    width: "45%",
    paddingRight: 30,
    paddingTop: 0,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  sectionLeft: {
    width: "55%",
  },
  pageBackground: {
    position: "absolute",
    minWidth: "100%",
    display: "block",
    width: "100%",
    height: "100%",
  },
  logoSmartUI: {
    position: "absolute",
    bottom: 20,
    left: 30,
    width: 32,
    height: 34,
  },
  wrapTitle: {
    borderBottom: "1px solid #6A6A6A",
    marginBottom: 20,
  },
  title: {
    fontSize: 15,
    textTransform: "uppercase",
    fontWeight: "black",
    paddingBottom: 10,
  },
  lineTitle: {
    borderBottom: "1px solid #fff",
    width: 47,
    height: 1,
    marginBottom: -1,
  },
  contactText: {
    marginBottom: 4,
    textAlign: "justify",
  },
  image: {
    marginTop: 45,
    marginBottom: 60,
    marginLeft: 60,
    width: 200,
    height: 210,
  },
  photo: {
    marginTop: 55,
    marginBottom: 60,
    marginLeft: 83,
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
    height: 20,
    width: 22,
    marginTop: 5,
    marginRight: 13,
  },
  contact: {
    paddingLeft: 29,
    paddingRight: 22,
    maxWidth: 240,
    width: "100%",
    marginBottom: 50,
    fontSize: 10,
  },
  contactItem: {
    flexDirection: "row",
    borderBottom: "0.5px solid #909090",
    paddingBottom: 10,
    marginBottom: 7,
  },
  contactItemLast: {
    flexDirection: "row",
  },
  personalSkills: {
    paddingRight: 22,
    paddingLeft: 29,
  },
  titleList: {
    textTransform: "uppercase",
    width: 75,
    borderRight: "0.5px solid #AEAEAE",
    marginRight: 10,
    paddingRight: 10,
  },
  blockList: {
    flexDirection: "row",
  },
  wrapList: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottom: "0.5px solid #AEAEAE",
    width: "100%",
    flexWrap: "wrap",
    paddingBottom: 10,
    marginBottom: 10,
  },
  wrapListLast: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    width: "100%",
  },
  wrapTopBlock: {
    marginBottom: 30,
  },
  topBlock: {
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
    marginBottom: 10,
    lineHeight: "1.3",
    fontWeight: 400,
  },
  wrapSkills: {
    marginBottom: 25,
    paddingLeft: 22,
  },
  experienceItem: {
    flexDirection: "row",
    textTransform: "uppercase",
  },
  experienceLeft: {
    width: "50%",
    borderRight: "0.5px solid #6A6A6A",
    marginRight: 10,
  },
  experienceRight: {
    width: "50%",
    marginBottom: 12,
    paddingBottom: 10,
    borderBottom: "0.5px solid #6A6A6A",
  },
  experienceRightLast: {
    width: "100%",
  },
  hardSkillsList: {
    lineHeight: "1.5",
  },
  languageItem: {
    width: "30%",
    maxWidth: 55,
    marginBottom: 10,
  },
  languageName: {
    marginBottom: 5,
    fontWeight: "demibold",
  },
});

// Create Document Component
export function CVPdfItem(props) {
  const {
    userDescription,
    personalSkillTitle,
    personalSkill,
    mainTitle,
    additionalTitle,
    photoUser,
    numberPhone,
    emailUser,
    telegramUser,
    userName,
    userDirection,
    experienceTitle,
    experience,
    experiensceYearsTitle,
    experiensceYears,
    hardSkillTitle,
    hardSkill,
    languageTitle,
    englishTitle,
    otherLanguage,
    englishLevel,
  } = props.infoPdf;

  const name = userName.split(" ");

  return (
    <Document>
      <Page size="A4" style={styles.body}>
        <Image src={bgFull} style={styles.pageBackground} fixed />
        <View style={styles.sectionLeft}>
          <Image src={bgDesktop} style={styles.pageBackground} />
          <Image src={photoUser} style={styles.photo} />

          {/* contact */}
          <View style={styles.contact}>
            {numberPhone && (
              <View
                style={
                  telegramUser || emailUser
                    ? styles.contactItem
                    : styles.contactItemLast
                }
              >
                <Image src={mobile} style={styles.iconMobile} />
                <div>
                  <Text style={styles.contactText}>Phone</Text>
                  <Text style={styles.contactText}>{numberPhone}</Text>
                </div>
              </View>
            )}

            {emailUser && (
              <View
                style={
                  telegramUser ? styles.contactItem : styles.contactItemLast
                }
              >
                <Image src={email} style={styles.iconEmail} />
                <div>
                  <Text style={styles.contactText}>Email</Text>
                  <Text style={styles.contactText}>{emailUser}</Text>
                </div>
              </View>
            )}

            {telegramUser && (
              <View style={styles.contactItemLast}>
                <Image src={telegram} style={styles.iconTelegram} />
                <div>
                  <Text style={styles.contactText}>Telegram</Text>
                  <Text style={styles.contactText}>{telegramUser}</Text>
                </div>
              </View>
            )}
          </View>

          {/* PERSONAL SKILLS */}
          {personalSkill && (
            <View style={styles.personalSkills}>
              <Text
                style={[styles.title, { borderBottom: 0, marginBottom: 15 }]}
              >
                {personalSkillTitle}
              </Text>
              <View style={styles.blockList}>
                <Text style={styles.titleList}>{mainTitle}</Text>
                <View style={styles.wrapList}>
                  {personalSkill?.main?.map((i) => {
                    return (
                      <View style={{ width: "30%" }}>
                        <Text style={{ marginBottom: 1, lineHeight: "1.3" }}>
                          {i.text.trim()}
                        </Text>
                      </View>
                    );
                  })}
                </View>
              </View>
              <View style={styles.blockList}>
                <Text style={styles.titleList}>{additionalTitle}</Text>
                <View style={styles.wrapListLast}>
                  {personalSkill?.additional?.map((i) => {
                    return (
                      <View style={{ width: "30%" }}>
                        <Text style={{ marginBottom: 1, lineHeight: "1.3" }}>
                          {i.text.trim()}
                        </Text>
                      </View>
                    );
                  })}
                </View>
              </View>
            </View>
          )}
        </View>

        <View style={styles.sectionRight}>
          <View style={styles.wrapTopBlock}>
            <View style={styles.topBlock}>
              <Text style={styles.name}>{name[0]} </Text>
              <Text style={styles.lastName}>{name[1]} </Text>
              <Text style={styles.job}>{userDirection}</Text>
            </View>
            <Text style={styles.description}>{userDescription}</Text>
          </View>
          <View style={styles.sectionRightBottom}>
            {/* EXPERIENCE */}
            {experience.length > 0 && (
              <View style={styles.wrapSkills}>
                <View style={styles.wrapTitle}>
                  <Text style={styles.title}>{experienceTitle}</Text>
                  <View style={styles.lineTitle}></View>
                </View>
                {experience?.map((i) => {
                  return (
                    <View style={styles.experienceItem}>
                      <View style={styles.experienceLeft}>
                        <Text style={{ fontWeight: "black", marginBottom: 2 }}>
                          {i.company}
                        </Text>
                        <Text style={{ fontWeight: "thin" }}>{i.year}</Text>
                      </View>
                      <Text style={styles.experienceRight}>{i.position}</Text>
                    </View>
                  );
                })}
              </View>
            )}

            {/* Hard skills */}
            {hardSkill && (
              <View style={styles.wrapSkills}>
                <View style={styles.wrapTitle}>
                  <View
                    style={[
                      styles.title,
                      {
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                      },
                    ]}
                  >
                    <Text>{hardSkillTitle}</Text>
                    <Text
                      style={{
                        fontSize: 8,
                        textTransform: "lowercase",
                        fontWeight: "normal",
                      }}
                    >
                      {experiensceYearsTitle} {experiensceYears}+
                    </Text>
                  </View>
                  <View style={styles.lineTitle}></View>
                </View>
                <View style={styles.hardSkillsList}>
                  {hardSkill?.map((i) => {
                    const percent =
                      (i.experiensce_years / experiensceYears) * 100;
                    return (
                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          marginBottom: 4,
                        }}
                      >
                        <Text style={{ width: "65%" }}>{i.text}</Text>
                        <View
                          style={{
                            width: "35%",
                            backgroundColor: "white",
                            height: 4,
                            borderRadius: "50%",
                            overflow: "hidden",
                          }}
                        >
                          <Text
                            style={{
                              width: `${percent}%`,
                              backgroundColor: "#10BE43",
                              height: 4,
                              borderRadius: "50%",
                            }}
                          ></Text>
                        </View>
                      </View>
                    );
                  })}
                </View>
              </View>
            )}

            {/* language */}
            <View style={styles.wrapSkills}>
              <View style={styles.wrapTitle}>
                <Text style={styles.title}>{languageTitle}</Text>
                <View style={styles.lineTitle}></View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                }}
              >
                <View style={styles.languageItem}>
                  <Text style={styles.languageName}>{englishTitle}</Text>
                  <Text style={{ lineHeight: "1.3", fontWeight: 300 }}>
                    {englishLevel}
                  </Text>
                </View>
                {otherLanguage &&
                  otherLanguage?.map((i) => {
                    return (
                      <View style={styles.languageItem}>
                        <Text style={styles.languageName}>{i.text}</Text>
                        <Text style={{ lineHeight: "1.3", fontWeight: 300 }}>
                          {i.level}
                        </Text>
                      </View>
                    );
                  })}
              </View>
            </View>
          </View>
        </View>
        <Image src={logoSmartUI} style={styles.logoSmartUI} fixed />
      </Page>
    </Document>
  );
}
