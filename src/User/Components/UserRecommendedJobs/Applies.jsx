import React from 'react'
import './UserRecommendedJobs.moudle.css'
import { PiMapPinDuotone } from "react-icons/pi";
import { Col, Row } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

const Applies = ({JobData}) => {

  return (
    <>
    <section>
      <Row>
        <Swiper spaceBetween={0} slidesPerView={1.6}>
           {JobData.map((items) => {
          return(
            <SwiperSlide key={items.id}>
          <div className='RecommendedcardMainWrapper'>
            <div className='RecommendedcardWrapper'>
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
                </ul>
              </div>
            </div>
          </div>
          </SwiperSlide>
          )
        })}
          
        </Swiper>
       
      </Row>
    </section>
  </>
  )
}

export default Applies