import React, { useEffect, useState } from 'react'
import DashboardNav from '../DashboardNav/DashboardNav'
import Footer from '../../../Main/Components/Footer/Footer'
import { Col, Container, Row } from 'react-bootstrap'
import './UserProfileDetails.moudle.css'
import 'react-circular-progressbar/dist/styles.css';
import { MdOutlineEdit } from "react-icons/md";
import ProgressBar from "@ramonak/react-progress-bar";
import SkillsPopup from './PopUpComponents/SkillsPopup';
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
import Config from '../../../../config'
import axios from 'axios';
import Cookies from 'js-cookie'

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


    // Profile Data
    const [user_Projects, setUser_Projects] = useState();
    const [user_Languages, setUser_Languages] = useState();
    const [user_Skills, setUser_Skills] = useState();
    const [professional_details, setProfessional_details] = useState();
    const [certificate_details, setCertificate_details] = useState();
    const [education_details, setEducation_details] = useState();
    const [user_details, setUser_details] = useState();

    const { apiUrl } = Config;

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const ProfileResponseData = await axios.get('http://13.234.33.63/hirework/web/myprofile/',
    //             { 
    //                 headers : {"X-CSRFToken" : Cookies.get("csrftoken")

    //             }});
                
    //         } catch (error) {
    //             console.log(error)
    //         } 
    //     };

    //     fetchData();
    // },[])

    

    useEffect(() => {
        const fetchProfile = async () => {
          try {
            const response = await axios.get(`${apiUrl}myprofile/`,{headers : {"X-CSRFToken" : Cookies.get("csrftoken")}});
            console.log(response);
      
          } catch (error) { 
            console.log(error)
          }
        }
      
        fetchProfile();
      
      }, []);











    


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