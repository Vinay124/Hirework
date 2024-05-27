import React, { useState } from 'react'
import { RiCloseLargeLine } from 'react-icons/ri'
import './JobSeekerLogin.moudle.css'
import { Link, useNavigate } from 'react-router-dom'

const CardInnerComponent = ({ email, setEmail, password, setPassword, error,  }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();
  
  const handleLoginSubmit = (e) => {
    e.preventDefault();

    if (email === 'admin@capace.com' && password === 'admin') {
      console.log('Login Successful');
      navigate('/UserDashboard');
  
    } else {
      setError('Invalid UserName and Password');
    }
  };


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
                  <form onSubmit={handleLoginSubmit}>
                    <div className='inputBoxWrapper'>
                      <input type='email' require className='' 
                      value={email} onChange={(e) => setEmail(e.target.value)}/>
                      <label>Email</label>
                      {/* ifLogin email error */}
                      <span></span>
                    </div>
                    {/* passwordBox */}
                    <div className='inputBoxWrapper'>
                      <input type='password' require 
                      value={password} onChange={(e) => setPassword(e.target.value)}/>
                      <label>Password</label>
                      {/* ifLogin password error */}
                      {error && <p style={{ color: 'red' }}>{error}</p>}
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