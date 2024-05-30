import React, { useState } from 'react'
import DashboardNav from '../../Components/DashboardNav/DashboardNav'
import Footer from '../../../Main/Components/Footer/Footer'
import { Col, Container, Row } from 'react-bootstrap'
import { RiMapPinLine } from "react-icons/ri";
import { BsDot } from "react-icons/bs";
import { LuBookmark } from "react-icons/lu";
import { BsBookmarkFill } from "react-icons/bs";
import { LuIndianRupee } from "react-icons/lu";
import './JobDetail.moudle.css'
import { HiOutlineMail } from "react-icons/hi";
import { GoFileDirectory } from "react-icons/go";
import { PiBuildingOfficeDuotone, PiMapPinDuotone } from "react-icons/pi";
import { PiUserCheck } from "react-icons/pi";
// social media
import { MdFacebook } from "react-icons/md";
import { RiTwitterXLine } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa6";

const JobDetail = () => {

  const JobJSONData = {
    "Jobdata" : [
        {
            "id":1,
            "company_image":"https://img.naukimg.com/logo_images/groups/v1/1293920.gif",
            "company_name":"Wipro",
            "job_title":"Data Scientist",
            "job_category":"Data Scientist",
            "Job_location":"Bengalore",
            "experience":"1 - 2 years",
            "posted":"Posted 1 day ago",
            "skills_required":["Python","Ruby","Machine Learning","Statistics", "AI", "ML"],
            "job_type":"PREMIUM",
            "people_applyed":50
        },
        {
            "id":2,
            "company_image":"https://img.naukimg.com/logo_images/groups/v1/481500.gif",
            "company_name":"SAP",
            "job_title":"Soc Analyst",
            "job_category":"CyberSecurity",
            "Job_location":"Bengalore",
            "experience":"1 - 2 years",
            "posted":"Posted 1 day ago",
            "skills_required":["Technical Proficiency","Cybersecurity Fundamentals","Incident Detection and Response","Threat Intelligence"],
            "job_type":"PREMIUM",
            "people_applyed":10
        },
        {
            "id":3,
            "company_image":"https://img.naukimg.com/logo_images/groups/v1/4586347.gif",
            "company_name":"Robert Bosch",
            "job_title":"iOS Developert",
            "job_category":"CyberSecurity",
            "Job_location":"Bengalore",
            "experience":"3 - 5 Years",
            "posted":"Posted 5 day ago",
            "skills_required":["Python","Ruby","Machine Learning","Statistics", "AI", "ML"],
            "job_type":"PREMIUM",
            "people_applyed":80
        },
        {
            "id":2,
            "company_image":"https://www.naukri.com/hotjobs/images/v3/Accen_nov20.gif",
            "company_name":"IBM",
            "job_title":"Soc Analyst",
            "job_category":"CyberSecurity",
            "Job_location":"Bengalore",
            "experience":"1 - 2 years",
            "posted":"Posted 1 day ago",
            "skills_required":["Python","Ruby","Machine Learning","Statistics", "AI", "ML"],
            "job_type":"PREMIUM",
            "people_applyed":30
        },
        {
            "id":2,
            "company_image":"https://img.naukimg.com/logo_images/groups/v1/41608.gif",
            "company_name":"Microsoft",
            "job_title":"Soc Analyst",
            "job_category":"CyberSecurity",
            "Job_location":"Bengalore",
            "experience":"1 - 2 years",
            "posted":"Posted 1 day ago",
            "skills_required":["Python","Ruby","Machine Learning","Statistics", "AI", "ML"],
            "job_type":"PREMIUM",
            "people_applyed":100
        },
        {
            "id":2,
            "company_image":"https://img.naukimg.com/logo_images/groups/v1/4615427.gif",
            "company_name":"Huawei",
            "job_title":"Soc Analyst",
            "job_category":"CyberSecurity",
            "Job_location":"Bengalore",
            "experience":"1 - 2 years",
            "posted":"Posted 1 day ago",
            "skills_required":["Python","Ruby","Machine Learning","Statistics", "AI", "ML"],
            "job_type":"PREMIUM",
            "people_applyed":66
        },
    ]
};


    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
      setIsVisible(!isVisible);
    };


  return (
    <>
    <DashboardNav/>
    
      <section className='jobdetailSection'>
        <Container>

          <Row>
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
                        <h4>Assocate Project Manager</h4>
                        <span>Robert Bosch</span>
                      </div>
                      
                     <div className='JoblocationDetails'>
                      <span>
                      <RiMapPinLine className='mx-1'/>
                      Bengalore </span>

                      <span>
                        <BsDot/>
                        20 hours ago
                      </span>
                      
                      <span>
                       <BsDot/>Full Time</span>
                     </div>
                    </div>

                    <div className='jobCardButtonDiv'>
                      <div>
                        <button className='btn-saveJob'>
                          <LuBookmark className='mx-2' size={20}/> Save Job
                        </button>
                      </div>
                      <div>
                        <button className='btn-Jobapply'>Apply</button>
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
                        <h5>About Company</h5>
                        <span>
                        Tech Innovators Inc. is a leading technology company specializing in innovative software solutions. We are committed to creating cutting-edge products that solve real-world problems and improve the lives of our users. Join our dynamic team and be a part of a company that values creativity, collaboration, and professional growth.
                        </span>
                    </div>

                    <div className='JobDescriptionDetails'>
                      <h5>Job Description</h5>
                      <span>As a Software Engineer at Tech Innovators Inc., you will be responsible for designing, developing, and maintaining high-quality software applications. You will work closely with cross-functional teams to deliver robust and scalable solutions that meet the needs of our customers.</span>
                    </div>

                    <div className='JobResponsibilities'>
                        <h5>Responsibilities </h5>
                          <ul>
                              <li>Design, develop, test, and deploy software applications.</li>
                              <li>Collaborate with product managers, designers, and other engineers to create innovative solutions.</li>
                              <li>Write clean, maintainable, and efficient code.</li>
                              <li>Participate in code reviews and provide constructive feedback to peers.</li>
                              <li>Troubleshoot and debug applications to ensure optimal performance.</li>
                              <li>Stay up-to-date with emerging technologies and industry trends.</li>
                              <li>Contribute to the continuous improvement of our development processes and practices.</li>
                          </ul>
                      </div>

                    <button onClick={toggleVisibility} className='btn_showContent'>
                        {isVisible ? 'Hide Content' : 'Show Content'}</button>

                        {isVisible && (
                          <>
                            <div className='Requirements'>
                              <h5>Requirements </h5>
                                <ul>
                                    <li>Bachelor’s degree in Computer Science, Engineering, or a related field.</li>
                                    <li>3+ years of experience in software development.</li>
                                    <li>Proficiency in one or more programming languages (e.g., Java, Python, C++).</li>
                                    <li>Experience with web development frameworks (e.g., React, Angular, Django).</li>
                                    <li>Strong understanding of software development principles and methodologies.</li>
                                    <li>Excellent problem-solving skills and attention to detail.</li>
                                    <li>Ability to work effectively in a team environment.</li>
                                    <li>Strong communication skills.</li>
                                </ul>
                            </div>

                              <div className='Preferred_Qualifications'>
                                <h5>Preferred Qualifications </h5>
                                  <ul>
                                      <li>Master’s degree in Computer Science or a related field.</li>
                                      <li>Experience with cloud platforms (e.g., AWS, Azure, Google Cloud).</li>
                                      <li>Knowledge of DevOps practices and tools (e.g., Docker, Kubernetes).</li>
                                      <li>Familiarity with Agile development methodologies.</li>
                                  </ul>
                              </div>

                              <div className='Salary_and_Benefits'>
                                <h5>Salary and Benefits</h5>
                                <span>Salary: $100,000 - $130,000 per year, depending on experience and qualifications.</span>
                              </div>

                              <div className='JobBenfits'>
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
                              </div>
                          </>
                        )}
                </div>
              </div>
            </Col>

            <Col className='col-lg-4'>
              <div className='salarySectionCol'>
                  <div className='salaryAvg'>
                      <h5>
                      <LuIndianRupee/> 
                      30,000 - 80,0000</h5>
                      <span>Avg. salary</span>
                  </div>

                  <div className='jobSalaryDivWrapper'>
                      <div className='JobSalaryDetails'>
                          <div className='JobSalaryIcon'>
                              <HiOutlineMail size={26} color='#636363'/>
                          </div>
                          <div className='JobsalaryTxtDiv'>
                            <h6>jobs@microsoft.com</h6>
                            <span>Email</span>
                          </div>
                      </div>

                      <div className='JobSalaryDetails'>
                          <div className='JobSalaryIcon'>
                              <GoFileDirectory size={26} color='#636363'/>
                          </div>
                          <div className='JobsalaryTxtDiv'>
                            <h6>Software and Hardware</h6>
                            <span>Industry</span>
                          </div>
                      </div>

                      <div className='JobSalaryDetails'>
                          <div className='JobSalaryIcon'>
                              <PiUserCheck size={26} color='#636363'/>
                          </div>
                          <div className='JobsalaryTxtDiv'>
                            <h6>Full-Time</h6>
                            <span>Employement Type</span>
                          </div>
                      </div>

                      <div className='JobSalaryDetails'>
                          <div className='JobSalaryIcon'>
                              <PiUserCheck size={26} color='#636363'/>
                          </div>
                          <div className='JobsalaryTxtDiv'>
                            <h6>Informaction Technology</h6>
                            <span>Job Function</span>
                          </div>
                      </div>

                  </div>



              </div>

            {/* refer jobs */}
              <div className='referalJobs'> 
                  <div>
                    <h5>Similar jobs that you might be interested in</h5>
                  </div>

                  <div className='simularJobs'>
                    <Row className='mt-4'>
                      <Col className='col-lg-12 p-0'>
                        {JobJSONData.Jobdata.map((items) => {
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
                                    {/* <ul>
                                      {items.skills_required.map((items, i) => (
                                          <li key={i}>{items}</li>
                                      ))}
                                    </ul> */}
                                  </div>
                                </div>
                              </div>
                            </>
                          )
                        })}
                      </Col>
                    </Row>
                  </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Footer/>
    </>
  )
}

export default JobDetail