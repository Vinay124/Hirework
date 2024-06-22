import React, { useEffect, useState } from 'react'
import DashboardNav from '../../Components/DashboardNav/DashboardNav'
import ProfileInformaction from '../../Components/ProfileInformaction/ProfileInformaction'
import UserDashboardMain from '../UserDashboardMain/UserDashboardMain'
import Footer from '../../../Main/Components/Footer/Footer'
import Cookies from 'js-cookie';
import axios from 'axios'
import Config from '../../../../config'

const UserDashboard = () => {

  const { apiUrl } = Config;



  return (
    <>
      <DashboardNav/>
      <UserDashboardMain/>
      <Footer/>
  </>
  )
}

export default UserDashboard