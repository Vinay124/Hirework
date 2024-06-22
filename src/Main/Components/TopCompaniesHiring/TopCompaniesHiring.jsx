import React from 'react'
import './TopCompaniesHiring.moudle.css'
import { Col, Container, Row } from 'react-bootstrap'
import { IoIosArrowForward } from 'react-icons/io'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.css';

const TopCompaniesHiring = () => {

  const companyHiringJson = {
    "data":[
      {
        "id":1,
        "companyName":"MNCs",
        "hiringActivity":"2.5k+ are activity hiring",
        "companyImages":[
          "https://img.naukimg.com/logo_images/groups/v1/227652.gif",
          "https://img.naukimg.com/logo_images/groups/v1/188150.gif",
          "https://img.naukimg.com/logo_images/groups/v1/4576065.gif",
          "https://img.naukimg.com/logo_images/groups/v1/3739708.gif"
        ]
      },
      {
        "id":2,
        "companyName":"Product Based ",
        "hiringActivity":"958 are activity hiring",
        "companyImages":[
          "https://img.naukimg.com/logo_images/groups/v1/6015961.gif",
          "https://img.naukimg.com/logo_images/groups/v1/4672223.gif",
          "https://img.naukimg.com/logo_images/groups/v1/4576499.gif",
          "https://img.naukimg.com/logo_images/groups/v1/6237967.gif"
        ]
      },
      {
        "id":3,
        "companyName":"Banking & finance",
        "hiringActivity":"584 are activity hiring",
        "companyImages":[
          "https://img.naukimg.com/logo_images/groups/v1/6015961.gif",
          "https://img.naukimg.com/logo_images/groups/v1/4672223.gif",
          "https://img.naukimg.com/logo_images/groups/v1/4576499.gif",
          "https://img.naukimg.com/logo_images/groups/v1/6237967.gif"
        ]
      },
      {
        "id":4,
        "companyName":"Hospitality",
        "hiringActivity":"99 are activity hiring",
        "companyImages":[
          "https://img.naukimg.com/logo_images/groups/v1/6015961.gif",
          "https://img.naukimg.com/logo_images/groups/v1/4672223.gif",
          "https://img.naukimg.com/logo_images/groups/v1/4576499.gif",
          "https://img.naukimg.com/logo_images/groups/v1/6237967.gif"
        ]
      },
      {
        "id":5,
        "companyName":"StartUps",
        "hiringActivity":"8457 are activity hiring",
        "companyImages":[
          "https://img.naukimg.com/logo_images/groups/v1/6015961.gif",
          "https://img.naukimg.com/logo_images/groups/v1/4672223.gif",
          "https://img.naukimg.com/logo_images/groups/v1/4576499.gif",
          "https://img.naukimg.com/logo_images/groups/v1/6237967.gif"
        ]
      },
      {
        "id":6,
        "companyName":"Ed Tech",
        "hiringActivity":"25785 are activity hiring",
        "companyImages":[
          "https://img.naukimg.com/logo_images/groups/v1/6015961.gif",
          "https://img.naukimg.com/logo_images/groups/v1/4672223.gif",
          "https://img.naukimg.com/logo_images/groups/v1/4576499.gif",
          "https://img.naukimg.com/logo_images/groups/v1/6237967.gif"
        ]
      },
    ]
  }

  // swiper
   

  return (
    <section className='TopCompanyHiringSection'>
      <Container>
          <Row>
                <Col>
                    <div className='BrowserSectionHeadding'>
                        <div>
                            <h1>Top companies hiring now</h1>
                            <p>Showing companies based on reviews and recent job openings</p>
                        </div>
                        {/* <div className='categories'>
                            <h5>All Categories <IoIosArrowForward/></h5>
                        </div> */}
                    </div>
                </Col>
            </Row>

            <Row>
            <Swiper spaceBetween={10} navigation={true} 
            slidesPerView={4} loop={true}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000, 
              disableOnInteraction: false,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              620: {
                slidesPerView: 1,
                spaceBetween: 5,
              },
              640: {
                slidesPerView: 1,
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
              {companyHiringJson.data.map((companyHiring) => {
                return(
                  <SwiperSlide key={companyHiring.id}>
                      <div className='companyHiringCardWrapper'>
                          <div className='companyImages'>
                            {companyHiring.companyImages.map((imageUrl, index) => (
                              <img key={index} src={imageUrl} alt={`Company Image ${index}`}/>
                            ))}
                          </div>
                          
                          {/* company name */}
                          <div className='companyName'>
                            <h5>{companyHiring.companyName}</h5>
                            <span>{companyHiring.hiringActivity}</span>
                          </div>

                          {/* button */}
                          <div>
                            <button className='btn-apply'>Apply</button>
                          </div>
                        </div>
                  </SwiperSlide>
                )})}
            </Swiper>
            </Row>
      </Container>
    </section>
  )
}

export default TopCompaniesHiring