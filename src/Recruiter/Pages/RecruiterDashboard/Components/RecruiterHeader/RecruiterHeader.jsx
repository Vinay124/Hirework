import React, { useState , useEffect, useRef} from 'react'
import { Link } from 'react-router-dom';
import { NavData } from '../../../../../Main/Components/Navigation/NavData';
// import NavSubmenu from './NavSubmenu';
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";
import { RiCloseLine } from 'react-icons/ri';
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { SiAppstore } from "react-icons/si";
import './RecruiterHeader.moudle.css'
import { IoIosNotificationsOutline } from "react-icons/io";


const RecruiterHeader = () => {
  return (
    
    <nav className='RecruiterHeader'>
    <div className='LogoHeadding'>
        <h3>Hire <span>Work</span></h3>
    </div>


    {/* Button and Login */}
    <div className='buttonWrapper'>
        <div className='buttonParentDiv'>
            {/* <div>
                <Link to="/RecruiterLogin">
                    <button className='btn-Recruiter'>Recruiter Login</button>
                </Link>
            </div> */}
            <div className='recruiterHeaderNotification'>
                <Link to="/JobSeekerLogin">
                    <button className='btn-notificationBtn'>
                        <IoIosNotificationsOutline size={25} color='#282828'/>
                    </button>
                </Link>
            </div>
            <div>
                <Link to="/RecruiterDashboard/PostJob">
                    <button className='btn-Recruiter'>Post Job</button>
                </Link>
            </div>
        </div>
    </div>
</nav>
  )
}

export default RecruiterHeader