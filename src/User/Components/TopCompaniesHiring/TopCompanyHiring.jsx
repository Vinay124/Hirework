import React from 'react'
import './TopCompanies.moudle.css'
import { Col, Row } from 'react-bootstrap'
import { PiMapPinDuotone } from 'react-icons/pi'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

const TopCompanyHiring = () => {

  const TopCompaniesJsonData = {
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

console.log(TopCompaniesJsonData.companies)

  return (
    <section className='Topcompanies'>  
        <div className='TopcompaniesHeadding'>
            <div>
                <h5>Top Companies</h5>
                <span>Top Companies Hiring Software Engineer </span>
            </div>
                <div>
                    <button className='btn-viewAllJobs'>View all</button>
                </div>
        </div>

        <div>
            <Row className='topCompanyHiringRowDiv'>
              <Swiper spaceBetween={0} slidesPerView={1.7}
              breakpoints={{
                651: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
              }}>
                {TopCompaniesJsonData.companies.map((topcompanies) => {
                    return(
                      <SwiperSlide key={topcompanies.id}>
                         <div className='RecommendedcardMainWrapper'> 
                            <div className='RecommendedcardWrapper'>
                            <div className='cardfirstDiv'>
                                <div>
                                <img src={topcompanies.company_logo} className=''/>
                                </div>
                                <div className='JobTitle'>
                                <h5>{topcompanies.job_title}</h5>
                                <div>
                                    <span>{topcompanies.company_name}</span>
                                    <span>{topcompanies.posted}</span>
                                </div>
                                </div>
                            </div>
                            <div className='cardSecondDiv'>
                                <div>
                                <span>Applicants:</span>
                                <h6>{topcompanies.people_applyed}</h6>
                                </div>
                                <div className='jobLocations'>
                                <PiMapPinDuotone color="#9a9999" className='mx-1'/>
                                <span>{topcompanies.job_location}</span>
                                </div>
                            </div>
                            <div className='cardthirdDiv'>
                                <ul>
                                {topcompanies.skills_required.map((items, i) => (
                                    <li key={i}>{items}</li>
                                ))}
                                </ul>
                            </div>
                        </div>
                        </div>
                      </SwiperSlide>
                    )
                })}
            </Swiper>
            </Row>
        </div>
    </section>
  )
}

export default TopCompanyHiring