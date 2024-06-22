import React from 'react'
import './RecruiterDashboard.css'
import RecruiterNavigation from '../Components/RecruiterNavigation/RecruiterNavigation'
import RecruiterHeader from '../Components/RecruiterHeader/RecruiterHeader'
import ApplicationsStatistics from '../Components/Applications Statistics/ApplicationsStatistics'
import RecentJobs from '../Components/RecentJobsComponent/RecentJobs'


const RecruiterDashboard = () => {
  return (
    <>
    <RecruiterHeader/>
    <RecruiterNavigation/>

    <div className='recruiterContainer'>
      <ApplicationsStatistics/>
      
      <RecentJobs/>
    </div>
    </>
  )
}

export default RecruiterDashboard