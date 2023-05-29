/* eslint-disable @next/next/no-img-element */
import { Fragment, useState } from "react";
import AnimatedText from "./AnimatedText";
import AboutPopup from "./popup/AboutPopup";

const aboutData = {
  firstName: "Naufal",
  lastName: "Halim",
  major: "Information Engineering",
  university: "Gadjah Mada University",
  address: "Pogung Baru, DIY",
  phn: "+62 851 5733 7430",
  email: "naufalhalim46",
  serviceLists: [
    "Python for Data Analytics and Engineering",
    "Data Visualization for Storytelling",
    "Python for Machine Learning Model",
    "Python for Object Detection Model",
    "React Js and Next Js for Website Development",
    "Wordpress for Content Management System",
  ],
  creativeLists: [
    "Photography",
    "Creative Content Writing",
    "Content Scripting for Video",
    "Python for Object Detection Model",
    "Davinci Resolve and Capcut for Video Editing",
    "Figma and Canva for Graphic Designing",
  ],
  interestLists: [
    "Education",
    "Self Development",
    "Bussiness and Technology",
    "Data Analytics and Visualizations",
    "Non-fiction Books and writings",
  ],
  skills: {
    programming: [
      { name: "Python", value: "90" },
      { name: "JavaScript", value: "80" },
      { name: "Angular", value: "90" },
    ],
    language: [
      { name: "Indonesian", value: "100" },
      { name: "English", value: "85" },
      { name: "Javanesse", value: "80" },
    ],
  },
  education: [
    { year: "2019 - Present", unv: "Gadjah Mada University", degree: "Information Engineering" },
    { year: "2016 - 2019", unv: "SMAN 2 Kota Bekasi", degree: "Science Major" },
  ],
  organisation: [
    { year: "2022", project: "Field Study and Community Service", deg: "Web Developer and Photographer in Karimunjawa Island"},
    { year: "2021 - 2022", project: "Badan Eksekutif Mahasiswa Fakultas Teknik UGM", deg: "Head of Digital Data Analytics and Research Bureau"},
    { year: "2020 - 2022", project: "Night Login Community", deg: "Member of Night Login Data Science and Data Analytic Community (NDDC"},
    { year: "2021 - 2022", project: "Keluarga Mahasiswa Teknik Elektro dan Teknologi Informasi UGM ", deg: "Organizational Development Bureau and responsible for Enterpreuneurship Divison"},
    { year: "2020 - 2021", project: "Keluarga Mahasiswa Teknik Elektro dan Teknologi Informasi UGM ", deg: "Organizational Development Bureau and responsible for Public Relations Divison"},
    { year: "2019 - 2020", project: "Badan Eksekutif Mahasiswa Fakultas Teknik UGM", deg: "Ministry Popular and Applicative Research focused on data analytics and issue research"},
  ],
  speaker: [
    { year: "2023", location: "Night Login UGM", topic: "Get to know more about Information Technology"},
    { year: "2022", location: "Politeknik Statistika STIS", topic: "Integral Sesi 3 : From Statistics, Data Science to Self Development"},
    { year: "2022", location: "SISIK PTN UPI", topic: "Talked about preparation of university entrance exam selection"},
    { year: "2022", location: "SMAN 8 Kab. Tangerang ", topic: "Campus Goes to School includes theme preparation university entrance exam selection"},
    { year: "2021", location: "Pahamify Campus Fair", topic: "Introduced more about Information Engineering, Information System, Computer Science, and other major related"},
    { year: "2021", location: "Bukasuara", topic: "Perspective Festival on International Youth Day about Self Development for College Students"},
    { year: "2021", location: "Teman Kita", topic: "Talked about preparation of university entrance exam selection"}, 
    { year: "2021", location: "Media Selaras", topic: "Talked about preparation of university entrance exam selection"}, 
    { year: "2021", location: "Project Talks", topic: "Talked about self development, 'Know Yourself to Win All Battle' for college students"}, 
    { year: "2021", location: "Community of Belajar Bareng", topic: "Tutor of Basic Programming Class at Community"}, 
  ],
  working: [
    { year: "2023", company: "JALA Tech", deg: "Python Engineer & Data Analyst"},
  ],
  partnersLogos: [
    "img/partners/1.png",
    "img/partners/2.png",
    "img/partners/3.png",
    "img/partners/4.png",
  ],
};

const About = () => {
  const [popup, setPopup] = useState(false);
  return (
    <Fragment>
      <AboutPopup
        open={popup}
        close={() => setPopup(false)}
        aboutData={aboutData}
      />
      <div className="edrea_tm_section hidden animated" id="about">
        <div className="section_inner">
          <div className="edrea_tm_about">
            <div className="left">
              <div className="image">
                <img src="img/thumbs/1-1.jpg" alt="" />
                <div className="main" data-img-url="img/about/1.png" />
              </div>
            </div>
            <div className="right">
              <div className="short">
                <h3 className="name">
                  {aboutData.firstName}{" "}
                  <span className="coloring">{aboutData.lastName}</span>
                </h3>
                <h3 className="job">
                  <AnimatedText />
                </h3>
              </div>
              <div className="text"> 
                <p>
                  My name is <span>Naufal Halim.</span> I am an undergraduate student in the <span>Information Engineering</span> Program 
                  at <span>Gadjah Mada University</span> specializing in <span>data engineering</span>.
                  I am interested in web development, data analysis, python, photography, and content creation.
                  I am enthusiastic to take the opportunity for learning more about things in my field.
                </p>
              </div>
              <div className="edrea_tm_button">
                <a href="#" onClick={() => setPopup(true)}>
                  Details
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default About;
