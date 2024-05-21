import React from 'react'
import Banner from '../../Components/Banner/Banner'
import { Col, Container, Row } from 'react-bootstrap'
// import Navigation from '../../Components/Navigation/Navigation'

import './HomePage.moudle.css'
import BrowserByCategory from '../../Components/BrowserByCategory/BrowserByCategory'
import TopCompaniesHiring from '../../Components/TopCompaniesHiring/TopCompaniesHiring'
import ActivelyHiring from '../../Components/ActivelyHiring/ActivelyHiring'
import SponsoredCompanies from '../../Components/SponsoredCompanies/SponsoredCompanies'
import DownloadApp from '../../Components/DownloadApp/DownloadApp'
import Footer from '../../Components/Footer/Footer'

const HomePage = () => {



  return (
    <>    
    <Banner/>
    <BrowserByCategory/>
    <TopCompaniesHiring/>
    <ActivelyHiring/>
    <SponsoredCompanies/>
    <DownloadApp/>
    <Footer/>
  </>
  )
}

export default HomePage