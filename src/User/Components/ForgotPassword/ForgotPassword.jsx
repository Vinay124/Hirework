import './ForgotPassword.moudle.css'
import React from 'react'
// import './JobSeekerLogin.moudle.css'
import { Link } from 'react-router-dom'
import loginimage from '../../../assets/Banner/login.jpg'
import loginimage2 from '../../../assets/Banner/login2.png'
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { RiCloseLargeLine } from "react-icons/ri";
import { Col, Container, Row } from 'react-bootstrap'

const ForgotPassword = () => {
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
        <Link to="/JobSeekerLogin">
            <button className='Backto_mainUi'><RiCloseLargeLine size={26}/></button>
            </Link>
        </div>
    <div className='loginWrapper'>
        <div className='forminnerdiv'>
        {/* text */}
        <div className='loginWrapperHeadding'>
        <h2> Reset Password</h2>
            <span>Please Enter Your Email</span>
        </div>

                {/* / */}
                <div className='inputMainBox'>
                  <form>
                    <div className='inputBoxWrapper'>
                      <input type='email' require className='' placeholder='Enter your Email'/>
                      <label>Email</label>
                      <span></span>
                    </div>
                    {/* <div className='forgotPasswordDiv'>
                     
                      <span>
                      <Link to="/ForgotPassword">Forgot Password</Link></span>
                    </div> */}

                    {/* button */}
                    <input type="submit" className='btn-signin' name="sign-in" value="Get New Password" />
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

export default ForgotPassword