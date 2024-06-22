import React from 'react'
import './ApplicationsStatistics.moudle.css'
import Image1 from '../../../../../assets/recruiter/image1.svg'
import Image2 from '../../../../../assets/recruiter/image2.svg'
import Image3 from '../../../../../assets/recruiter/image3.svg'
import Image4 from '../../../../../assets/recruiter/image4.svg'
import { Col, Container, Row } from 'react-bootstrap'

const ApplicationsStatistics = () => {

    const applicationDataJson = {
        "data": [
            {
                "id": 1,
                "name": "Posted Jobs",
                "count": 3,
                "image": Image1
            },
            {
                "id": 2,
                "name": "Applications",
                "count": 2,
                "image": Image2
            },
            {
                "id": 3,
                "name": "Reviews",
                "count": 2,
                "image": Image3
            },
            {
                "id": 4,
                "name": "Shortlisted",
                "count": 3,
                "image": Image4
            }
        ]
    }

    return (
        <section className='applicationStatus'>
            <Container>
                <div className='applicationStatusHeadding'>
                    <h2>Application Status</h2>
                </div>
                <Row className='mt-5'>
                    {applicationDataJson.data.map((item, i) => (
                        <Col className="col-lg-3" key={i}>
                            <div className='jobsCategoryinner'>
                                <div className='jobCategoryimage'>
                                    <img src={item.image} alt={item.name}/>
                                </div>
                                <div className='applicationDetails'>
                                    <div>
                                        <h2>{item.count}</h2>
                                    </div>
                                    <div>
                                        <h6>{item.name}</h6>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    )
}

export default ApplicationsStatistics
