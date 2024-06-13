import React from 'react'
import { useSelector } from 'react-redux'
import DashboardNav from '../../../User/Components/DashboardNav/DashboardNav';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';
import { FaRegBookmark, FaRegEyeSlash } from 'react-icons/fa';
import JobFilter from '../JobFilter/JobFilter';
import { Col, Container, Row } from 'react-bootstrap';
import { BiSolidMap } from 'react-icons/bi';

const JobSearchResults = () => {

  const searchResults = useSelector((state) => state.searchResults);


  return (
    <>
    <DashboardNav/>
    <section className='jobDetails'>
            <Container>
            <Row>
                <Col className='jobsHeaddingMain'>
                    <div>
                        {/* <h3>Recent Jobs</h3> */}
                    </div>
                </Col>
            </Row>

            <Row className='m-0 jobDetailsRow'>
                    <div className='jobHeadding'>
                        <h2>Search Jobs</h2>
                    </div>
                <Col className='col-lg-8  JobSearchdataDiv'>
                {searchResults.length === 0 && <p> no Results found</p>}
                    {searchResults.map((job) => (
                                <Link key={job.id}>
                                    <div className='jobdetailsCardWrapper '>
                                    <div className='RecentJobsFistCard'>
                                        <div>
                                            <img src={job.company_logo} className='' alt=''/>
                                        </div>
                                        <div className='RecentjobTitle'>
                                                <h4>{job.job_title}</h4>
                                                <div>
                                                    <span>{job.company_name}</span>
                                                </div>
                                        </div>
                                    </div>
                                    <div className='RecentJobsSecondCard'>
                                        <div>
                                            {/* {job.experienceIcon} */}
                                            <span>{job.experience}</span>
                                        </div>
                                        <div>
                                            {/* {job.salary_icon} */}
                                            <span>{job.salary}</span>
                                        </div>
                                        <div>
                                            <BiSolidMap size={23} className='mx-2'/>
                                            <span>{job.job_location}</span>
                                        </div>
                                    </div>
                                    <div className='RecentJobsThirdCard'>
                                        <div className='jobRolesandResponsibility'>
                                            <ul>
                                                {job.roles_responsibility.map((data, index) => (
                                                    <li key={index}>{data}</li>
                                                ))}
                                            </ul>
                                        </div>
                                        
                                        <div className='SkillsDivWrapper'>
                                            <ul>
                                                <span>Skills :</span>
                                                {job.skills_required.map((skills,i) => (
                                                    <li key={i}>{skills}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    
                                    {/* forth div */}
                                    <div className='Jobpostdetails'>
                                        <div>
                                            <span>{job.posted}</span>
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
                            ))}
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

export default JobSearchResults