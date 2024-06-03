import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './ActivelyHiring.moudle.css'
import starIcon from '../../../assets/icons/star.svg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

const ActivelyHiring = () => {

    const companyDetailJson = {
        "data": [
            {
                "id":1,
                "company_image":"https://demoapus1.com/jobtex-new/wp-content/uploads/2023/05/e11.png",
                "company_Name":"Acme Corporation",
                "company_rating":4.0,
                "company_review":80,
                "company_description":"Global Manufacturing Group is a renowned manufacturing and production company, delivering high-quality products across various industries.",
                "company_services":["IT Services","Technology"]
            },
            {
                "id":2,
                "company_image":"https://demoapus1.com/jobtex-new/wp-content/uploads/2023/05/e6.png",
                "company_Name":"Movate Technologies",
                "company_rating":4.0,
                "company_review":80,
                "company_description":"Global Manufacturing Group is a renowned manufacturing and production company, delivering high-quality products across various industries.",
                "company_services":["Healthcare & Life Sciences","Technology","BFSI","BPM"]
            },
            {
                "id":3,
                "company_image":"https://demoapus1.com/jobtex-new/wp-content/uploads/2023/05/e7.png",
                "company_Name":"PruTech Solutions",
                "company_rating":4.0,
                "company_review":80,
                "company_description":"Global Manufacturing Group is a renowned manufacturing and production company, delivering high-quality products across various industries.",
                "company_services":["IT Services","Technology,Consumer","Retail & Hospitality"]
            },
            {
                "id":4,
                "company_image":"https://demoapus1.com/jobtex-new/wp-content/uploads/2023/05/e9.png",
                "company_Name":"Infosys",
                "company_rating":4.0,
                "company_review":80,
                "company_description":"Global Manufacturing Group is a renowned manufacturing and production company, delivering high-quality products across various industries.",
                "company_services":["Infrastructure","Transport & Real Estate"]
            },
            {
                "id":5,
                "company_image":"https://demoapus1.com/jobtex-new/wp-content/uploads/2023/05/e10.png",
                "company_Name":"NTT DATA BUSINESS SOLUTIONS",
                "company_rating":4.0,
                "company_review":80,
                "company_description":"Global Manufacturing Group is a renowned manufacturing and production company, delivering high-quality products across various industries.",
                "company_services":["Manufacturing & Production","BFSI","Professional Services"]
            },
            {
                "id":6,
                "company_image":"https://demoapus1.com/jobtex-new/wp-content/uploads/2023/05/e8.png",
                "company_Name":"TCS",
                "company_rating":4.0,
                "company_review":80,
                "company_description":"Global Manufacturing Group is a renowned manufacturing and production company, delivering high-quality products across various industries.",
                "company_services":["IT Services","Technology","Consumer, Retail & Hospitality","BPM","Professional Services"]
            },
            {
                "id":7,
                "company_image":"https://demoapus1.com/jobtex-new/wp-content/uploads/2023/05/e3.png",
                "company_Name":"Newgen",
                "company_rating":4.0,
                "company_review":80,
                "company_description":"Global Manufacturing Group is a renowned manufacturing and production company, delivering high-quality products across various industries.",
                "company_services":["Consumer","Retail & Hospitality","B2B"]
            },
            {
                "id":8,
                "company_image":"https://demoapus1.com/jobtex-new/wp-content/uploads/2023/05/e3.png",
                "company_Name":"Encora",
                "company_rating":4.0,
                "company_review":80,
                "company_description":"Global Manufacturing Group is a renowned manufacturing and production company, delivering high-quality products across various industries.",
                "company_services":["Consumer, Retail & Hospitality","B2B","Professional Services"]
            },
            {
                "id":9,
                "company_image":"https://demoapus1.com/jobtex-new/wp-content/uploads/2023/05/e3.png",
                "company_Name":"Virtusa",
                "company_rating":4.0,
                "company_review":80,
                "company_description":"Global Manufacturing Group is a renowned manufacturing and production company, delivering high-quality products across various industries.",
                "company_services":["Consumer","Retail & Hospitality","B2B","BPM"]
            },
            {
                "id":10,
                "company_image":"https://demoapus1.com/jobtex-new/wp-content/uploads/2023/05/e3.png",
                "company_Name":"Synechron",
                "company_rating":4.0,
                "company_review":80,
                "company_description":"Global Manufacturing Group is a renowned manufacturing and production company, delivering high-quality products across various industries.",
                "company_services":["Consumer","Retail & Hospitality","B2B"]
            },
            
        ]
    };

    const [selectedService, setSelectedService] = useState('All');

    const filteredData = selectedService === 'All' ? companyDetailJson.data : companyDetailJson.data.filter(data => data.company_services.includes(selectedService));

  return (
    <section className='ActivelyHiring'>
        <Container>
            <Row>
                <Col>
                    <div className='ActivelyHiringHeadding'>
                        <h1>Featured Companies Actively Hiring</h1>
                        <p>The federal government offers unique hiring paths to help hire individuals that represent our diverse socity.</p>
                    </div>
                </Col>
            </Row>

            {/* Tabs */}
            <div className='dropdownButtonWrappers'>
                <button className={selectedService === 'All' ? 'dropdownBtns active' :"dropdownBtns"} onClick={() => setSelectedService('All')}>All</button>
                <button className={selectedService === 'Consumer, Retail & Hospitality' ? 'dropdownBtns active' :"dropdownBtns"}  onClick={() => setSelectedService('Consumer, Retail & Hospitality')}>Consumer, Retail & Hospitality</button>
                <button className={selectedService === 'B2B' ? 'dropdownBtns active' :"dropdownBtns"} onClick={() => setSelectedService('B2B')}>B2B</button>
                <button className={selectedService === 'IT Services' ? 'dropdownBtns active' :"dropdownBtns"} onClick={() => setSelectedService('IT Services')}>IT Services</button>
                <button className={selectedService === 'Technology' ? 'dropdownBtns active' :"dropdownBtns"} onClick={() => setSelectedService('Technology')}>Technology</button>
                <button className={selectedService === 'Infrastructure' ? 'dropdownBtns active' :"dropdownBtns"} onClick={() => setSelectedService('Infrastructure')}>Infrastructure</button>
                <button className={selectedService === 'Transport & Real Estate' ? 'dropdownBtns active' :"dropdownBtns"} onClick={() => setSelectedService('Transport & Real Estate')}>Transport & Real Estate</button>
                <button className={selectedService === 'Professional Services' ? 'dropdownBtns active' :"dropdownBtns"} onClick={() => setSelectedService('Professional Services')}>Professional Services</button>
                <button className={selectedService === 'BFSI' ? 'dropdownBtns active' :"dropdownBtns"} onClick={() => setSelectedService('BFSI')}>BFSI</button>
                <button className={selectedService === 'Healthcare & Life Sciences' ? 'dropdownBtns active' :"dropdownBtns"} onClick={() => setSelectedService('Healthcare & Life Sciences')}>HealthCare</button>
                <button className={selectedService === 'BPM' ? 'dropdownBtns active' :"dropdownBtns"} onClick={() => setSelectedService('BPM')}>BPM</button>
            </div>

            <Row>
                <Swiper spaceBetween={5} slidesPerView={3}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                651: {
                  slidesPerView: 1,
                  spaceBetween: 5,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
              }}>
                {filteredData.map((company, index) => (
                    <SwiperSlide>
                    <div key={index}>
                        <div className='ActivelyHiringcard'>
                            {/*logo  Company name , review */}
                            <div className='companyLogoWrapper'>
                                <img src={company.company_image} className='companyLogo'/>
                            </div>
                            <div className='companyReviewRating'>
                                <div>
                                    <h5>{company.company_Name}</h5>
                                </div>
                                <div className='starRatingWrapper'>
                                    <div>
                                        <img src={starIcon} className='staricon'/>
                                    </div>
                                    <div>
                                        <span className='mx-2'>{company.company_rating}</span>
                                        |
                                        <span className='mx-2'>{company.company_review}+ reviews</span>
                                    </div>
                                </div>
                            </div>
                            {/* company desc */}
                            <div className='companyDescription'>
                                <p>{company.company_description}</p>
                            </div>
                            {/* company services  button */}
                            <div className='companyServicesTag'>
                                {company.company_services.map((item, i) => (
                                    <span className='CompanyTags' key={i}>{item}</span>
                                ))}
                            </div>
                            
                            <div className='viewJobsDiv'>
                                <button className='btn-viewJobs'>View Jobs</button>
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>
                ))}
                </Swiper>
            </Row>

            <Row>
                <Col></Col>
            </Row>
        </Container>
    </section>
  )
}

export default ActivelyHiring