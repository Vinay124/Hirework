import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaRegBookmark, FaRegEyeSlash } from 'react-icons/fa'
import { BiSolidMap } from 'react-icons/bi'
import JobFilter from '../../../Main/Components/JobFilter/JobFilter'
import { BsFillBriefcaseFill } from "react-icons/bs";
import { LuIndianRupee } from "react-icons/lu";
import { Link } from 'react-router-dom'
import './ViewJob.moudle.css'
import DashboardNav from '../DashboardNav/DashboardNav'
import Footer from '../../../Main/Components/Footer/Footer'

const RecentJobs = () => {


    const recentJobsData = {
        "recentJobsJson":[
            {
                "id":1,
                "company_logo":"https://demoapus1.com/jobtex-new/wp-content/uploads/2023/05/e1.png",
                "job_title":"Data Scientist",
                "company_name":"Wipro",
                "experienceIcon":<BsFillBriefcaseFill size="20" color="#8d8d8d"  className="mx-2"/>,
                "experience":"1 - 2 years",
                "salary_icon":<LuIndianRupee size="20" color="#8d8d8d" className="mx-2"/>,
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
                "experienceIcon":<BsFillBriefcaseFill size="20" color="#8d8d8d"  className="mx-2"/>,
                "experience":"1 - 2 years",
                "salary_icon":<LuIndianRupee size="20" color="#8d8d8d" className="mx-2"/>,
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
                "experienceIcon":<BsFillBriefcaseFill size="20" color="#8d8d8d"  className="mx-2"/>,
                "experience":"1 - 2 years",
                "salary_icon":<LuIndianRupee size="20" color="#8d8d8d" className="mx-2"/>,
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
                "experienceIcon":<BsFillBriefcaseFill size="20" color="#8d8d8d"  className="mx-2"/>,
                "experience":"1 - 2 years",
                "salary_icon":<LuIndianRupee size="20" color="#8d8d8d" className="mx-2"/>,
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
                "experienceIcon":<BsFillBriefcaseFill size="20" color="#8d8d8d"  className="mx-2"/>,
                "experience":"1 - 2 years",
                "salary_icon":<LuIndianRupee size="20" color="#8d8d8d" className="mx-2"/>,
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
                "experienceIcon":<BsFillBriefcaseFill size="20" color="#8d8d8d"  className="mx-2"/>,
                "experience":"1 - 2 years",
                "salary_icon":<LuIndianRupee size="20" color="#8d8d8d" className="mx-2"/>,
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
                "experienceIcon":<BsFillBriefcaseFill size="20" color="#8d8d8d"  className="mx-2"/>,
                "experience":"1 - 2 years",
                "salary_icon":<LuIndianRupee size="20" color="#8d8d8d" className="mx-2"/>,
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
                "experienceIcon":<BsFillBriefcaseFill size="20" color="#8d8d8d"  className="mx-2"/>,
                "experience":"1 - 2 years",
                "salary_icon":<LuIndianRupee size="20" color="#8d8d8d" className="mx-2"/>,
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
                "experienceIcon":<BsFillBriefcaseFill size="20" color="#8d8d8d"  className="mx-2"/>,
                "experience":"1 - 2 years",
                "salary_icon":<LuIndianRupee size="20" color="#8d8d8d" className="mx-2"/>,
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
                "experienceIcon":<BsFillBriefcaseFill size="20" color="#8d8d8d"  className="mx-2"/>,
                "experience":"1 - 2 years",
                "salary_icon":<LuIndianRupee size="20" color="#8d8d8d" className="mx-2"/>,
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
                "experienceIcon":<BsFillBriefcaseFill size="20" color="#8d8d8d"  className="mx-2"/>,
                "experience":"1 - 2 years",
                "salary_icon":<LuIndianRupee size="20" color="#8d8d8d" className="mx-2"/>,
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
                "experienceIcon":<BsFillBriefcaseFill size="20" color="#8d8d8d"  className="mx-2"/>,
                "experience":"1 - 2 years",
                "salary_icon":<LuIndianRupee size="20" color="#8d8d8d" className="mx-2"/>,
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
                "experienceIcon":<BsFillBriefcaseFill size="20" color="#8d8d8d"  className="mx-2"/>,
                "experience":"1 - 2 years",
                "salary_icon":<LuIndianRupee size="20" color="#8d8d8d" className="mx-2"/>,
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
                "experienceIcon":<BsFillBriefcaseFill size="20" color="#8d8d8d"  className="mx-2"/>,
                "experience":"1 - 2 years",
                "salary_icon":<LuIndianRupee size="20" color="#8d8d8d" className="mx-2"/>,
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
                "experienceIcon":<BsFillBriefcaseFill size="20" color="#8d8d8d"  className="mx-2"/>,
                "experience":"1 - 2 years",
                "salary_icon":<LuIndianRupee size="20" color="#8d8d8d" className="mx-2"/>,
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
                "experienceIcon":<BsFillBriefcaseFill size="20" color="#8d8d8d"  className="mx-2"/>,
                "experience":"1 - 2 years",
                "salary_icon":<LuIndianRupee size="20" color="#8d8d8d" className="mx-2"/>,
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
                "experienceIcon":<BsFillBriefcaseFill size="20" color="#8d8d8d"  className="mx-2"/>,
                "experience":"1 - 2 years",
                "salary_icon":<LuIndianRupee size="20" color="#8d8d8d" className="mx-2"/>,
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
                "experienceIcon":<BsFillBriefcaseFill size="20" color="#8d8d8d"  className="mx-2"/>,
                "experience":"1 - 2 years",
                "salary_icon":<LuIndianRupee size="20" color="#8d8d8d" className="mx-2"/>,
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
                "experienceIcon":<BsFillBriefcaseFill size="20" color="#8d8d8d"  className="mx-2"/>,
                "experience":"1 - 2 years",
                "salary_icon":<LuIndianRupee size="20" color="#8d8d8d" className="mx-2"/>,
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
                "experienceIcon":<BsFillBriefcaseFill size="20" color="#8d8d8d"  className="mx-2"/>,
                "experience":"1 - 2 years",
                "salary_icon":<LuIndianRupee size="20" color="#8d8d8d" className="mx-2"/>,
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
                "experienceIcon":<BsFillBriefcaseFill size="20" color="#8d8d8d"  className="mx-2"/>,
                "experience":"1 - 2 years",
                "salary_icon":<LuIndianRupee size="20" color="#8d8d8d" className="mx-2"/>,
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
                "experienceIcon":<BsFillBriefcaseFill size="20" color="#8d8d8d"  className="mx-2"/>,
                "experience":"1 - 2 years",
                "salary_icon":<LuIndianRupee size="20" color="#8d8d8d" className="mx-2"/>,
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
                "experienceIcon":<BsFillBriefcaseFill size="20" color="#8d8d8d"  className="mx-2"/>,
                "experience":"1 - 2 years",
                "salary_icon":<LuIndianRupee size="20" color="#8d8d8d" className="mx-2"/>,
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
                "experienceIcon":<BsFillBriefcaseFill size="20" color="#8d8d8d"  className="mx-2"/>,
                "experience":"1 - 2 years",
                "salary_icon":<LuIndianRupee size="20" color="#8d8d8d" className="mx-2"/>,
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
                "experienceIcon":<BsFillBriefcaseFill size="20" color="#8d8d8d"  className="mx-2"/>,
                "experience":"1 - 2 years",
                "salary_icon":<LuIndianRupee size="20" color="#8d8d8d" className="mx-2"/>,
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
                "experienceIcon":<BsFillBriefcaseFill size="20" color="#8d8d8d"  className="mx-2"/>,
                "experience":"1 - 2 years",
                "salary_icon":<LuIndianRupee size="20" color="#8d8d8d" className="mx-2"/>,
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
                "experienceIcon":<BsFillBriefcaseFill size="20" color="#8d8d8d"  className="mx-2"/>,
                "experience":"1 - 2 years",
                "salary_icon":<LuIndianRupee size="20" color="#8d8d8d" className="mx-2"/>,
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
                "experienceIcon":<BsFillBriefcaseFill size="20" color="#8d8d8d"  className="mx-2"/>,
                "experience":"1 - 2 years",
                "salary_icon":<LuIndianRupee size="20" color="#8d8d8d" className="mx-2"/>,
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
                "experienceIcon":<BsFillBriefcaseFill size="20" color="#8d8d8d"  className="mx-2"/>,
                "experience":"1 - 2 years",
                "salary_icon":<LuIndianRupee size="20" color="#8d8d8d" className="mx-2"/>,
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
                "experienceIcon":<BsFillBriefcaseFill size="20" color="#8d8d8d"  className="mx-2"/>,
                "experience":"1 - 2 years",
                "salary_icon":<LuIndianRupee size="20" color="#8d8d8d" className="mx-2"/>,
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
                "experienceIcon":<BsFillBriefcaseFill size="20" color="#8d8d8d"  className="mx-2"/>,
                "experience":"1 - 2 years",
                "salary_icon":<LuIndianRupee size="20" color="#8d8d8d" className="mx-2"/>,
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
                "experienceIcon":<BsFillBriefcaseFill size="20" color="#8d8d8d"  className="mx-2"/>,
                "experience":"1 - 2 years",
                "salary_icon":<LuIndianRupee size="20" color="#8d8d8d" className="mx-2"/>,
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
                "experienceIcon":<BsFillBriefcaseFill size="20" color="#8d8d8d"  className="mx-2"/>,
                "experience":"1 - 2 years",
                "salary_icon":<LuIndianRupee size="20" color="#8d8d8d" className="mx-2"/>,
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
                "experienceIcon":<BsFillBriefcaseFill size="20" color="#8d8d8d"  className="mx-2"/>,
                "experience":"1 - 2 years",
                "salary_icon":<LuIndianRupee size="20" color="#8d8d8d" className="mx-2"/>,
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
                "experienceIcon":<BsFillBriefcaseFill size="20" color="#8d8d8d"  className="mx-2"/>,
                "experience":"1 - 2 years",
                "salary_icon":<LuIndianRupee size="20" color="#8d8d8d" className="mx-2"/>,
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
                "experienceIcon":<BsFillBriefcaseFill size="20" color="#8d8d8d"  className="mx-2"/>,
                "experience":"1 - 2 years",
                "salary_icon":<LuIndianRupee size="20" color="#8d8d8d" className="mx-2"/>,
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
                "experienceIcon":<BsFillBriefcaseFill size="20" color="#8d8d8d"  className="mx-2"/>,
                "experience":"1 - 2 years",
                "salary_icon":<LuIndianRupee size="20" color="#8d8d8d" className="mx-2"/>,
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
                "experienceIcon":<BsFillBriefcaseFill size="20" color="#8d8d8d"  className="mx-2"/>,
                "experience":"1 - 2 years",
                "salary_icon":<LuIndianRupee size="20" color="#8d8d8d" className="mx-2"/>,
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
                "experienceIcon":<BsFillBriefcaseFill size="20" color="#8d8d8d"  className="mx-2"/>,
                "experience":"1 - 2 years",
                "salary_icon":<LuIndianRupee size="20" color="#8d8d8d" className="mx-2"/>,
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
    <>
        <DashboardNav/>
        <section className='jobDetails'>
            <Container>
            <Row>
                <Col className='recentJobsHeaddingMain'>
                    <div>
                        {/* <h3>Recent Jobs</h3> */}
                    </div>
                </Col>
            </Row>

            <Row className='m-0 jobDetailsRow'>
                    <div className='recentJobHeadding'>
                        <h2>Recent Jobs</h2>
                    </div>
                <Col className='col-lg-8  jobDetailsFirstCol'>
                    {recentJobsData.recentJobsJson.map((recentJob) => {
                            return (
                                <Link key={recentJob.id} to="/UserDashboard/JobDetail">
                                    <div className='jobdetailsCardWrapper '>
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
                                            {recentJob.experienceIcon}
                                            <span>{recentJob.experience}</span>
                                        </div>
                                        <div>
                                            {recentJob.salary_icon}
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
                                            <Link to="/UserDashboard/JobDetail">
                                                <button className='btn-applyJob'>apply</button>
                                            </Link>
                                        </div>
                                    </div>
                                    </div>
                                </Link>
                            )
                        })}
                
                </Col>
                <Col className='col-lg-4 mt-3'>
                    <JobFilter/>
                </Col>
            </Row>
            </Container>

        </section>
        <Footer/>
    </>
  )
}

export default RecentJobs