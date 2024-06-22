import React from 'react'
import './UserDashboardMain.moudle.css'
import { Col, Container, Row } from 'react-bootstrap'
import AccountInfo from '../../Components/AccountInfo/AccountInfo'
import UserRecommendedJobs from '../../Components/UserRecommendedJobs/UserRecommendedJobs'
import TopCompanyHiring from '../../Components/TopCompaniesHiring/TopCompanyHiring'
import RecentJobs from '../../../Main/Components/RecentJobs/RecentJobs'
import JobFilter from '../../../Main/Components/JobFilter/JobFilter'
import SponsorHiring from '../../../Main/Components/SponsorHiring/SponsorHiring'


const UserDashboardMain = () => {

    

  return (
    <>
    <section className='userDashboardDetails'>
        <Container>
            <Row >
                <Col className='col-lg-3'>
                    <AccountInfo/>
                </Col>
                <Col className='col-lg-6'>
                    <UserRecommendedJobs/>
                    <RecentJobs/>
                    <TopCompanyHiring/>
                    <SponsorHiring/>
                </Col>
                <Col className='col-lg-3'>
                    <JobFilter/>
                </Col>
            </Row>
        </Container>
    </section>
    </>
  )
}

export default UserDashboardMain