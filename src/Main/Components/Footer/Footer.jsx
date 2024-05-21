import React from 'react'
import './Footer.moudle.css'
import { Col, Container, Row } from 'react-bootstrap'

import { FaFacebookSquare } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { RiTwitterXLine } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { LuMapPin } from "react-icons/lu";
import { RiSendPlaneFill } from "react-icons/ri";

import AppStore from '../../../assets/SocialBanner/AppStore.png'
import Googleplay from '../../../assets/SocialBanner/GooglePlay.png'
import { BiSolidPhoneCall } from "react-icons/bi";




const Footer = () => {
  return (
    <footer className='Footer'>
      <Container>
        <div className='footerinnerDiv'>
          <div className='LogoHeadding'>
              <h3>Hire <span>Work</span></h3>
          </div>

            <div className='followUsdiv'>
              <h5>Follow Us:</h5>
                <ul>
                  <li>
                    <FaFacebookSquare size={25}/>
                  </li>
                  <li>
                    <BsInstagram size={25}/>
                  </li>
                  <li>
                    <RiTwitterXLine size={25}/>
                  </li>
                  <li>
                    <FaLinkedinIn size={25}/>
                  </li>
                </ul>
            </div>
        </div>

        <Row className='footerMainRow'>
          <Col className="col-lg-4">
            <div>
              <div className='footerTextWrapper'>
                <div>
                  <BiSolidPhoneCall size={30} color="#131212" className='mx-3'/>
                </div>
                <div>
                  <span>Need Help 24/7</span>
                  <h6>001-1234-8888</h6>
                </div>
              </div>

                <div className='footerDescription'>
                  <p>Job Searching Just Got Easy. Use Jobtex to run a hiring site and earn money in the process!</p>
                </div>

                <div className='addressDiv'>
                  <LuMapPin size={20}/>
                  <span> 118 E 128th St, East Chicago, IN 46312, US </span>
                </div>

              <div>
                <form className='newsLetterForm'>
                  <input type='email' placeholder='NewsLetter'/>
                    <button className='btn-newsletterNewsletter'>
                      <RiSendPlaneFill color='#ffffff' size={23}/>
                    </button>
                </form>
              </div>
            </div>
          </Col>

          <Col className="col-lg-2 text-center">
            <div className='footerinnerTxt'>
              <h6>Quick Links</h6>
            </div>
            <div className='quickLinks'>
                <ul>
                  <li>Job Packages</li>
                  <li>Post New Job</li>
                  <li>Jobs Listing</li>
                  <li>Candidates</li>
                  <li>Employers</li>
                  <li>Terms of Use</li>
                </ul>
            </div>
          </Col>

          <Col className="col-lg-2 text-center">
            <div className='footerinnerTxt'>
              <h6>For Candidates</h6>
            </div>
            <div className='ForCandidates'>
              <ul>
                <li>User Dashboard</li>
                <li>CV Packages</li>
                <li>Candidate Grid</li>
                <li>Messages</li>
                <li>Jobs Featured</li>
                <li>For Employers</li>
              </ul>
            </div>
          </Col>

          <Col className="col-lg-2 text-center">
            <div className='footerinnerTxt'>
              <h6>For Employers</h6>
            </div>
            <div className='ForEmployers'>
              <ul>
                <li>Post New Job</li>
                <li>Jobs Listing</li>
                <li>Employers List</li>
                <li>Job Packages</li>
                <li>About Us</li>
                <li>Terms of use</li>
              </ul>
            </div>
          </Col>

          <Col className="col-lg-2 text-center">
            <div className='footerinnerTxt'>
              <h6>Download App</h6>
            </div>

            <div className='footerDownloadIcons'>
              <div className='mt-3'>
                <img src={AppStore} className='AppStoreImage'/>
              </div>
              <div className='mt-3'>
                <img src={Googleplay} className='GoogleplayImage'/>
              </div>
            </div>
          </Col>
        </Row>

        <div className='copyright_section'>
          <div>
            <h6>©2024 Jobtex. All Rights Reserved.</h6>
          </div>
          <div className='copyrightMenus'>
            <ul>
              <li>Terms Of Services</li>
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
            </ul>
          </div>
        </div>

      </Container>
    </footer>
  )
}

export default Footer