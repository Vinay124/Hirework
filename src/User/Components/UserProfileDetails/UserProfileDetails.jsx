import React from 'react'
import DashboardNav from '../DashboardNav/DashboardNav'
import Footer from '../../../Main/Components/Footer/Footer'
import { Col, Container, Row } from 'react-bootstrap'
import './UserProfileDetails.moudle.css'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import UserImage from '../../../assets/usersIcon/UserAvatar.jpg'
import { MdOutlineEdit } from "react-icons/md";
// 
import { GrLocation } from "react-icons/gr";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { CiWallet } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { IoCalendarOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { LiaRupeeSignSolid } from "react-icons/lia";

// 
import { HiOutlineCake } from "react-icons/hi2";
import { PiBagSimpleBold } from "react-icons/pi";
import { IoWalletOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { IoDocumentTextOutline } from "react-icons/io5";
import { RiDeleteBin4Line as AiTwotoneDelete } from "react-icons/ri";
import { LuDownload } from "react-icons/lu";
import { LuDot } from "react-icons/lu";

const UserProfileDetails = () => {

    // const percentage = 66;

    const experienceData = {
        "data":[
            {
                "id":1,
                "companyName":"Trendyol.com",
                "companylogo":"https://demoapus1.com/jobtex-new/wp-content/uploads/2023/05/e1.png",
                "Role":"Frontend Developer",
                "jobType":"FullTime",
                "jobstartDate":"18 Aug 2022",
                "jobEndDate":"20 July 2024",
                "notice_period":"30 Days",
                "description":"Accumulated hands-on experience as an Android developer, actively contributing to five to six diverse projects. Gained practical insights in app development, including UI/UX design, backend integration, and ensuring code functionality adhering to industry standards",
                "skills":[
                    "Android,",
                    "Java,",
                    "SQL,",
                    "UI UX Development",
                    "React"
                ]
            },
            {
                "id":2,
                "companyName":"Trendyol.com",
                "companylogo":"https://demoapus1.com/jobtex-new/wp-content/uploads/2023/05/e3.png",
                "Role":"Frontend Developer",
                "jobType":"FullTime",
                "jobstartDate":"01 Jan 2020",
                "jobEndDate":"20 July 2022",
                // "notice_period":"0Days",
                "description":"Accumulated hands-on experience as an Android developer, actively contributing to five to six diverse projects. Gained practical insights in app development, including UI/UX design, backend integration, and ensuring code functionality adhering to industry standards",
                "skills":[
                    "Android,",
                    "Java,",
                    "SQL,",
                    "UI UX Development",
                    "React"
                ]
            },
            {
                "id":3,
                "companyName":"aryupay",
                "companylogo":"https://demoapus1.com/jobtex-new/wp-content/uploads/2023/05/e11.png",
                "Role":"Frontend Developer",
                "jobType":"Internship",
                "jobstartDate":"20 Sep 2018",
                "jobEndDate":"28 Nov 2019",
                // "notice_period":"0Days",
                "description":"Accumulated hands-on experience as an Android developer, actively contributing to five to six diverse projects. Gained practical insights in app development, including UI/UX design, backend integration, and ensuring code functionality adhering to industry standards",
                "skills":[
                    "Android,",
                    "Java,",
                    "SQL,",
                    "UI UX Development",
                    "React"
                ]
            },
        ]
    };




    const EducationInfo = {
        "data":[
            {
                "id":1,
                "course_Name":"B.Tech/B.E.Computers",
                "college_name":"Vellore Institute of Technology",
                "start_date":"2019",
                "end_date":"2023",
                "course_type":"Full Time",
                "place":"Bengalore"
            },
            {
                "id":2,
                "course_Name":"PUC (Science)",
                "college_name":"Karnataka School Examination Bengalore",
                "start_date":"2016",
                "end_date":"2018",
                "course_type":"Full Time",
                "place":"Bengalore"
            },
            {
                "id":3,
                "course_Name":"SSLC",
                "college_name":"Vellore Institute of Technology",
                "start_date":"2019",
                "end_date":"2023",
                "course_type":"Full Time",
                "place":"Bengalore"
            },
            
        ]
    };

    const skills = {
        "data":[
            {
                "id":1,
                "skill":"Android Development",
            },
            {
                "id":2,
                "skill":"Java",
            },
            {
                "id":3,
                "skill":"SQL",
            },
            {
                "id":4,
                "skill":"HTML",
            },
            {
                "id":5,
                "skill":"CSS",
            },
            {
                "id":6,
                "skill":"UI Development",
            },
            {
                "id":7,
                "skill":"Mathlab",
            },
            {
                "id":8,
                "skill":"AutoCAD",
            },
        ]
    }

  return (
    <>
    <DashboardNav/>

    <section className='EditProfileDetails'>
        <Container>
            <Row className='editProfileRow'>
                <Col className='col-lg-8 '>
                    <div className='editProfileDetailsWrapper'>
                        <Row className='editProfileMainDiv'>
                            <Col className='col-lg-3'>
                                <div className='editProfileImage'>
                                    <img src={UserImage} className='' alt=''/>
                                </div>
                            </Col>
                            <Col>
                                <Row>
                                    <Col className='col-lg-12'>
                                        <div className='profileInnerRowDiv'>
                                            <div>
                                                <div className='ProfileuserName'>
                                                    <h4>Karthik K</h4>
                                                    <MdOutlineEdit className='mx-3' size={20}/>  
                                                </div>
                                                <div className='job_designation'>
                                                    <span>React Developer</span>
                                                </div>
                                                <div className='currentCompany'>
                                                <span>at Infosys</span>
                                                </div>
                                            </div>
                                            <div className='profileUpdatedStatus'>
                                                <span>Profile last updated - 12Apr , 2024</span>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col className='col-lg-12'>
                                        <div className='personal_detailsWrapper'>
                                            <div className='personal_detailMainDiv'>
                                                <div>
                                                    <GrLocation className="mx-3" size="22" color="#888888"/>
                                                    <span>Bengalore India</span>
                                                </div>
                                                <div>
                                                    <BsFillBriefcaseFill className="mx-3" size="22" color="#888888"/>
                                                    <span>5 Year</span>
                                                </div>
                                                <div>
                                                    <CiWallet className="mx-3" size="22" color="#888888"/>
                                                    <span>
                                                    <LiaRupeeSignSolid className="mx-0" size="22" color="#888888"/>
                                                        600000</span>
                                                </div>
                                            </div>
                                            
                                            <div className='personal_detailMainDiv'>
                                                <div>
                                                    <MdOutlineEmail className="mx-3" size="22" color="#888888"/>
                                                    <span>karthik342@gmail.com</span>
                                                </div>
                                                <div>
                                                    <IoCalendarOutline className="mx-3" size="22" color="#888888"/>
                                                    <span>1 Year</span>
                                                </div>
                                                <div>
                                                    <BsTelephone className="mx-3" size="22" color="#888888"/>
                                                    <span>
                                                        +91-849-605-5025</span>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>


                {/* Personal Details */}
                <Row className='personalDetailsInfo'>
                    <Col className='col-lg-12'>
                        <div className='personalDetailsinnerDiv'>
                            <div className='personalDetailHeadding'>
                                <div>
                                    <h4>Personal Details</h4>
                                </div>
                                <div>
                                    <MdOutlineEdit className='mx-2' size={22} color='#888888'/>
                                    <span>Edit</span>
                                </div>
                            </div>
                            
                            <div className='personalDetailsinnerWrapper'>
                                <div className='careerBreakDiv'>
                                    <h6>Career Break.?</h6>
                                    <span>NO</span>
                                </div>

                                <div className='addressdiv'>
                                    <h6>Address</h6>
                                    <span>Bengalore Karnataka 560078</span>
                                </div>

                                <div className='Differently_abledDiv'>
                                    <h6>Differently abled</h6>
                                    <span>NO</span>
                                </div>

                                <div className='personal__Info'>
                                    <h6>Personal Info</h6>
                                    <span>Male / Single</span>
                                </div>
                            </div>
                            
                            <div className='PersonalDetailsSecondDiv'>
                                <div className='EmailDiv'>
                                    <div className='iconBackground'>
                                        <MdOutlineMail size={25} color="#888888"/>
                                    </div>
                                    <div>
                                        <h6>Email</h6>
                                        <span>karthik342@gmail.com</span>
                                    </div>
                                </div>

                                <div className='birthDayDiv'>
                                    <div className='iconBackground'>
                                        <HiOutlineCake size={25} color="#888888"/>
                                    </div>
                                        <div>
                                        <h6>Birthday</h6>
                                        <span>25 Dec 1990</span>
                                        <span>34 years old</span>
                                    </div>
                                </div>

                                <div className='WorkTypeDiv'>
                                    <div className='iconBackground'>
                                        <PiBagSimpleBold size={25} color="#888888"/>
                                    </div>
                                    <div>
                                        <h6>Work Type</h6>
                                        <span>Full Time</span>
                                    </div>
                                </div>

                                <div className='SalaryExpDiv'>
                                    <div className='iconBackground'>
                                        <IoWalletOutline size={25} color="#888888"/>
                                    </div>
                                    <div>
                                        <h6>Salary Expectations</h6>
                                        <span>10 - 12LPA</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                {/* Resume upload */}
                <Row>
                    <Col className='col-lg-12'>
                        <div className='ResumeDivWrapper'>
                            <div className='ResumeDivWrapperHeaddingdiv'>
                                    <h4>Resume</h4>
                            </div>

                            <div className='ResumedivWrapper'>
                                <div className='resumeWrapperInnerDiv'>
                                    <div className='ResumeIconDiv'>
                                        <IoDocumentTextOutline  size="26" color="#888888"/>
                                    </div>
                                    <div>
                                        <h6>KarthikUpdateResume.pdf</h6>
                                    </div>
                                </div>
                                <div className='DeleteandDownloadIcon'>
                                    <div className='DeleteButton'>
                                        <AiTwotoneDelete size={18}/>
                                    </div>
                                    <div className='downloadIcon'>
                                        <LuDownload size={18}/>
                                    </div>
                                </div>
                            </div>
                            <div className='uploadResumeDiv'>
                                <div>
                                    <button className='btn-uploadResume'>Upload Resume</button>
                                </div>
                                <div>
                                    <span>Supported Formats: doc, docx, rtf, pdf, upto 2 MB</span>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>

                {/* Resume Headline */}
                <Row>
                    <Col className='col-lg-12'></Col>
                </Row>

                {/* Work Exployent */}
                <Row>
                    <Col className='col-lg-12'>
                        <div className='employmentDiv'>
                            <div className='employeeHeadding'>
                                <div>
                                    <h4>Employment Details</h4>
                                </div>
                                <div>
                                    <MdOutlineEdit className='mx-2' size={22} color='#888888'/>
                                    <span>Edit</span>
                                </div>
                            </div>

                            <div className='employeementBody'>
                                {experienceData.data.map((items) => {
                                    return(
                                        <div className='experienceDivMain'>
                                            <div className='companyImage'>
                                                <img src={items.companylogo} className=''/>
                                            </div>
                                            <div>
                                                <div className='companyNameAndType'>
                                                    <h6>{items.companyName}</h6>
                                                    <span>{items.jobType}</span>
                                                </div>
                                                <div className='exp_rolesWrap'>
                                                    <div className='Exp_Role'>
                                                        <span>{items.Role}</span>
                                                    </div>
                                                    <div className='job_startdate'>
                                                        <LuDot/>
                                                        <span>{items.jobstartDate}</span>
                                                    </div>
                                                    <div className='job_endDate'>
                                                        <LuDot/>
                                                        <span>{items.jobEndDate}</span>
                                                    </div>
                                                </div>

                                                {/* notice */}
                                                <div>
                                                    <div className='notice_period'>
                                                        <h6>{items.notice_period} or less Notice Period</h6>
                                                    </div>
                                                    <div className='jobDescriptiondiv'>
                                                        <p>{items.description}</p>
                                                    </div>
                                                    <div className='skills_div'>
                                                        <span>Skills: 
                                                            <ul>
                                                                {items.skills.map((item,i) => (
                                                                    <li key={i}>{item}</li>
                                                                ))}
                                                            </ul>
                                                        </span>
                                                    </div>
                                                </div>
                                        </div>
                                    </div>
                                    )
                                })}
                            </div>
                            
                        </div>
                    </Col>
                </Row>
                
                {/* Education */}
                <Row>
                    <Col className='col-lg-12'>
                        <div className='EducationDiv'>
                            <div className='EducationinnerDiv'>
                                <div>
                                    <h4>Education Details</h4>
                                </div>
                                <div>
                                    <MdOutlineEdit className='mx-2' size={22} color='#888888'/>
                                    <span>Edit</span>
                                </div>
                            </div>

                            <div className='educationInnerInfo'>
                                {EducationInfo.data.map((items) => {
                                    return(
                                    <div className='educationInnerWrapper'>
                                        <div>
                                            <h6>{items.course_Name}</h6>
                                            <span>{items.college_name}</span>
                                        </div>
                                        <span className='divider'></span>
                                        <div className='edu_year'>
                                            <span>{items.start_date}</span>
                                            <span>{items.end_date}</span>
                                        </div>
                                    </div>   
                                    )
                                })}
                            </div>
                        </div>
                    </Col>
                </Row>

            {/* skills */}
                <Row>
                    <Col className='col-lg-12'>
                        <div className='skillsDivWrapper'>
                            <div className='skillsDivMain'>
                                <div>
                                    <h4>Skills</h4>
                                </div>
                                <div>
                                    <MdOutlineEdit className='mx-2' size={22} color='#888888'/>
                                    <span>Edit</span>
                                </div>
                            </div>

                            <div className='userProfileSkills'>
                                {skills.data.map((items) => {
                                    return(
                                        <div className='skillMain' key={items.id}>
                                            <span>{items.skill}</span>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </Col>
                </Row>

                {/* Projects */}
                <Row>
                    <Col></Col>
                </Row>

                {/*  */}


            </Col>

                {/* Second col */}
                <Col className='col-lg-4'>
                    <div className='editProfileDetailsWrapper'>
                        <span>left section</span>
                    </div>
                </Col>
            </Row>

            
        </Container>
    </section>
    <Footer/>
    </>
  )
}

export default UserProfileDetails