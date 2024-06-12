import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import RecruiterNavigation from '../../Navigation/RecruiterNavigation'
import { Link } from 'react-router-dom'
import { RiCloseLargeLine } from 'react-icons/ri'


const BasicDetailsRecruiter = () => {
  return (
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
                  <span>Recruiter Signup </span>
              </div>
                <div className='inputMainBox'>
                  <form 
                  // onSubmit={handleLogin}
                  >
                    <div className='inputBoxWrapper'>
                      <input 
                       type="email"
                       name='email'
                      //  value={email}
                      //  onChange={(e) => setEmail(e.target.value)}
                      />
                      <label>Email</label>
                      {/* ifLogin email error */}
                      <span></span>
                    </div>
                    {/* passwordBox */}
                    <div className='inputBoxWrapper'>
                      <input 
                       type="password"
                      //  value={password}
                       name="password"
                      //  onChange={(e) => setPassword(e.target.value)}
                      />
                      <label>Password</label>
                      {/* ifLogin password error */}
                      {/* {error && <p style={{ color: 'red',textAlign:'start' }}>{error}</p>} */}
                    </div>

                    {/* <div className='forgotPasswordDiv'>
                      <span>
                      <Link to="/ForgotPassword">Forgot Password</Link></span>
                    </div> */}

                    {/* button */}
                    <button type="submit" className='btn-signin'>Next</button>
                  </form>

                  <div className='suggestionsDiv'> 
                    <div>
                      <span>Already Registered? </span>
                      <Link to="/Register">Login here</Link>
                    </div> 
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
    </section>
  )
}

export default BasicDetailsRecruiter