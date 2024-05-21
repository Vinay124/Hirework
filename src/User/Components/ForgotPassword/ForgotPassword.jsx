import './ForgotPassword.moudle.css'
import React from 'react'
import { RiCloseLargeLine } from 'react-icons/ri'
// import './JobSeekerLogin.moudle.css'
import { Link } from 'react-router-dom'

const ForgotPassword = () => {
  return (
    <>
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
    </>
  )
}

export default ForgotPassword