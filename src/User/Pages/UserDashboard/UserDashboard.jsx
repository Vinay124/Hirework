import React from 'react'
import DashboardNav from '../../Components/DashboardNav/DashboardNav'
import ProfileInformaction from '../../Components/ProfileInformaction/ProfileInformaction'
import UserDashboardMain from '../UserDashboardMain/UserDashboardMain'
import Footer from '../../../Main/Components/Footer/Footer'

const UserDashboard = () => {
  return (
    <>
      <DashboardNav/>
      <UserDashboardMain/>
      <Footer/>
  </>
  )
}

export default UserDashboard