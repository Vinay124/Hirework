import React, { useEffect, useState } from 'react'
import DashboardNav from '../DashboardNav/DashboardNav'
import Footer from '../../../Main/Components/Footer/Footer'
import { Col, Container, Row } from 'react-bootstrap'
import './UserProfileDetails.moudle.css'
import 'react-circular-progressbar/dist/styles.css';
import { MdOutlineEdit } from "react-icons/md";
import ProgressBar from "@ramonak/react-progress-bar";
import SkillsPopup from './PopUpComponents/SkillsPopup';
import axios from 'axios';
import LanguagesPopup from './PopUpComponents/LanguagesPopup'
import ResumePopup from './PopUpComponents/ResumePopup'
import PersonalDetailsModelPopup from './PopUpComponents/PersonalDetailsModelPopup'
import ResumeModel from './PopUpComponents/ResumeModel'
import ProfileSummaryPopup from './PopUpComponents/ProfileSummaryPopup'
import EditProfileDetails from './PopUpComponents/EditProfileDetails'
import EducationDetailsPopup from './PopUpComponents/EducationDetailsPopup'
import EmploymentDetailsPopup from './PopUpComponents/EmploymentDetailsPopup'
import Accomplishments from './PopUpComponents/Accomplishments'
import CareerProfileDetails from './PopUpComponents/CareerProfileDetails'
import Projectspopup from './PopUpComponents/Projectspopup'

