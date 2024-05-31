import React, { useState } from 'react'
import './SponsoredCompanies.moudle.css'
import { Col, Container, Row } from 'react-bootstrap'
import starIcon from '../../../assets/icons/star.svg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

const SponsoredCompanies = () => {

    const companyDetailJson = {
        "data": [
            {
                "id":1,
                "company_image":"https://demoapus1.com/jobtex-new/wp-content/uploads/2023/05/e11.png",
                "company_Name":"Acme Corporation",
                "company_rating":4.0,
                "company_review":80,
                "company_description":"Global Manufacturing Group is a renowned manufacturing and production company, delivering high-quality products across various industries.",
                "company_services":["BFSI"]
            },
            {
                "id":2,
                "company_image":"https://demoapus1.com/jobtex-new/wp-content/uploads/2023/05/e6.png",
                "company_Name":"Movate Technologies",
                "company_rating":4.0,
                "company_review":80,
                "company_description":"Global Manufacturing Group is a renowned manufacturing and production company, delivering high-quality products across various industries.",
                "company_services":["IT Services"]
            },
            {
                "id":3,
                "company_image":"https://demoapus1.com/jobtex-new/wp-content/uploads/2023/05/e7.png",
                "company_Name":"PruTech Solutions",
                "company_rating":4.0,
                "company_review":80,
                "company_description":"Global Manufacturing Group is a renowned manufacturing and production company, delivering high-quality products across various industries.",
                "company_services":["BFSI","IT Services"]
            },
            {
                "id":4,
                "company_image":"https://demoapus1.com/jobtex-new/wp-content/uploads/2023/05/e9.png",
                "company_Name":"Infosys",
                "company_rating":4.0,
                "company_review":80,
                "company_description":"Global Manufacturing Group is a renowned manufacturing and production company, delivering high-quality products across various industries.",
                "company_services":["IT Services"]
            },
            {
                "id":5,
                "company_image":"https://demoapus1.com/jobtex-new/wp-content/uploads/2023/05/e10.png",
                "company_Name":"NTT DATA BUSINESS SOLUTIONS",
                "company_rating":4.0,
                "company_review":80,
                "company_description":"Global Manufacturing Group is a renowned manufacturing and production company, delivering high-quality products across various industries.",
                "company_services":["BFSI"]
            },
            {
                "id":6,
                "company_image":"https://demoapus1.com/jobtex-new/wp-content/uploads/2023/05/e8.png",
                "company_Name":"TCS",
                "company_rating":4.0,
                "company_review":80,
                "company_description":"Global Manufacturing Group is a renowned manufacturing and production company, delivering high-quality products across various industries.",
                "company_services":["BFSI","IT Services"]
            },
            {
                "id":7,
                "company_image":"https://demoapus1.com/jobtex-new/wp-content/uploads/2023/05/e3.png",
                "company_Name":"Newgen",
                "company_rating":4.0,
                "company_review":80,
                "company_description":"Global Manufacturing Group is a renowned manufacturing and production company, delivering high-quality products across various industries.",
                "company_services":["BFSI","IT Services"]
            },
            {
                "id":8,
                "company_image":"https://demoapus1.com/jobtex-new/wp-content/uploads/2023/05/e3.png",
                "company_Name":"Encora",
                "company_rating":4.0,
                "company_review":80,
                "company_description":"Global Manufacturing Group is a renowned manufacturing and production company, delivering high-quality products across various industries.",
                "company_services":["BFSI","IT Services"]
            },
            {
                "id":9,
                "company_image":"https://demoapus1.com/jobtex-new/wp-content/uploads/2023/05/e3.png",
                "company_Name":"Virtusa",
                "company_rating":4.0,
                "company_review":80,
                "company_description":"Global Manufacturing Group is a renowned manufacturing and production company, delivering high-quality products across various industries.",
                "company_services":["BFSI"]
            },
            {
                "id":10,
                "company_image":"https://demoapus1.com/jobtex-new/wp-content/uploads/2023/05/e3.png",
                "company_Name":"Synechron",
                "company_rating":4.0,
                "company_review":80,
                "company_description":"Global Manufacturing Group is a renowned manufacturing and production company, delivering high-quality products across various industries.",
                "company_services":["BFSI","IT Services"]
            },
            
        ]
    };

    const [selectedService, setSelectedService] = useState('All');

    const filteredData = selectedService === 'All' ? companyDetailJson.data : companyDetailJson.data.filter(data => data.company_services.includes(selectedService));


  return (
    <section className='SponsoredHiring'>
        <Container>
            <Row>
                <Col>
                    <div className='SponsoredHiringHeadding'>
                        <h1>Sponsored Companies Hiring</h1>
                        <p>The federal government offers unique hiring paths to help hire individuals that represent our diverse socity.</p>
                    </div>
                </Col>
            </Row>

            {/* Tabs */}
            <div className='dropdownButtonWrappers'>
                {/* All IT Services BFSI */}
                <button className={selectedService === 'All' ? 'dropdownBtns active' :"dropdownBtns"} onClick={() => setSelectedService('All')}>All</button>
                <button className={selectedService === 'IT Services' ? 'dropdownBtns active' :"dropdownBtns"} onClick={() => setSelectedService('IT Services')}>IT Services</button>
                <button className={selectedService === 'BFSI' ? 'dropdownBtns active' :"dropdownBtns"} onClick={() => setSelectedService('BFSI')}>BFSI</button>
            </div>

            <Row>
                <Swiper spaceBetween={5} slidesPerView={5} autoplay={true}          
                  breakpoints={{
                    320: {
                      slidesPerView: 1,
                      spaceBetween: 10,
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
                      slidesPerView: 3,
                      spaceBetween: 10,
                    },
                  }}>
                {filteredData.map((company, index) => (
                    <SwiperSlide>
                    <div key={index}>
                        <div className='SponsoredHiringcard'>
                            <div className='SponsoredcompanyLogoWrapper'>
                                <img src={company.company_image} className='SponsoredcompanyLogo'/>
                            </div>
                            <div className='SponsoredcompanyReviewRating'>
                                <div>
                                    <h5>{company.company_Name}</h5>
                                </div>
                                <div className='SponsoredstarRatingWrapper'>
                                    <div>
                                        <span className='mx-2'>{company.company_review}+ reviews</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div className='SponsoredcompanyServicesTag'>
                                {company.company_services.map((item, i) => (
                                    <span className='SponsoredCompanyTags' key={i}>{item}</span>
                                ))}
                            </div>
                            
                            <div className='SponsoredviewJobsDiv'>
                                <button className='Sponsoredbtn-viewJobs'>View Jobs</button>
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

export default SponsoredCompanies