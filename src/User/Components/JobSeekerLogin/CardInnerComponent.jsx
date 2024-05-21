import React from 'react'
import { RiCloseLargeLine } from 'react-icons/ri'
import './JobSeekerLogin.moudle.css'
import { Link } from 'react-router-dom'

const CardInnerComponent = () => {
  return (
    <>
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
                {/* Google signin */}
              {/* <div className='socialloginBtns'>
                  <button className='btn-signinGoogle'>
                    <FcGoogle size={25} className='mx-2'/> Signin with Google
                  </button>
              </div> */}
              {/* <div className='divider'>
                <span>or</span>
              </div> */}

                {/* / */}
                <div className='inputMainBox'>
                  <form>
                    <div className='inputBoxWrapper'>
                      <input type='email' require className=''/>
                      <label>Email</label>
                      {/* ifLogin email error */}
                      <span></span>
                    </div>
                    {/* passwordBox */}
                    <div className='inputBoxWrapper'>
                      <input type='password' require/>
                      <label>Password</label>
                      {/* ifLogin password error */}
                      <span></span>
                    </div>

                    <div className='forgotPasswordDiv'>
                     
                      <span>
                      <Link to="/ForgotPassword">Forgot Password</Link></span>
                    </div>

                    {/* button */}
                    <input type="submit" className='btn-signin' name="sign-in" value="Sign In" />
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

export default CardInnerComponent