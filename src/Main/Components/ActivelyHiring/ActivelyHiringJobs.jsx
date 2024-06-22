import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Config from '../../../../config';
import axios from 'axios';
import DashboardNav from '../../../User/Components/DashboardNav/DashboardNav';
import Footer from '../Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap'
import { RiMapPinLine } from "react-icons/ri";
import { BsDot } from "react-icons/bs";
import { LuBookmark } from "react-icons/lu";
import { BsBookmarkFill } from "react-icons/bs";
import { LuIndianRupee } from "react-icons/lu";
import { HiOutlineMail } from "react-icons/hi";
import { GoFileDirectory } from "react-icons/go";
import { PiUserCheck } from "react-icons/pi";
import { MdFacebook } from "react-icons/md";
import { RiTwitterXLine } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa6";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { Modal, Button } from 'react-bootstrap';
import Cookies from 'js-cookie';

const ActivelyHiringJobs = () => {

    const {id: JobCardDetails} = useParams();
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [Loading, setLoading] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [applied, setApplied] = useState(false);
    const [jobToken, setJobToken] = useState('');


    const { apiUrl } = Config;


    useEffect(() => {

        const fetchJobDetailsData = async () => {
            setLoading(true);
            
            try {
                const response = await axios.get(`${apiUrl}jobs/?id=${JobCardDetails}`);
                console.log(response.data.data);
                const responseData = Array.isArray(response.data.data) ? response.data.data : [response.data.data];
                setData(responseData);

            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchJobDetailsData();

        setIsLoggedIn(userAuthCheck());
        const JobapplyToken = localStorage.getItem('JobapplyToken');
        if (JobapplyToken) {
            setJobToken(JobapplyToken);
            setApplied(true);
        }

    },[JobCardDetails, apiUrl]);


    const toggleVisibility = () => {
      setIsVisible(!isVisible);
    };


    if (Loading) {
        return (
          <>
          <DashboardNav/>
          <Container>
            <Row className='mt-5'>
            <Col className='col-lg-12'>
                <Skeleton height={280} />
            </Col>
            </Row>
            <Row className='mt-5 mb-5'>
            <Col className='col-lg-8'>
                <Skeleton count={1} height={500} />
                <Skeleton count={2} height={200} />
            </Col>

            <Col className='col-lg-4 '>
                <Skeleton count={3} height={40} />
                <Skeleton count={4} height={50} />
            </Col>
            </Row>
          </Container>
          <Footer/>
          </>
        );
      }
     
    if (error) {
        return <p> Error: {error}</p>
    }



    // Popup
    const userAuthCheck = () => {
        const token = Cookies.get('token');
        return token ? true : false;
    };     

    const handleJobApplyed = () => {
        if (jobToken === true) {
            const JobapplyToken = genratetoken();
            setApplied(true);
            setJobToken(JobapplyToken);
            localStorage.setItem('JobapplyToken',JobapplyToken);
            window.location.reload(); 
        } else  {
            console.log('error')
        }
    };

    const genratetoken = () => {
        const ApplyedToken = Math.random().toString(36).substr(2);
        return ApplyedToken;
    }
    
    console.log(jobToken)

  return (
    <>
    <DashboardNav/>
    <section className='jobdetailSection'>
      <Container>
      {data.map((data, index) => (
        <div>

            <Row key={index}>
            <Col className='col-lg-12'>
                <div className='jobDetailsMainDiv'>
                    <div className='backgroundImage'></div>
                    <div className='shareJobDiv'>
                    <span>Share this Job:</span>
                    <ul>
                        <li>
                        <MdFacebook size={20} color='#757373'/>
                        </li>
                        <li>
                        <RiTwitterXLine size={20} color='#757373'/>
                        </li>
                        <li>
                        <FaLinkedinIn size={20} color='#757373'/>
                        </li>
                    </ul>
                    </div>
                    <div>
                    <img src="https://demoapus1.com/jobtex-new/wp-content/uploads/2023/05/e11.png" className='JobDetailsCompanyLogo'/>
                    </div>
                    <div className='JobDetailsInnerDiv'>
                    <div>
                        <div className='JobdetailsTitle'>
                        <h4>{data.name}</h4>
                        <span>{data.company.name}</span>
                        </div>
                        
                    <div className='JoblocationDetails'>
                        <span>
                        <RiMapPinLine className='mx-1'/>
                        {data.company.address}</span>

                        <span className='mx-3'>
                        <BsDot/>
                        20 hours ago
                        </span>

                        {data.job_tags?.filter(item => item[1]).map((item, i) => (
                            <span key={i}>
                                <BsDot/>
                                {item[1]}
                            </span>
                        ))}
                    </div>

                    <div className='NumberofApplies'>
                            <span>Number of Applies :</span>
                            <span>{data.number_of_applicants}</span>
                    </div>
                    </div>

                    <div className='jobCardButtonDiv'>
                        <div>
                        <button className='btn-saveJob'>
                            <LuBookmark className='mx-2' size={20}/> Save Job
                        </button>
                        </div>
                        <div>
                            {applied ? (
                                <button className='btn-Jobapply' onClick={handleJobApplyed}>Applyed</button>
                            ): isLoggedIn ? (
                                <button className='btn-Jobapply' onClick={handleJobApplyed}>Apply</button>
                            ) : (
                                <div >
                                    <button className='btn-Loggedin'>Signup </button>
                                    <button className='btn-Signup'>Log in</button>
                                </div>
                            )}
                            {/* {isLoggedIn ? (
                                
                                ) : (
                            )} */}
                        </div>
                    </div>
                    </div>
                </div>
            </Col>
            </Row>


            <Row className='aboutcompanyDetails'>
            <Col className='col-lg-8'>
                <div className='companyAboutInnerCol'>
                <div className='companyAboutInnerDiv'>
                    <div className='about_company'>
                        <h5>Job Description</h5>
                        <span>
                        {data.description}
                        </span>
                    </div>

                    <div className='requiredSkills'>
                        <h5>Skills:</h5>
                        <div className='mainRequiredSkills'>
                            {data.required_skills?.filter(item => item[1]).map((item, i) => (
                                    <h6 key={i}>{item[1]}</h6>
                            ))}
                        </div>
                    </div>

                    <div className='about_company'>
                        <h5>About Company</h5>
                        <span>
                        {/* Tech Innovators Inc. is a leading technology company specializing in innovative software solutions. We are committed to creating cutting-edge products that solve real-world problems and improve the lives of our users. Join our dynamic team and be a part of a company that values creativity, collaboration, and professional growth. */}
                        </span>
                    </div>


                    <div className='JobResponsibilities'>
                        <h5>Responsibilities </h5>
                            {/* <ul>
                                <li>Design, develop, test, and deploy software applications.</li>
                                <li>Collaborate with product managers, designers, and other engineers to create innovative solutions.</li>
                                <li>Write clean, maintainable, and efficient code.</li>
                                <li>Participate in code reviews and provide constructive feedback to peers.</li>
                                <li>Troubleshoot and debug applications to ensure optimal performance.</li>
                                <li>Stay up-to-date with emerging technologies and industry trends.</li>
                                <li>Contribute to the continuous improvement of our development processes and practices.</li>
                            </ul> */}
                        </div>

                    <button onClick={toggleVisibility} className='btn_showContent'>
                        {isVisible ? 'Hide Content' : 'Show Content'}</button>

                        {isVisible && (
                            <>
                            <div className='Requirements'>
                                <h5>Requirements </h5>
                                {/* <ul>
                                    <li>Bachelor’s degree in Computer Science, Engineering, or a related field.</li>
                                    <li>3+ years of experience in software development.</li>
                                    <li>Proficiency in one or more programming languages (e.g., Java, Python, C++).</li>
                                    <li>Experience with web development frameworks (e.g., React, Angular, Django).</li>
                                    <li>Strong understanding of software development principles and methodologies.</li>
                                    <li>Excellent problem-solving skills and attention to detail.</li>
                                    <li>Ability to work effectively in a team environment.</li>
                                    <li>Strong communication skills.</li>
                                </ul> */}
                            </div>

                                <div className='Preferred_Qualifications'>
                                <h5>Preferred Qualifications </h5>
                                    {/* <ul>
                                        <li>Master’s degree in Computer Science or a related field.</li>
                                        <li>Experience with cloud platforms (e.g., AWS, Azure, Google Cloud).</li>
                                        <li>Knowledge of DevOps practices and tools (e.g., Docker, Kubernetes).</li>
                                        <li>Familiarity with Agile development methodologies.</li>
                                    </ul> */}
                                </div>

                                <div className='Salary_and_Benefits'>
                                <h5>Salary and Benefits</h5>
                                <span>Salary: $100,000 - $130,000 per year, depending on experience and qualifications.</span>
                                </div>

                                {/* <div className='JobBenfits'>
                                    <h5>Benefits</h5>
                                    <ul>
                                        <li>Comprehensive health, dental, and vision insurance.</li>
                                        <li>401(k) plan with company match.</li>
                                        <li>Generous paid time off and holidays.</li>
                                        <li>Professional development opportunities.</li>
                                        <li>Flexible work hours and remote work options.</li>
                                        <li>Employee wellness programs.</li>
                                        <li>Onsite gym and recreational facilities.</li>
                                    </ul>
                                </div> */}
                            </>
                        )}
                </div>
                </div>
            </Col>

            <Col className='col-lg-4'>
                <div className='salarySectionCol'>
                    <div className='salaryAvg'>
                        {data.show_salary ? (
                            <h5>Salary : <LuIndianRupee/>{data.start_salary} - {data.end_salary} LPA</h5>
                        ) : (
                            <p>Salary: Confidential</p>
                        )}
                    </div>

                    <div className='jobSalaryDivWrapper'>
                        <div className='JobSalaryDetails'>
                            <div className='JobSalaryIcon'>
                                <HiOutlineMail size={26} color='#636363'/>
                            </div>
                            <div className='JobsalaryTxtDiv'>
                            <h6>{data.company.email}</h6>
                            <span>Email</span>
                            </div>
                        </div>

                        <div className='JobSalaryDetails'>
                            <div className='JobSalaryIcon'>
                                <GoFileDirectory size={26} color='#636363'/>
                            </div>
                            <div className='JobsalaryTxtDiv'>
                            <h6>{data.designation.designation}</h6>
                            <span>Industry</span>
                            </div>
                        </div>

                        <div className='JobSalaryDetails'>
                            <div className='JobSalaryIcon'>
                                <PiUserCheck size={26} color='#636363'/>
                            </div>
                            <div className='JobsalaryTxtDiv'>
                            {data.job_tags?.filter(item => item[1]).map((item, i) => (
                                <h6 key={i}>{item[1]},</h6>
                            ))}
                            <span>Employement Type</span>
                            </div>
                        </div>

                        <div className='JobSalaryDetails'>
                            <div className='JobSalaryIcon'>
                                <PiUserCheck size={26} color='#636363'/>
                            </div>
                            <div className='JobsalaryTxtDiv'>
                            <h6>{data.industry.industry}</h6>
                            <span>Job Function</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='salarySectionCol mt-3'>
                    <div className='salaryAvg'>
                        <h5>Required Skills:</h5>
                    </div>

                    <div className='jobSalaryDivWrapper'>

                        <div className='JobDetailsSkills'>
                            {data.required_skills?.filter(item => item[1]).map((item, i) => (
                                <h6 key={i}>{item[1]}</h6>
                            ))}
                        </div>

                        {/* <div className='JobSalaryDetails'>
                            <div className='JobSalaryIcon'>
                                <PiUserCheck size={26} color='#636363'/>
                            </div>
                            <div className='JobsalaryTxtDiv'>
                            {data.job_tags?.filter(item => item[1]).map((item, i) => (
                                <h6 key={i}>{item[1]},</h6>
                            ))}
                            <span>Employement Type</span>
                            </div>
                        </div> */}

                        {/* <div className='JobSalaryDetails'>
                            <div className='JobSalaryIcon'>
                                <PiUserCheck size={26} color='#636363'/>
                            </div>
                            <div className='JobsalaryTxtDiv'>
                            <h6>{data.industry.industry}</h6>
                            <span>Job Function</span>
                            </div>
                        </div> */}
                    </div>
                </div>

            {/* refer jobs */}
                {/* <div className='referalJobs'> 
                    <div>
                    <h5>Similar jobs that you might be interested in</h5>
                    </div>

                    <div className='simularJobs'>
                    <Row className='mt-4'>
                        <Col className='col-lg-12 p-0'>
                         {data.Jobdata.map((items) => {
                            return(
                            <>  
                            <div className='RecommendedcardMainWrapper'>
                                <div className='JobDetailcardWrapper'>
                                    <div className='cardfirstDiv'>
                                    <div>
                                        <img src={items.company_image} className=''/>
                                    </div>
                                    <div className='JobTitle'>
                                        <h5>{items.job_title}</h5>
                                        <div>
                                        <span>{items.company_name}</span>
                                        <span>{items.posted}</span>
                                        </div>
                                    </div>
                                    </div>
                                    <div className='cardSecondDiv'>
                                    <div>
                                        <span>Applicants:</span>
                                        <h6>{items.people_applyed}</h6>
                                    </div>
                                    <div className='jobLocations'>
                                        <PiMapPinDuotone color="#9a9999" className='mx-1'/>
                                        <span>{items.Job_location}</span>
                                    </div>
                                    </div>
                                    <div className='cardthirdDiv'>
                                     <ul>
                                        {items.skills_required.map((items, i) => (
                                            <li key={i}>{items}</li>
                                        ))}
                                    </ul> *
                                    </div>
                                </div>
                                </div>
                            </>
                            )
                        })} 
                        </Col>
                    </Row>
                    </div>
                </div> */}
            </Col>
        </Row>
    </div>
    ))}

      </Container>
    </section>

    <Footer/>
    </>
  )
}

export default ActivelyHiringJobs