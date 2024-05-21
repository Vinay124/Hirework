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


function App() {
  
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<HomePage/>}/>

        {/* employee Login */}
        <Route path="/JobSeekerLogin" element={<JobSeekerLogin/>}/>

        {/* Recruiter Login */}
        <Route path="/RecruiterLogin" element={<RecruiterLogin/>}/>
        <Route path='/ForgotPassword' element={<ForgotPassword/>}/>
      </Routes>
    </Router>
      
    </>
  )
}

export default App
