import React from 'react'
import DashboardNav from '../DashboardNav/DashboardNav'
import Footer from '../../../Main/Components/Footer/Footer'
import { Col, Container, Row } from 'react-bootstrap'
import './UserProfileDetails.moudle.css'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import UserImage from '../../../assets/usersIcon/UserAvatar.jpg'
import { MdOutlineEdit } from "react-icons/md";
// 
import { GrLocation } from "react-icons/gr";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { CiWallet } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { IoCalendarOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { LiaRupeeSignSolid } from "react-icons/lia";

// 
import { HiOutlineCake } from "react-icons/hi2";
import { PiBagSimpleBold } from "react-icons/pi";
import { IoWalletOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";



const UserProfileDetails = () => {

    // const percentage = 66;

  return (
    <>
    <DashboardNav/>

    <section className='EditProfileDetails'>
        <Container>
            <Row className='editProfileRow'>
                <Col className='col-lg-8 '>
                    <div className='editProfileDetailsWrapper'>
                        <Row className='editProfileMainDiv'>
                            <Col className='col-lg-3'>
                                <div className='editProfileImage'>
                                    <img src={UserImage} className='' alt=''/>
                                </div>
                            </Col>
                            <Col>
                                <Row>
                                    <Col className='col-lg-12'>
                                        <div className='profileInnerRowDiv'>
                                            <div>
                                                <div className='ProfileuserName'>
                                                    <h4>Karthik K</h4>
                                                    <MdOutlineEdit className='mx-3' size={20}/>  
                                                </div>
                                                <div className='job_designation'>
                                                    <span>React Developer</span>
                                                </div>
                                                <div className='currentCompany'>
                                                <span>at Infosys</span>
                                                </div>
                                            </div>
                                            <div className='profileUpdatedStatus'>
                                                <span>Profile last updated - 12Apr , 2024</span>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col className='col-lg-12 p-0'>
                                        <div className='personal_detailsWrapper'>
                                            <div className='personal_detailMainDiv'>
                                                <div>
                                                    <GrLocation className="mx-3" size="22" color="#888888"/>
                                                    <span>Bengalore India</span>
                                                </div>
                                                <div>
                                                    <BsFillBriefcaseFill className="mx-3" size="22" color="#888888"/>
                                                    <span>5 Year</span>
                                                </div>
                                                <div>
                                                    <CiWallet className="mx-3" size="22" color="#888888"/>
                                                    <span>
                                                    <LiaRupeeSignSolid className="mx-0" size="22" color="#888888"/>
                                                        600000</span>
                                                </div>
                                            </div>
                                            
                                            <div className='personal_detailMainDiv'>
                                                <div>
                                                    <MdOutlineEmail className="mx-3" size="22" color="#888888"/>
                                                    <span>karthik342@gmail.com</span>
                                                </div>
                                                <div>
                                                    <IoCalendarOutline className="mx-3" size="22" color="#888888"/>
                                                    <span>1 Year</span>
                                                </div>
                                                <div>
                                                    <BsTelephone className="mx-3" size="22" color="#888888"/>
                                                    <span>
                                                        +91-849-605-5025</span>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>


                {/* Personal Details */}
                <Row className='personalDetailsInfo'>
                    <Col className='col-lg-12'>
                        <div className='personalDetailsinnerDiv'>
                            <div className='personalDetailHeadding'>
                                <div>
                                    <h4>Personal Details</h4>
                                </div>
                                <div>
                                    <MdOutlineEdit className='mx-2' size={22} color='#888888'/>
                                    <span>Edit</span>
                                </div>
                            </div>
                            
                            <div className='personalDetailsinnerWrapper'>
                                <div className='careerBreakDiv'>
                                    <h6>Career Break.?</h6>
                                    <span>NO</span>
                                </div>

                                <div className='addressdiv'>
                                    <h6>Address</h6>
                                    <span>Bengalore Karnataka 560078</span>
                                </div>

                                <div className='Differently_abledDiv'>
                                    <h6>Differently abled</h6>
                                    <span>NO</span>
                                </div>

                                <div className='personal__Info'>
                                    <h6>Personal Info</h6>
                                    <span>Male / Single</span>
                                </div>
                            </div>
                            
                            <div className='PersonalDetailsSecondDiv'>
                                <div className='EmailDiv'>
                                    <div className='iconBackground'>
                                        <MdOutlineMail size={25} color="#888888"/>
                                    </div>
                                    <div>
                                        <h6>Email</h6>
                                        <span>karthik342@gmail.com</span>
                                    </div>
                                </div>

                                <div className='birthDayDiv'>
                                    <div className='iconBackground'>
                                        <HiOutlineCake size={25} color="#888888"/>
                                    </div>
                                        <div>
                                        <h6>Birthday</h6>
                                        <span>25 Dec 1990</span>
                                        <span>34 years old</span>
                                    </div>
                                </div>

                                <div className='WorkTypeDiv'>
                                    <div className='iconBackground'>
                                        <PiBagSimpleBold size={25} color="#888888"/>
                                    </div>
                                    <div>
                                        <h6>Work Type</h6>
                                        <span>Full Time</span>
                                    </div>
                                </div>

                                <div className='SalaryExpDiv'>
                                    <div className='iconBackground'>
                                        <IoWalletOutline size={25} color="#888888"/>
                                    </div>
                                    <div>
                                        <h6>Salary Expectations</h6>
                                        <span>10 - 12LPA</span>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </Col>
                </Row>
            </Col>

                {/* Second col */}
                <Col className='col-lg-4'>
                    <div className='editProfileDetailsWrapper'>
                        <span>left section</span>
                    </div>
                </Col>
            </Row>

            
        </Container>
    </section>
    <Footer/>
    </>
  )
}

export default UserProfileDetails