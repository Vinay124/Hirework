import React from 'react'
import './RecentJobs.moudle.css'
import { Col, Row } from 'react-bootstrap'
import { FiPlus } from "react-icons/fi";
import { IoMdCheckmark } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoReturnDownBack } from "react-icons/io5";


const RecentJobs = () => {

    const RecentApplicants = {
            "candidates": [
              {
                "name": "John Doe",
                "email":"dummy@gmail.com",
                "image":"https://demoapus1.com/jobtex-new/wp-content/uploads/2023/06/IMG-5.jpg",
                "job_title": "Software Engineer",
                "application_status": "Pending",
                "applied_date": "2024-06-21"
              },
              {
                "name": "Jane Smith",
                "email":"tommy@gmail.com",
                "image":"https://randomuser.me/api/portraits/women/90.jpg",
                "job_title": "Data Scientist",
                "application_status": "Reviewed",
                "applied_date": "2024-06-18"
              },
              {
                "name": "Michael Johnson",
                "email":"Michael@gmail.com",
                "image":"https://dummyjson.com/icon/oliviaw/128",
                "job_title": "Product Manager",
                "application_status": "Rejected",
                "applied_date": "2024-06-15"
              }
        ]
    }

  return (
    <section className='recentApplications'>
        <div className='recentApplicationsHeadding'>
            <h4>Recent Applicants</h4>
        </div>

        <div className='CandidatesRow'>
            <Row>
                <Col className='col-lg-3'>
                    <div>
                        <h6>Candidates Name</h6>
                    </div>
                </Col>
                <Col className='col-lg-2'>
                    <div>
                        <h6>Job Title</h6>
                    </div>
                </Col>
                <Col className='col-lg-2'>
                    <div>
                        <h6>Application Status</h6>
                    </div>
                </Col>
                <Col className='col-lg-2'>
                    <div>
                        <h6>Applied Date</h6>
                    </div>
                </Col>
                <Col className='col-lg-3 text-end'>
                    <div>
                        <h6>Action</h6>
                    </div>
                </Col>
            </Row>
        </div>

        <div >
            {RecentApplicants.candidates.map((data, item) => (
                <Row className='mainApplicantsData'>
                    <Col className='col-lg-3'>
                        <div className='recentApplicationDetails'>
                            <div>
                                <img src={data.image}/>
                            </div>
                            <div>
                                <h6>{data.name}</h6>
                                <span>{data.email}</span>
                            </div>
                        </div>
                    </Col>
                    <Col className='col-lg-2'>
                        <div className='jobTitle'>
                            <span>{data.job_title}</span>
                        </div>
                    </Col>
                    <Col className='col-lg-2 '>
                        <div className='applicationStatusDiv'>
                            <span>{data.application_status}</span>
                        </div>
                    </Col>
                    <Col className='col-lg-2'>
                        <div className='applicationDate'>
                            <span>{data.applied_date}</span>
                        </div>
                    </Col>
                    <Col className='col-lg-3 text-end'>
                        <div className='actionButtonWrapper'>
                            <div className='approveApplication'>
                                <FiPlus size={20}/>
                            </div>
                            <div className='checkMarkicon'>
                                <IoMdCheckmark size={20}/>
                            </div>
                            <div className='rejectApplication'>
                                {/* <IoCloseSharp size={20}/> */}
                                <IoReturnDownBack size={20}/>
                                
                            </div>
                            <div className='downloadResumeIcon'>
                                <MdOutlineFileDownload size={20}/>
                            </div>
                            <div className='closeIcon'>
                                <MdClose size={20}/>
                            </div>
                        </div>
                    </Col>
                </Row>  
            ))}
        </div>
    </section>
  )
}

export default RecentJobs