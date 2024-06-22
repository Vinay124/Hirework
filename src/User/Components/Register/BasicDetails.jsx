import React from 'react'
import { Col, Row } from 'react-bootstrap';
import { RiCloseLargeLine } from 'react-icons/ri'
// import './JobSeekerLogin.moudle.css'
import { Link } from 'react-router-dom'

const BasicDetails = ({ formData, setFormData, nextStep}) => {

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value });
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
        <div className='loginWrapperHeadding'>
          <h2> Welcome Guest</h2>
            <span>Sign up for Hire Work</span>
            </div>
                <div className='inputMainBox'>
                  <form> 
                    <div className='inputBoxWrapper'>
                      <input type='text'  
                      name="name"
                      value={formData.name} onChange={handleChange}
                      />
                      <label>FirstName</label>
                    </div>

                    <div className='inputBoxWrapper'>
                      <input type='text' 
                       name="last_name"
                      value={formData.last_name} onChange={handleChange}/>
                      <label>Last name</label>
                    </div>

                    <input type="button" className='btn-signin' onClick={nextStep} name="next" value="Next" />
                  </form>

                  <div className='suggestionsDiv'> 
                    <div>
                      <span>Already Registered? </span>
                      <Link to="/JobSeekerLogin">Login here</Link>
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

export default BasicDetails