const UserProfileDetails = () => {

    // Experience Json
    // const experienceData = {
    //     "data":[
    //         {
    //             "id":1,
    //             "companyName":"Trendyol.com",
    //             "companylogo":"https://demoapus1.com/jobtex-new/wp-content/uploads/2023/05/e1.png",
    //             "Role":"Frontend Developer",
    //             "jobType":"FullTime",
    //             "jobstartDate":"18 Aug 2022",
    //             "jobEndDate":"20 July 2024",
    //             "notice_period":"30 Days",
    //             "description":"Accumulated hands-on experience as an Android developer, actively contributing to five to six diverse projects. Gained practical insights in app development, including UI/UX design, backend integration, and ensuring code functionality adhering to industry standards",
    //             "skills":[
    //                 "Android,",
    //                 "Java,",
    //                 "SQL,",
    //                 "UI UX Development",
    //                 "React"
    //             ]
    //         },
    //         {
    //             "id":2,
    //             "companyName":"Trendyol.com",
    //             "companylogo":"https://demoapus1.com/jobtex-new/wp-content/uploads/2023/05/e3.png",
    //             "Role":"Frontend Developer",
    //             "jobType":"FullTime",
    //             "jobstartDate":"01 Jan 2020",
    //             "jobEndDate":"20 July 2022",
    //             // "notice_period":"0Days",
    //             "description":"Accumulated hands-on experience as an Android developer, actively contributing to five to six diverse projects. Gained practical insights in app development, including UI/UX design, backend integration, and ensuring code functionality adhering to industry standards",
    //             "skills":[
    //                 "Android,",
    //                 "Java,",
    //                 "SQL,",
    //                 "UI UX Development",
    //                 "React"
    //             ]
    //         },
    //         {
    //             "id":3,
    //             "companyName":"aryupay",
    //             "companylogo":"https://demoapus1.com/jobtex-new/wp-content/uploads/2023/05/e11.png",
    //             "Role":"Frontend Developer",
    //             "jobType":"Internship",
    //             "jobstartDate":"20 Sep 2018",
    //             "jobEndDate":"28 Nov 2019",
    //             // "notice_period":"0Days",
    //             "description":"Accumulated hands-on experience as an Android developer, actively contributing to five to six diverse projects. Gained practical insights in app development, including UI/UX design, backend integration, and ensuring code functionality adhering to industry standards",
    //             "skills":[
    //                 "Android,",
    //                 "Java,",
    //                 "SQL,",
    //                 "UI UX Development",
    //                 "React"
    //             ]
    //         },
    // ]};
    // Education JSON
    // const EducationInfo = {
    //     "data":[
    //         {
    //             "id":1,
    //             "course_Name":"B.Tech/B.E.Computers",
    //             "college_name":"Vellore Institute of Technology",
    //             "start_date":"2019",
    //             "end_date":"2023",
    //             "course_type":"Full Time",
    //             "place":"Bengalore"
    //         },
    //         {
    //             "id":2,
    //             "course_Name":"PUC (Science)",
    //             "college_name":"Karnataka School Examination Bengalore",
    //             "start_date":"2016",
    //             "end_date":"2018",
    //             "course_type":"Full Time",
    //             "place":"Bengalore"
    //         },
    //         {
    //             "id":3,
    //             "course_Name":"SSLC",
    //             "college_name":"Vellore Institute of Technology",
    //             "start_date":"2019",
    //             "end_date":"2023",
    //             "course_type":"Full Time",
    //             "place":"Bengalore"
    //         },
            
    // ]};
    // Skills JSON
    // const skills = {
    //     "data":[
    //         {
    //             "id":1,
    //             "skill":"Android Development",
    //         },
    //         {
    //             "id":2,
    //             "skill":"Java",
    //         },
    //         {
    //             "id":3,
    //             "skill":"SQL",
    //         },
    //         {
    //             "id":4,
    //             "skill":"HTML",
    //         },
    //         {
    //             "id":5,
    //             "skill":"CSS",
    //         },
    //         {
    //             "id":6,
    //             "skill":"UI Development",
    //         },
    //         {
    //             "id":7,
    //             "skill":"Mathlab",
    //         },
    //         {
    //             "id":8,
    //             "skill":"AutoCAD",
    //         },
    // ]};
    // Language JSON
    // const languageData = {
    //     "data":[
    //         {
    //             "id":1,
    //             "languages":"Kannada",
    //             "Proficiency":"Export",
    //             "Read":"Read",
    //             "Write":"",
    //             "Speak":"Speak",
    //         },
    //         {
    //             "id":2,
    //             "languages":"English",
    //             "Proficiency":"Proficient",
    //             "Read":"Read",
    //             "Write":"Write",
    //             "Speak":"Speak",
    //         },
    //         {
    //             "id":3,
    //             "languages":"Hindi",
    //             "Proficiency":"beginner",
    //             "Read":"",
    //             "Write":"",
    //             "Speak":"Speak",
    //         },
    // ]};

    // Profile Score Functionlity
    const [score, setScore] = useState(0)
    const [barColor, setBarColor] = useState('#69aaf9');
    
    const fetchScore = async () => {
        try {
        //   const response = await fetch('https://api.example.com/score'); // Replace with your API endpoint
        //   const data = await response.json();
          const newScore = 40;
          localStorage.setItem('newScore', newScore);
          if (newScore >= 0 && newScore <= 100) {
            setScore(newScore);
          }
        } catch (error) {
          console.error('Error fetching score:', error);
        }
      };

    useEffect(() => {
        fetchScore();
      }, []);
    
    useEffect(() => {
        if (score <= 30) {
            setBarColor('#FF0000');
        } else if (score <= 70) {
            setBarColor('#FFA500');
        } else {
            setBarColor('#008000');
        }
    }, [score]);


  return (
    <>
    <DashboardNav/>
    <section className='EditProfileDetails'>
        <Container>
            <Row className='editProfileRow'>
                <Col className='col-lg-8 '>
                <EditProfileDetails/>           

                {/* Profile Details Component  */}
                <PersonalDetailsModelPopup/>

                {/* Resume upload */}
                <ResumeModel/>

                {/* Work Exployent */}
                <EmploymentDetailsPopup />
                                
                {/* Education */}
                <EducationDetailsPopup/>

            {/* skills */}
                <SkillsPopup/>

                {/* Projects */}
                <Projectspopup/>
            </Col>


                {/* Second col */}
                <Col className='col-lg-4'>
                    {/* Profile Score */}
                    <Row>
                        <Col className='col-lg-12'>
                            <div className='profileScoreDetails'>
                                <div className='profileScoreinnerDiv'>
                                    <div>
                                        <h6>Profile Scores</h6>
                                    </div>
                                </div>

                                <div className='profilescoreInner'>
                                   <div>
                                        <ProgressBar completed={`${score}`}
                                            height='15px'
                                            baseBgColor='#dddddd'
                                            bgColor={`${barColor}`}
                                            width='100%'
                                            borderRadius='5px'
                                            style={{margin:'0 auto'}}
                                            labelSize='0'/>
                                   </div>

                                   <Row className='mt-2 profileScoreData'>
                                        <Col className='col-lg-4 text-left'>0%</Col>
                                        <Col className='col-lg-4 text-center'>50%</Col>
                                        <Col className='col-lg-4 text-end'>100%</Col>
                                   </Row>

                                   <div className='profileDescription'>
                                    <h6>Please Completed your Profile</h6>
                                    <span>Increase your chances of getting noticed by the recruiter. Create a 60 second video or audio resume and mark that first impression which could give you great head-start even before meeting your prospective employer</span>
                                   </div>
                                </div>
                            </div>
                        </Col>
                    </Row>                    

                    {/* resume Headding */}
                    <ResumePopup/>

                    {/* Profile summary */}
                    <ProfileSummaryPopup/>

                {/* Language popup */}
                <LanguagesPopup/>

                {/* Accomplishments */}
                <Accomplishments/>

                {/* Career Profile Details */}
                <CareerProfileDetails />                    
                </Col>
            </Row>
        </Container>
    </section>
    <Footer/>
    </>
  )
}

export default UserProfileDetails