import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './RecentJobs.moudle.css'
import { BiSolidMap } from "react-icons/bi";

// bookmark
import { FaBookmark } from "react-icons/fa6";
import { FaRegBookmark } from "react-icons/fa";

// hide
import { FaRegEyeSlash } from "react-icons/fa";
import { Link } from 'react-router-dom';

const RecentJobs = () => {


    const recentJobsData = {
        "recentJobsJson":[
            {
                "id":1,
                "company_logo":"https://demoapus1.com/jobtex-new/wp-content/uploads/2023/05/e1.png",
                "job_title":"Data Scientist",
                "company_name":"Wipro",
                "experience":"1 - 2 years",
                "salary":"10 - 12 LPA",
                "job_location":"Bengalore",
                "roles_responsibility":[
                    "Skills Required: Roles and Responsibilities. Java Developers",
                    "Software Engineer. We are looking for a Java Developer with experience in building high-performing",
                    "scalable, applicationsExperience: 2-4+ years",
                ],
                "skills_required":["Python","Ruby","Machine Learning","Statistics", "AI", "ML"],
                "posted":"Posted 60 days ago",
                "job_category":"Data Scientist",
                "job_type":"PREMIUM",
                "people_applyed":50
            },
            {
                "id":2,
                "company_logo":"https://demoapus1.com/jobtex-new/wp-content/uploads/2023/05/e1.png",
                "job_title":"Data Scientist",
                "company_name":"TCS",
                "experience":"1 - 2 years",
                "salary":"8 - 12 LPA",
                "job_location":"Bengalore",
                "roles_responsibility":[
                    "Skills Required: Roles and Responsibilities. Java Developers",
                    "Software Engineer. We are looking for a Java Developer with experience in building high-performing",
                    "scalable, applicationsExperience: 2-4+ years",
                ],
                "skills_required":["Python","Ruby","Machine Learning","Statistics", "AI", "ML"],
                "posted":"Posted 5 days ago",
                "job_category":"Data Scientist",
                "job_type":"PREMIUM",
                "people_applyed":50
            },
            {
                "id":3,
                "company_logo":"https://demoapus1.com/jobtex-new/wp-content/uploads/2023/05/e1.png",
                "job_title":"Data Scientist",
                "company_name":"Wipro",
                "experience":"1 - 2 years",
                "salary":"10 - 12 LPA",
                "job_location":"Bengalore",
                "roles_responsibility":[
                    "Skills Required: Roles and Responsibilities. Java Developers",
                    "Software Engineer. We are looking for a Java Developer with experience in building high-performing",
                    "scalable, applicationsExperience: 2-4+ years",
                ],
                "skills_required":["Python","Ruby","Machine Learning","Statistics", "AI", "ML"],
                "posted":"Posted 60 days ago",
                "job_category":"Data Scientist",
                "job_type":"PREMIUM",
                "people_applyed":50
            },
            {
                "id":4,
                "company_logo":"https://demoapus1.com/jobtex-new/wp-content/uploads/2023/05/e1.png",
                "job_title":"Data Scientist",
                "company_name":"Wipro",
                "experience":"1 - 2 years",
                "salary":"10 - 12 LPA",
                "job_location":"Bengalore",
                "roles_responsibility":[
                    "Skills Required: Roles and Responsibilities. Java Developers",
                    "Software Engineer. We are looking for a Java Developer with experience in building high-performing",
                    "scalable, applicationsExperience: 2-4+ years",
                ],
                "skills_required":["Python","Ruby","Machine Learning","Statistics", "AI", "ML"],
                "posted":"Posted 60 days ago",
                "job_category":"Data Scientist",
                "job_type":"PREMIUM",
                "people_applyed":50
            },
            {
                "id":5,
                "company_logo":"https://demoapus1.com/jobtex-new/wp-content/uploads/2023/05/e1.png",
                "job_title":"Data Scientist",
                "company_name":"Wipro",
                "experience":"1 - 2 years",
                "salary":"10 - 12 LPA",
                "job_location":"Bengalore",
                "roles_responsibility":[
                    "Skills Required: Roles and Responsibilities. Java Developers",
                    "Software Engineer. We are looking for a Java Developer with experience in building high-performing",
                    "scalable, applicationsExperience: 2-4+ years",
                ],
                "skills_required":["Python","Ruby","Machine Learning","Statistics", "AI", "ML"],
                "posted":"Posted 60 days ago",
                "job_category":"Data Scientist",
                "job_type":"PREMIUM",
                "people_applyed":50
            },
            {
                "id":6,
                "company_logo":"https://demoapus1.com/jobtex-new/wp-content/uploads/2023/05/e1.png",
                "job_title":"Data Scientist",
                "company_name":"Wipro",
                "experience":"1 - 2 years",
                "salary":"10 - 12 LPA",
                "job_location":"Bengalore",
                "roles_responsibility":[
                    "Skills Required: Roles and Responsibilities. Java Developers",
                    "Software Engineer. We are looking for a Java Developer with experience in building high-performing",
                    "scalable, applicationsExperience: 2-4+ years",
                ],
                "skills_required":["Python","Ruby","Machine Learning","Statistics", "AI", "ML"],
                "posted":"Posted 60 days ago",
                "job_category":"Data Scientist",
                "job_type":"PREMIUM",
                "people_applyed":50
            },
            
        ]
    };


  return (
    <section className='recentJobs'>
        <div className='RecentJobsHeaddingwrapper'>
            <div>
                <h4>Recent Jobs</h4>
            </div> 
            <div>
                <Link to="/UserDashboard/RecentJobs">
                    <button className='btn-viewAllJobs'>View all</button>
                </Link>
            </div>
        </div>

        <Row className='recentJobsRow'>
            {recentJobsData.recentJobsJson.map((recentJob) => {
                return (
                <Col className='col-lg-12' key={recentJob.id}>
                    <div className='recentCardWrapper'>
                        <div className='RecentJobsFistCard'>
                            <div>
                                <img src={recentJob.company_logo} className='' alt=''/>
                            </div>
                            <div className='RecentjobTitle'>
                                    <h4>{recentJob.job_title}</h4>
                                    <div>
                                        <span>{recentJob.company_name}</span>
                                    </div>
                            </div>
                        </div>
                        <div className='RecentJobsSecondCard'>
                            <div>
                                <span>{recentJob.experience}</span>
                            </div>
                            <div>
                                <span>{recentJob.salary}</span>
                            </div>
                            <div>
                                <BiSolidMap size={23} className='mx-2'/>
                                <span>{recentJob.job_location}</span>
                            </div>
                        </div>
                        <div className='RecentJobsThirdCard'>
                            <div className='jobRolesandResponsibility'>
                                <ul>
                                    {recentJob.roles_responsibility.map((data, index) => (
                                        <li key={index}>{data}</li>
                                    ))}
                                </ul>
                            </div>
                            
                            <div className='SkillsDivWrapper'>
                                <ul>
                                    <span>Skills :</span>
                                    {recentJob.skills_required.map((skills,i) => (
                                        <li key={i}>{skills}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        
                        {/* forth div */}
                        <div className='Jobpostdetails'>
                            <div>
                                <span>{recentJob.posted}</span>
                                <div className='mt-2'>
                                    <FaRegBookmark className='mx-3' size={23}/>
                                    <FaRegEyeSlash className='mx-3' size={23}/>
                                </div>
                            </div>
                            <div>
                                <button className='btn-applyJob'>apply</button>
                            </div>
                        </div>
                    </div>
                </Col>
                )
            })}
        </Row>
    </section>
  )
}

export default RecentJobs