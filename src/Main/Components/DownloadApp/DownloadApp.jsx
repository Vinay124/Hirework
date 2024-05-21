import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import DownloadAppImage from '../../../assets/Images/downloadApp.png'
// download image
import AppStore from '../../../assets/SocialBanner/AppStore.png'
import GooglePlay from '../../../assets/SocialBanner/GooglePlay.png'
import './DownloadApp.moudle.css'

const DownloadApp = () => {
  return (
    <section className='DownloadApp'>
        <Container>
            <Row className='DownloadappRow'>
                <Col className='col-lg-6'>
                    <div>
                        <img src={DownloadAppImage} className='DownloadAppBanner'/>
                    </div>
                </Col>
                <Col className='col-lg-6 downloadDivWrapper'>
                    <div className='downloadAppText'>
                        <h1>Download The App</h1>
                        <p>Structured digital interviews increase the predictive validity of your hires by 65%</p>
                    </div>
                    <div className='downloadAppWrapper'>
                        <div className='AppstoreDownload'>
                            <img src={AppStore} alt=''/>
                        </div>
                        <div className='playStoreDownload'>
                            <img src={GooglePlay} alt=''/>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default DownloadApp