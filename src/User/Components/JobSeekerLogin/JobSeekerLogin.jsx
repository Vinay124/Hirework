import React, { useEffect, useState } from 'react'
import './JobSeekerLogin.moudle.css'
import { Col, Container, Row } from 'react-bootstrap'
import { RiCloseLargeLine } from 'react-icons/ri'
import { Link, useNavigate } from 'react-router-dom'
import ForgotPassword from '../ForgotPassword/ForgotPassword'
import axios from 'axios'
import Config from '../../../../config'


const JobSeekerLogin = () => {


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [attempts, setAttempts] = useState(0);

  const maxAttempth = 4;
  const waitTimeMs = 120000;
  
  // config url
  const { apiUrl } = Config;

  useEffect(() => {
    const tokens = sessionStorage.getItem('token');
  
    if (tokens) {
      navigate('/UserDashboard');
    }
  },[]);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if  (attempts >= maxAttempth) {
        setError('You have reached the maximum login attempts. Please try again later.');
        return;
    }

    try {
      // const responseData = await axios.post('https://f79a-2405-201-d028-1099-5129-4725-86d8-b26f.ngrok-free.app/hirework/web/user/login',{ email, password,});
      const responseData = await axios.post(`${apiUrl}user/login`,{ email, password,});
      if (responseData.status === 200) {
        const UserToken = responseData.data.data.token;
        navigate('/UserDashboard');
        sessionStorage.setItem('token', UserToken);
      } else  {
        console.log('login Failed')
      }

    } catch (error) {
      setError('Invalid username or password')
      setAttempts(attempts + 1);
      setTimeout(() => {
        setError('');
      }, waitTimeMs);
    }
  };


  return (
    <>
    <section>
        <Row className='m-0'>
          <Col className='col-lg-5 p-0 m-0 companydetailWrapper'>
            <div className='companyDetails'>
              <div className='LogoHeadding'>
                <h3>Hire <span>Work</span></h3>
              </div>
              <div className='companythoughts'>
                <p>Choose a job you love, and you never have to work a day in your life - Confucius</p>
              </div>  
              <div>
                <div className='companysDescrption'>
                  <span>Companies you might love to work with</span>
                </div>
                <div className='jobseekerClients'>
                  <ul>
                    <li>
                      <img src='https://d3qr48lsanmyop.cloudfront.net/webp/1649834271518.webp' className=''/>
                    </li>
                    <li>
                      <img src='https://d3qr48lsanmyop.cloudfront.net/webp/1649833830047.webp' className=''/>
                    </li>
                    <li>
                      <img src='https://d3qr48lsanmyop.cloudfront.net/webp/1649836030819.webp' className=''/>
                    </li>
                    <li>
                      <img src='https://d3qr48lsanmyop.cloudfront.net/webp/1649833830047.webp' className=''/>
                    </li>
                  </ul>
                </div>
              </div>             
            </div>
          </Col>
          <Col className='col-lg-7 p-0 m-0 jobseekerCol'>

        <div className='backtoHomeBtn'>
        <Link to="/">
            <button className='Backto_mainUi'><RiCloseLargeLine size={26}/></button>
            </Link>
        </div>
          <div className='loginWrapper'>
        <div className='forminnerdiv'>
        {/* text */}
        <div className='loginWrapperHeadding'>
        <h2> Welcome Guest</h2>
            <span>Login for Hire Work</span>
        </div>
                <div className='inputMainBox'>
                  <form onSubmit={handleLogin}
                  >
                    <div className='inputBoxWrapper'>
                      <input 
                       type="email"
                       name='email'
                       value={email}
                       onChange={(e) => setEmail(e.target.value)}
                      />
                      <label>Email</label>
                      {/* ifLogin email error */}
                      <span></span>
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

export default JobSeekerLogin