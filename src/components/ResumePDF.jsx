import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFDownloadLink,
  Image,
} from "@react-pdf/renderer";
import resumeData from "../data/resumeData";
import profilePic from "../assets/profile.png";

const mmToPt = (mm) => mm * 2.83465;

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    width: mmToPt(230),
    backgroundColor: "#ffffff",
    padding: 20,
    position: "relative",
  },
  leftCol: {
    flex: 0.32,
    flexDirection: "column",
    alignItems: "center",
    fontSize: 16,
    paddingRight: 7,
  },
  rightCol: {
    flex: 0.68,
    flexDirection: "column",
    fontSize: 3,
    marginTop: 1,
  },
  profileImg: {
    width: mmToPt(52),
    height: mmToPt(52),
    borderRadius: mmToPt(26),
    borderWidth: 2,
    borderColor: "#e5e7eb",
    objectFit: "cover",
    marginTop: 28,
    marginBottom: 8,
  },
  sectionContainer: {
    marginBottom: 14,
    width: "100%",
  },
  sectionTitle: {
    fontWeight: 500,
    fontSize: 14,
    color: "#1e2939",
    marginTop: 17,
    marginBottom: 6,
  },
  sectionTitleRight: {
    fontWeight: 600,
    fontSize: 15,
    color: "#1e2939",
    marginTop: 10,
    marginBottom: 6,
  },
  bold: {
    fontWeight: "bold",
    fontSize: 8,
    color: "#1e2939",
    marginBottom: 2,
  },
  textSmall: {
    fontSize: 8,
    color: "#1e2939",
    marginBottom: 2,
  },
  textMedium: {
    fontSize: 9,
    color: "#1e2939",
    marginBottom: 2,
  },
  bullet: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 2,
  },
  bulletCircle: {
    width: 4,
    height: 4,
    borderRadius: 2.5,
    backgroundColor: "#ec4899",
    marginRight: 6,
    marginTop: 4,
  },
  timelineLine: {
    width: 1,
    backgroundColor: "#ec4899",
    position: "absolute",
    left: 7,
    top: 38,
    bottom: 0,
  },
  timelineDot: {
    width: 14,
    height: 14,
    borderRadius: 7,
    borderWidth: 2,
    borderColor: "#ec4899",
    backgroundColor: "#ffffff",
    position: "absolute",
    left: 0,
  },
  headerName: {
    fontSize: 35,
    fontWeight: 700,
    color: "#1e2939",
    textTransform: "uppercase",
  },
  headerTitle: {
    fontSize: 14,
    fontWeight: 500,
    fontStyle: "italic",
    color: "#1e2939",
    marginBottom: 6,
  },
  summary: {
    fontSize: 10,
    color: "#1e2939",
    marginBottom: 10,
  },
  link: {
    color: "#155dfc",
    fontSize: 9,
    textDecoration: "underline",
  },
  experienceRole: {
    fontWeight: 600,
    fontSize: 11,
    color: "#1e2939",
    letterSpacing: 0.3,
  },
  experienceOrg: {
    fontSize: 9,
    color: "#6b7280",
    fontWeight: 500,
    marginTop: 2,
    marginBottom: 2,
  },
  languageLevelContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 2,
  },
  languageLevelDot: {
    width: 7,
    height: 7,
    borderRadius: 3.5,
    borderWidth: 1,
    borderColor: "#1e2939",
    alignItems: "center",
    justifyContent: "center",
  },
  languageLevelDotActive: {
    width: 5,
    height: 5,
    borderRadius: 2.5,
    backgroundColor: "#ec4899",
  },
  languageLevelText: {
    fontSize: 8,
    color: "#1e2939",
    marginLeft: 2,
  },
  certificateTitle: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#1e2939",
  },
  certificateCode: {
    fontSize: 8,
    color: "#9ca3af",
    marginTop: 2,
  },
  hobbyItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
});

const ResumePDFDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>

      {/* LEFT COLUMN */}
      <View style={styles.leftCol}>
        <Image src={profilePic} style={styles.profileImg} />

        {/* CONTACT */}
        {resumeData.personal && (
          <View style={styles.sectionContainer} wrap={false}>
            <Text style={styles.sectionTitle}>CONTACT</Text>
            {resumeData.personal.phone && <Text style={styles.textSmall}>{resumeData.personal.phone}</Text>}
            {resumeData.personal.email && <Text style={styles.textSmall}>{resumeData.personal.email}</Text>}
            {resumeData.personal.linkedin && <Text style={styles.textSmall}>{resumeData.personal.linkedin}</Text>}
            {resumeData.personal.location && <Text style={styles.textSmall}>{resumeData.personal.location}</Text>}
            {resumeData.personal.dob && <Text style={styles.textSmall}>{resumeData.personal.dob}</Text>}
            {resumeData.personal.nationality && <Text style={styles.textSmall}>{resumeData.personal.nationality}</Text>}
            {resumeData.personal.maritalStatus && <Text style={styles.textSmall}>{resumeData.personal.maritalStatus}</Text>}
          </View>
        )}

        {/* PORTFOLIO */}
        {resumeData.personal?.website && (
          <View style={styles.sectionContainer} wrap={false}>
            <Text style={styles.sectionTitle}>PORTFOLIO - WEBSITE LINK</Text>
            <Text style={styles.link}>{resumeData.personal.website}</Text>
          </View>
        )}

        {/* EDUCATION */}
        {resumeData.education?.length > 0 && (
          <View style={styles.sectionContainer} wrap={false}>
            <Text style={styles.sectionTitle}>EDUCATION</Text>
            {resumeData.education.map((edu, i) => (
              <View key={i} style={{ marginBottom: 4 }} wrap={false}>
                <Text style={styles.bold}>{edu.degree}</Text>
                <Text style={styles.textSmall}>{edu.institution}</Text>
                <Text style={styles.textSmall}>{edu.country}</Text>
                <Text style={{ fontSize: 9, color: "#6b7280" }}>{edu.year}</Text>
              </View>
            ))}
          </View>
        )}

        {/* CORE SKILLS */}
        {resumeData.skills?.length > 0 && (
          <View style={styles.sectionContainer} wrap={false}>
            <Text style={styles.sectionTitle}>CORE SKILLS</Text>
            {resumeData.skills.map((s, i) => (
              <View style={styles.bullet} key={i} wrap={false}>
                <View style={styles.bulletCircle} />
                <Text style={styles.textSmall}>{s}</Text>
              </View>
            ))}
          </View>
        )}

        {/* AWARDS */}
        {resumeData.awards?.length > 0 && (
          <View style={styles.sectionContainer} wrap={false}>
            <Text style={styles.sectionTitle}>AWARDS & ACHIEVEMENTS</Text>
            {resumeData.awards.map((a, i) => (
              <View style={styles.bullet} key={i} wrap={false}>
                <View style={styles.bulletCircle} />
                <Text style={styles.textSmall}>{a}</Text>
              </View>
            ))}
          </View>
        )}

        {/* LANGUAGES */}
        {resumeData.languages?.length > 0 && (
          <View style={styles.sectionContainer} wrap={false}>
            <Text style={styles.sectionTitle}>LANGUAGES</Text>
            {resumeData.languages.map((l, i) => (
              <View key={i} style={{ marginBottom: 4 }} wrap={false}>
                <Text style={styles.bold}>{l.name}</Text>
                <View style={styles.languageLevelContainer}>
                  {["Beginner", "Intermediate", "Fluent"].map((level) => (
                    <View key={level} style={{ flexDirection: "row", alignItems: "center", marginRight: 6 }}>
                      <View style={styles.languageLevelDot}>
                        {l.level === level && <View style={styles.languageLevelDotActive} />}
                      </View>
                      <Text style={styles.languageLevelText}>{level}</Text>
                    </View>
                  ))}
                </View>
              </View>
            ))}
          </View>
        )}
        {/* TOOLS */}
        {resumeData.tools?.length > 0 && (
          <View style={styles.sectionContainer} wrap={false}>
            <Text style={styles.sectionTitle}>TOOLS & SOFTWARE</Text>
            {resumeData.tools.map((t, i) => (
              <View style={styles.bullet} key={i} wrap={false}>
                <View style={styles.bulletCircle} />
                <Text style={styles.textSmall}>{t}</Text>
              </View>
            ))}
          </View>
        )}

        {/* DEVELOPMENT */}
        {resumeData.development?.length > 0 && (
          <View style={styles.sectionContainer} wrap={false}>
            <Text style={styles.sectionTitle}>PROFESSIONAL{"\n"}DEVELOPMENT</Text>
            {resumeData.development.map((d, i) => (
              <View style={styles.bullet} key={i} wrap={false}>
                <View style={styles.bulletCircle} />
                <Text style={styles.textSmall}>{d}</Text>
              </View>
            ))}
          </View>
        )}

        {/* CERTIFICATES */}
        {resumeData.certificates?.length > 0 && (
          <View style={styles.sectionContainer} wrap={false}>
            <Text style={styles.sectionTitle}>CERTIFICATES</Text>
            {resumeData.certificates.map((c, i) => (
              <View key={i} style={{ marginBottom: 4 }} wrap={false}>
                <Text style={styles.certificateTitle}>
                  {c.title} — {c.org} ({c.year})
                </Text>
                {c.link && <Text style={styles.link}>{c.link}</Text>}
                <Text style={styles.certificateCode}>{c.code}</Text>
              </View>
            ))}
          </View>
        )}

        {/* HOBBIES */}
        {resumeData.hobbies?.length > 0 && (
          <View style={styles.sectionContainer} wrap={false}>
            <Text style={styles.sectionTitle}>HOBBIES</Text>
            {resumeData.hobbies.map((hobby, i) => (
              <View style={styles.hobbyItem} key={i} wrap={false}>
                <Text style={styles.textSmall}>{hobby}</Text>
              </View>
            ))}
          </View>
        )}

      </View>

      {/* RIGHT COLUMN */}
      <View style={styles.rightCol}>
        <Text style={styles.headerName}>{resumeData.personal?.name.toUpperCase()}</Text>
        <Text style={styles.headerTitle}>{resumeData.personal?.title}</Text>
        {resumeData.summary && <Text style={styles.summary}>{resumeData.summary}</Text>}

        <Text style={styles.sectionTitleRight}>PROFESSIONAL EXPERIENCE</Text>
        <View style={{ position: "relative", marginBottom: 16 }}>
          <View style={{
            width: 1,
            backgroundColor: "#ec4899",
            position: "absolute",
            left: 9,
            top: 7,
            bottom: 0,
          }} />

          {[...(resumeData.experience || []), ...(resumeData.internships || [])].map((item, i) => (
            <View key={i} wrap={false} style={{ flexDirection: "row", marginBottom: 12, position: "relative" }}>
              <View style={{ width: 20, alignItems: "center", position: "relative" }}>
                <View style={{
                  width: 14,
                  height: 14,
                  borderRadius: 7,
                  borderWidth: 2,
                  borderColor: "#ec4899",
                  backgroundColor: "#ffffff",
                  position: "absolute",
                  top: 0,
                  left: 3,
                }} />
              </View>

              <View style={{ flex: 1, paddingLeft: 10 }}>
                <Text style={styles.experienceRole}>{item.role}</Text>
                <Text style={styles.experienceOrg}>{item.org} • {item.date}</Text>

                {item.bullets?.map((b, ii) => (
                  <View key={ii} style={styles.bullet}>
                    <View style={styles.bulletCircle} />
                    <Text style={styles.textSmall}>{b}</Text>
                  </View>
                ))}
              </View>
            </View>
          ))}
        </View>
      </View>

    </Page>
  </Document>
);

export const ResumePDFDownload = () => {
  const buttonStyle = {
    backgroundColor: "#db2777",
    color: "#ffffff",
    padding: "11px 22px",
    borderRadius: 2,
    textAlign: "center",
    fontWeight: 600,
    fontSize: 14,
    cursor: "pointer",
    textDecoration: "none",
    display: "inline-block",
    transition: "background-color 0.2s ease",
    marginBottom: 10,
    marginLeft: "44%",
  };

  const hoverStyle = { backgroundColor: "#ed64a6" };

  return (
    <PDFDownloadLink
      document={<ResumePDFDocument />}
      fileName={`${resumeData.personal.name.replace(/\s+/g, "_")}_CV.pdf`}
      style={buttonStyle}
      onMouseEnter={(e) => (e.target.style.backgroundColor = hoverStyle.backgroundColor)}
      onMouseLeave={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
    >
      {({ loading }) => (loading ? "Loading document..." : "Download PDF")}
    </PDFDownloadLink>
  );
};

export default ResumePDFDocument;
