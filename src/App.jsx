// Routers
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
// Main Homepage
import HomePage from './Main/Pages/Homepage/HomePage'
// JobSeekerLogin
import JobSeekerLogin from './User/Components/JobSeekerLogin/JobSeekerLogin'
// RecruiterLogin
import RecruiterLogin from './Recruiter/Components/RecruiterLogin/RecruiterLogin'
import ForgotPassword from './User/Components/ForgotPassword/ForgotPassword'
import Register from './User/Components/Register/Register'
import UserDashboard from './User/Pages/UserDashboard/UserDashboard'
import RecentJobs from './User/Components/RecentJobs/RecentJobs'
import JobDetail from './User/Pages/JobDetail/JobDetail'

// Profile
import UserProfileDetails from './User/Components/UserProfileDetails/UserProfileDetails'
import Test from './Test'
import RecruiterRegister from './Recruiter/Components/RecruiterLogin/RecruiterSignup/RecruiterRegister'
import JobSearchResults from './Main/Components/RecentJobs/JobSearchResults'


function App() {
  
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<HomePage/>}/>

        {/* employee Login */}
        <Route path="/JobSeekerLogin" element={<JobSeekerLogin/>}/>
        <Route path='/Register' element={<Register/>}/>

        <Route path='/Test' element={<Test/>}/>

        {/* Recruiter Login */}
        <Route path="/RecruiterLogin" element={<RecruiterLogin/>}/>
        <Route path="/RecruiterRegister" element={<RecruiterRegister/>}/>
        
        <Route path='/ForgotPassword' element={<ForgotPassword/>}/>

        {/* UserDashboard  */}
        <Route path='/UserDashboard' element={<UserDashboard/>}/>
        <Route path='/UserDashboard/JobSearchResult' element={<JobSearchResults/>}/>

        {/* ViewJobs */}
        <Route path='/UserDashboard/RecentJobs' element={<RecentJobs/>}/>

        {/* Job Details */}
        <Route path='/UserDashboard/JobDetail' element={<JobDetail/>}/>
        
        {/* Profile Details */}
        <Route path='/UserDashboard/UserProfileDetails' element={<UserProfileDetails/>}/>
      
      {/* RecruterDashboard */}
      {/* <Route path='' */}

      
      </Routes>
    </Router>
      
    </>
  )
}


export default App
