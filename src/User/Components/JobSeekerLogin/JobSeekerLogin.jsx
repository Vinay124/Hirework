import React, { useState } from 'react'
import './JobSeekerLogin.moudle.css'
import Navigation from '../../../Main/Components/Navigation/Navigation'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import loginimage from '../../../assets/Banner/login.jpg'
import loginimage2 from '../../../assets/Banner/login2.png'
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { RiCloseLargeLine } from "react-icons/ri";
import CardInnerComponent from './CardInnerComponent'
// forgotPassword
import ForgotPassword from '../ForgotPassword/ForgotPassword'


const JobSeekerLogin = () => {


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try{
      const response = await SiAxios.post('https://jsonplaceholder.typicode.com/posts', {
        email,
        password
      });
  
      // if a successful Login
      if (response.data.id) {
        console.log('Login Successful');
      } else {
        setError('Invalid email and Password');
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status === 400) {
          setError('Invalid email or password');
        } else if (error.response.status === 401) {
          setEmail('Incorrect password');
        } else {
          setError('An error occurred/ plase try again later.')
        }
      } else {
        setError('An error occurred. Please try again later.')
      }
    }
  };

  // Login and signup 


  return (
    <>
    {/* <Navigation/> */}
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
            <CardInnerComponent/>
            {/* <ForgotPassword/> */}

          </Col>
        </Row>  
    </section>
  </>
  )
}

export default JobSeekerLogin