import React from 'react'
// import './SponsorHiring.moudle.css'
import { Col, Row } from 'react-bootstrap'
import { PiMapPinDuotone } from 'react-icons/pi'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';


const SponsorHiring = () => {

    const SponsorCompaniesJsonData = {
        "companies": [
            {
                "id":1,
                "company_logo":"https://demoapus1.com/jobtex-new/wp-content/uploads/2023/05/e1.png",
                "company_name":"Wipro",
                "job_title":"Data Scientist",
                "job_category":"Data Scientist",
                "job_location":"Bengalore",
                "experience":"1 - 2 years",
                "posted":"Posted 10 day ago",
                "skills_required":["Python","Ruby","Machine Learning","Statistics", "AI", "ML"],
                "job_type":"PREMIUM",
                "people_applyed":50
            },
            {
                "id":2,
                "company_logo":"https://demoapus1.com/jobtex-new/wp-content/uploads/2023/05/e3.png",
                "company_name":"TCS",
                "job_title":"Soc Analyst",
                "job_category":"CyberSecurity",
                "job_location":"Bengalore",
                "experience":"1 - 2 years",
                "posted":"Posted 1 day ago",
                "skills_required":["Technical Proficiency","Cybersecurity Fundamentals","Incident Detection and Response","Threat Intelligence"],
                "job_type":"PREMIUM",
                "people_applyed":500
            },
            {
                "id":3,
                "company_logo":"https://demoapus1.com/jobtex-new/wp-content/uploads/2023/05/e11.png",
                "company_name":"Robert Bosch",
                "job_title":"FullStack Developert",
                "job_category":"Development",
                "job_location":"Bengalore",
                "experience":"3 - 5 Years",
                "posted":"Posted 5 day ago",
                "skills_required":["Python","Ruby","Machine Learning","Statistics", "AI", "ML"],
                "job_type":"PREMIUM",
                "people_applyed":80
            },
            {
                "id":4,
                "company_logo":"https://demoapus1.com/jobtex-new/wp-content/uploads/2023/05/e6.png",
                "company_name":"IBM",
                "job_title":"Soc Analyst",
                "job_category":"CyberSecurity",
                "job_location":"Bengalore",
                "experience":"1 - 2 years",
                "posted":"Posted 1 day ago",
                "skills_required":["Python","Ruby","Machine Learning","Statistics", "AI", "ML"],
                "job_type":"PREMIUM",
                "people_applyed":400
            },
            {
                "id":5,
                "company_logo":"https://demoapus1.com/jobtex-new/wp-content/uploads/2023/05/e7.png",
                "company_name":"Microsoft",
                "job_title":"Soc Analyst",
                "job_category":"CyberSecurity",
                "job_location":"Mumbai",
                "experience":"1 - 2 years",
                "posted":"Posted 10 days ago",
                "skills_required":["Python","Ruby","Machine Learning","Statistics", "AI", "ML"],
                "job_type":"PREMIUM",
                "people_applyed":50
            },
        ]
    };

  return (
    <>
       <section className='Topcompanies'>  
        <div className='TopcompaniesHeadding'>
            <div>
                <h5>Sponsor Companies</h5>
                <span>Sponsor Companies Hiring </span>
            </div>
            <div>
                 <button className='btn-viewAllJobs'>View all</button>
            </div>
        </div>

        <div>
            <Row>
            <Swiper spaceBetween={0} slidesPerView={1.7}>
                {SponsorCompaniesJsonData.companies.map((sponsor) => {
                    return(
                    <>
                    <SwiperSlide key={sponsor.id}>
                    <div  >
                            <div className='RecommendedcardWrapper'>
                            <div className='cardfirstDiv'>
                                <div>
                                <img src={sponsor.company_logo} className=''/>
                                </div>
                                <div className='JobTitle'>
                                <h5>{sponsor.job_title}</h5>
                                <div>
                                    <span>{sponsor.company_name}</span>
                                    <span>{sponsor.posted}</span>
                                </div>
                                </div>
                            </div>
                            <div className='cardSecondDiv'>
                                <div>
                                    <span>Applicants:</span>
                                    <h6>{sponsor.people_applyed}</h6>
                                </div>
                                <div className='jobLocations'>
                                    <PiMapPinDuotone color="#9a9999" className='mx-1'/>
                                    <span>{sponsor.job_location}</span>
                                </div>
                            </div>
                            <div className='cardthirdDiv'>
                                <ul>
                                {sponsor.skills_required.map((items, i) => (
                                    <li key={i}>{items}</li>
                                ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>
                    </>
                    )
                })}
                </Swiper>
            </Row>
        </div>
    </section>
    </>
  )
}

export default SponsorHiring