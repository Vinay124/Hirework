import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { IoIosArrowForward } from "react-icons/io";
import './BrowserByCategory.moudle.css'
// icons
import HRIcon from '../../../assets/icons/hr.svg'
import SalesIcon from '../../../assets/icons/Sales.svg'
import ComputerIcon from '../../../assets/icons/Computer.svg'
import accountIcon from '../../../assets/icons/account.svg'
import deliveryIcon from '../../../assets/icons/delivery.svg'
import ProjectManagerIcon from '../../../assets/icons/projectmanager.svg'

const BrowserByCategory = () => {

    const jobsCategorys = {
        "data":[
            {
                "id":1,
                "CategoryIcon":HRIcon,
                "CategoryName":"Human Resource",
                "jobAvaliablity":"2 Jobs available",
                "jobLink":""
            },
            {
                "id":2,
                "CategoryIcon":ComputerIcon,
                "CategoryName":"Data Science",
                "jobAvaliablity":"4 Jobs available",
                "jobLink":""
            },
            {
                "id":3,
                "CategoryIcon":ProjectManagerIcon,
                "CategoryName":"Project Manager",
                "jobAvaliablity":"0 Jobs available",
                "jobLink":""
            },
            {
                "id":4,
                "CategoryIcon":ComputerIcon,
                "CategoryName":"Engineering",
                "jobAvaliablity":"1 Job available",
                "jobLink":""
            },
            {
                "id":5,
                "CategoryIcon":deliveryIcon,
                "CategoryName":"Delivery Driver",
                "jobAvaliablity":"1 Job available",
                "jobLink":""
            },
            {
                "id":6,
                "CategoryIcon":ComputerIcon,
                "CategoryName":"IT & Networking",
                "jobAvaliablity":"4 Jobs available",
                "jobLink":""
            },
            {
                "id":7,
                "CategoryIcon":accountIcon,
                "CategoryName":"Accounting",
                "jobAvaliablity":"3 Jobs available",
                "jobLink":""
            },
            {
                "id":8,
                "CategoryIcon":SalesIcon,
                "CategoryName":"Sales & Marketing",
                "jobAvaliablity":"2 Jobs available",
                "jobLink":""
            },
            {
                "id":9,
                "CategoryIcon":SalesIcon,
                "CategoryName":"Customer Service",
                "jobAvaliablity":"2 Jobs available",
                "jobLink":""
            },
            {
                "id":10,
                "CategoryIcon":SalesIcon,
                "CategoryName":"Content Writing",
                "jobAvaliablity":"2 Jobs available",
                "jobLink":""
            },
            {
                "id":11,
                "CategoryIcon":SalesIcon,
                "CategoryName":"Analytics",
                "jobAvaliablity":"2 Jobs available",
                "jobLink":""
            },
            {
                "id":11,
                "CategoryIcon":SalesIcon,
                "CategoryName":"Project Mgmt",
                "jobAvaliablity":"2 Jobs available",
                "jobLink":""
            },
        ]
    }

  return (
    <>
    <section className='BrowserSection'>
        <Container>
            <Row>
                <Col>
                    <div className='BrowserSectionHeadding'>
                        <div>
                            <h1>Browse by category</h1>
                            <p>Recruitment Made Easy in 100 seconds</p>
                        </div>
                        <div className='categories'>
                            <h5>All Categories <IoIosArrowForward/></h5>
                        </div>
                    </div>
                </Col>
            </Row>

            <Row className='BrowserByCategories '>
                {jobsCategorys.data.map((browserByCategory) => {
                    return(
                    <Col className='col-lg-2' key={browserByCategory.id}>
                        <div className='CardWrapper'>
                            <div className='CardIcon'>
                                <img src={browserByCategory.CategoryIcon} alt="" />
                            </div>
                            <div className='CardName'>{browserByCategory.CategoryName}</div>
                            <div className='cardNameWrapper'>
                                <div className='CardArrowIcon'>{browserByCategory.jobAvaliablity}</div>
                                <div>
                                    <IoIosArrowForward size={20} className='categoryIcon'/>
                                </div>
                            </div>
                        </div>
                    </Col>
                    )
                })}
            </Row>
        </Container>
    </section>
    </>
  )
}

export default BrowserByCategory