import React, { useState } from 'react'
import './AccountInfo.moudle.css'
import UserAvatar from '../../../assets/usersIcon/UserAvatar.jpg' 
import { Col, Row } from 'react-bootstrap';
import { RiEditCircleFill } from "react-icons/ri";
import { TbEdit } from "react-icons/tb";
import { IoLocationOutline } from "react-icons/io5";
import { MdWork } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { IoWalletOutline } from "react-icons/io5";
import { MdWorkOutline } from "react-icons/md";
import ProgressBar from "@ramonak/react-progress-bar";

const AccountInfo = () => {

    const accountInfoData = {
        "employees": [
            {
                "id":1,
                "user_image":UserAvatar,
                "first_Name":"Karthik",
                "Last_Name":"Doe",
                "email":"Karthik@admin.com",
                "phone":"7821-7921-45",
                "current_position":'React Developer',
                "Experience":'3.5Years',
                "Currect_Salary":650000,
                "hire_date":"2023-01-20",
                "address":{
                    "City":"Bangalore",
                    "State":"Karnataka",
                    "zipCode":580030
                },
                "work_experience": [
                    {
                        "company":"Infosys",
                        "Position":"React Developer",
                        "start_date":"2017-06-01",
                        "end_date":"2019-12-13",
                        "responsibilities" : [
                            "Developed web applications using JavaScript and Python",
                            "Collaborated with the design team to create user-friendly interfaces",
                            "Maintained and updated existing codebases"
                        ]
                    },
                    {
                        "company":"Amazon",
                        "position":"Junior Developer",
                        "start_date":"2016-01-01",
                        "end_date":"2017-05-31",
                        "responsibilities": [
                            "Assisted in the development of client projects",
                            "Performed software testing and debugging",
                            "Participated in code reviews and team meetings"
                        ]
                    }
                ],
                "skills":[
                    "Html",
                    "Css",
                    "Git",
                    "Github",
                    "MongoDB",
                    "JavaScript",
                    "Python",
                    "React",
                    "Node.js",
                    "SQL",
                    "Agile Methodologies"
                ]
            },
            // {
            //     "id":2,
            //     "first_Name":"Kiran",
            //     "Last_Name":"D",
            //     "email":"Kiran@gmail.com",
            //     "phone":"7821-7921-45",
            //     "current_position":'React Developer',
            //     "Experience":'3.5Years',
            //     "Currect_Salary":650000,
            //     "hire_date":"2023-01-20",
            //     "address":{
            //         "City":"Bangalore",
            //         "State":"Karnataka",
            //         "zipCode":580030
            //     },
            //     "work_experience": [
            //         {
            //             "company":"Infosys",
            //             "Position":"React Developer",
            //             "start_date":"2017-06-01",
            //             "end_date":"2019-12-13",
            //             "responsibilities" : [
            //                 "Developed web applications using JavaScript and Python",
            //                 "Collaborated with the design team to create user-friendly interfaces",
            //                 "Maintained and updated existing codebases"
            //             ]
            //         },
            //         {
            //             "company":"Amazon",
            //             "position":"Junior Developer",
            //             "start_date":"2016-01-01",
            //             "end_date":"2017-05-31",
            //             "responsibilities": [
            //                 "Assisted in the development of client projects",
            //                 "Performed software testing and debugging",
            //                 "Participated in code reviews and team meetings"
            //             ]
            //         }
            //     ],
            //     "skills":[
            //         "Html",
            //         "Css",
            //         "Git",
            //         "Github",
            //         "MongoDB",
            //         "JavaScript",
            //         "Python",
            //         "React",
            //         "Node.js",
            //         "SQL",
            //         "Agile Methodologies"
            //     ]
            // }
        ]
    };

    const personalDetails = {
        "data":[
            {
                "id":1,
                "icon":<IoLocationOutline size={21} color="#b9bdc1"/>,
                "headding":"Work Location",
                "user_details":"Bengalore, Chennai"
            },
            {
                "id":2,
                "icon":<MdWork size={21} color="#b9bdc1"/>,
                "headding":"Work Experience",
                "user_details":"5 Years",
            },
            {
                "id":3,
                "icon":<IoWalletOutline size={21} color="#b9bdc1"/>,
                "headding":"Salary Expections",
                "user_details":"10 - 12LPA",
            },
            {
                "id":4,
                "icon":<SlCalender size={21} color="#b9bdc1"/>,
                "headding":"Notice Period",
                "user_details":"10 - 15 Days",
            },
            {
                "id":5,
                "icon":<MdWorkOutline size={21} color="#b9bdc1"/>,
                "headding":"Employment Type",
                "user_details":"Full Time, Remote",
            },
            
        ]
    }



    const [score, setScore] = useState(10);


    const calculatefillPercentage = () => {
        if(score === 0) return '0%';
        const profileScore = Math.max(0, Math.min(score, 100));
        return `${profileScore}`
    };


  return (
    <>
    <section className='userDetails'>
        <div class="score-indicator">
            <img src={UserAvatar} alt="Profile Image"/>
            <div className='profileImage_edit'>
            <TbEdit  size={16} color='#ffffff'/>
            </div>
            <div className="circle" style={{ clipPath: `polygon(0 0, ${calculatefillPercentage()} 0, ${calculatefillPercentage()} 100%, 0 100%)` }}></div>
            <div class="score">{calculatefillPercentage()}</div>
        </div>
        
        <div className='userDataDetails'>
            <div>
                <h4>Karthik</h4>
            </div>
            <div>
                <span>React Developer</span>
            </div>
            <div className='emailandMobileSection'>
                <div className='mt-2 '>
                    <span>Email: karthik342@gmail.com</span>
                </div>
                <div className='mt-2'>
                    <span>Mobile: +91-846-5648-468</span>
                </div>
            </div>
        </div>

        <div className='progressBarMainwrapper'>
            <div>
                <ProgressBar completed={60} width='100%' />
            </div>
            <div>
                <button className='btn_profileCompleted'>Complete Profile</button>
            </div>
        </div>

        {/* work Exp */}
        <div className='workExpInnerDiv'>
           <div>
                <div>
                    <h5>Work Experience</h5>
                </div>
                <div>
                    <RiEditCircleFill color='#0073ff'/>
                </div>
           </div>

            <Row className='justify-content-between '>
                <Col className='col-lg-8'>
                    <div className='workExpDetails'>
                        <h6>Junior Developer</h6>
                        <span>Airbnb, Inc - Full Time</span>
                    </div>
                </Col>
                <Col className='col-lg-4 text-end'>
                    <div className='workExpYear'>
                        <span>2 Years</span>
                    </div>
                </Col>
            </Row>

            <Row className='justify-content-between mt-4'>
                <Col className='col-lg-8'>
                    <div className='workExpDetails'>
                        <h6>Junior Developer</h6>
                        <span>Airbnb, Inc - Full Time</span>
                    </div>
                </Col>
                <Col className='col-lg-4 text-end'>
                    <div className='workExpYear'>
                        <span>2 Years</span>
                    </div>
                </Col>
            </Row>
        </div>


        {/* Personal Details */}
        <div className='PersonalInformation'>
            <div>
                <h5>Personal Details</h5>
            </div>

            <Row className='PerosnalInformationRow'>
                {personalDetails.data.map((userData) => {
                    return(
                        <>
                        <div className='user_DetailsWrapper'>
                            <Col className='col-lg-3'>
                                <div className='userIcon'>
                                    {userData.icon}
                                </div>
                            </Col>
                            <Col className='col-lg-9'>
                                <div className='userDetailsDiv'>
                                    <span>{userData.headding}</span>
                                    <h6>{userData.user_details}</h6>
                                </div>
                            </Col>
                        </div>
                    </>
                    )
                })}
            </Row>
        </div>

    {/* Skills */}
        <div className='SkillsWrapper'>
            <div className='SkillsDiv'>
                <div>
                    <h5>Skills</h5>
                </div>
                <div className='SkillsinnerDiv'>
                    <div>
                        <h6>Javascript</h6>
                    </div>
                    <div>
                        <h6>Python</h6>
                    </div>
                    <div>
                        <h6>Html</h6>
                    </div>
                    <div>
                        <h6>Css</h6>
                    </div>
                    <div>
                        <h6>ExpressJs</h6>
                    </div>
                    <div>
                        <h6>AWS</h6>
                    </div>
                    <div>
                        <h6>ReactJs</h6>
                    </div>
                    <div>
                        <h6>Git</h6>
                    </div>
                    <div>
                        <h6>Github</h6>
                    </div>
                </div>
            </div>
        </div>

        <div className='job-alertsSection'>
            <div>
                <h6>Create Job Alert</h6>
                <span>Create a job alert now and never miss a job</span>
            </div>
            <div >
                <input type='text' placeholder='Enter job Keyword'/>
                <button type="submit" className='btn-job-alerts'>Create job alerts</button>
            </div>
        </div>

        <div className='mt-4'>
            <button className='btn-AccountEditProfile'>Edit Profile</button>
        </div>
    </section>
    </>
  )
}

export default AccountInfo