import React from 'react'
import './RecruiterNavigation.moudle.css'

const RecruiterNavigation = () => {

  const NavigationData = [
      {
          id:1,
          name:"Search Resume",
          url:''
      },
      {
          id:2,
          name:"Looking for Job",
          url:''
      },
      {
          id:3,
          name:"Search Resumes",
          url:''
      },
];


  return (
    <>
    <nav className=''>
        <div className='LogoHeadding'>
            <h3>Hire <span>Work</span></h3>
        </div>

      {/* Nav */}
        <div>
          <ul>
            {NavigationData.map((data) => {
              return (
                <li key={data.id}>{data.name}</li>
              )
            })}
          </ul>
        </div>
          
          {/* Buttons */}
        <div>
          <button>Login</button>
          <button>Sign Up</button>
        </div>
    </nav>
  </>
  )
}

export default RecruiterNavigation  