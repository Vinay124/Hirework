import React, { useEffect, useState } from 'react'
import './RecruiterLogin.moudle.css'
import {Container, Row, Col} from 'react-bootstrap'
import RecruiterNavigation from '../Navigation/RecruiterNavigation'
import { Link, useNavigate } from 'react-router-dom'
import { RiCloseLargeLine } from 'react-icons/ri'
import Config from '../../../../config'

const RecruiterLogin = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('')
  const [attempts, setAttempts] = useState(0);

  const maxAttempth = 4;
  const waitTimeMs = 120000;

  const {apiUrl} = Config;

  
  useEffect(() => {
    const token = sessionStorage.getItem('recruiterToken');
    
    if (token) {
      navigate('/UserDashboard');
      }
      },[]);

    const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (attempts >= maxAttempth){
      setError('You have reached the maximum login attempts. Please try again later.');
      return;
    }

    try {
      const responseData = await axios.post(`${apiUrl}user/login`,{ email, password });
      if (responseData.status === 200) {
        const RecruterToken = responseData.data.data.token
        navigate('/UserDashboard');
        sessionStorage.setItem('recruiterToken', RecruterToken);
      } else {
        console.log('Login Failed... please try again later')
      }
    } catch (error) {
      setError('Invalid userName or password');
      setAttempts(attempts + 1);
      setTimeout(() => {
        setError('');
      }, waitTimeMs);
    }
  };

  return (
    <>
    {/* <RecruiterNavigation/> */}
    <section>
        <Row className='p-0 m-0'>
          <Col className='col-lg-5 p-0 m-0'>
            <div className='recruterLoginFirstColdiv'>
              <div className='recruterLoginHeadding'>
                <h2>HireWork</h2>
              </div>

              <div className='descriptionData'>
                <h1>Start your journey with Us.</h1>
                <p>Discover the word best community of freelancer and business owners.</p>
              </div>
            </div>
          </Col>
          <Col className='col-lg-7  p-0 m-0'>
          <div className='backtoHomeBtn'>
                <Link to="/">
                  <button className='Backto_mainUi'>
                    {/* <RiCloseLargeLine size={26}/> */}
                    </button>
                </Link>
              </div>
                <div className='loginWrapper'>
              <div className='forminnerdiv'>
              {/* text */}
              <div className='loginWrapperHeadding'>
              <h2 className='text-center'> Welcome </h2>
                  <span>Login for Recruiter</span>
              </div>
                <div className='inputMainBox'>
                  <form 
                  onSubmit={handleLogin}
                  >
                    <div className='inputBoxWrapper'>
                      <input 
                       type="email"
                       name='email'
                       value={email}
                       onChange={(e) => setEmail(e.target.value)}
                      />
                      <label>Email</label>
                    </div>
                    {/* passwordBox */}
                    <div className='inputBoxWrapper'>
                      <input 
                       type="password"
                       value={password}
                       name="password"
                       onChange={(e) => setPassword(e.target.value)}
                      />
                      <label>Password</label>
                      {/* ifLogin password error */}
                      {error && <p style={{ color: 'red',textAlign:'start' }}>{error}</p>}
                    </div>

                    <div className='forgotPasswordDiv'>
                      <span>
                      <Link to="/ForgotPassword">Forgot Password</Link></span>
                    </div>

                    {/* button */}
                    <button type="submit" className='btn-signin'>Login</button>
                  </form>
                  <div className='suggestionsDiv'> 
                    <div>
                      <span>Don’t have an account? </span>
                      <Link to="/Register">Sign Up for free</Link>
                    </div> 
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
    </section>
    </>
  )
}

export default RecruiterLogin