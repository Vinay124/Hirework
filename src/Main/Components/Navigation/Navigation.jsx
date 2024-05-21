import React, { useState } from 'react'
import MobileIcon from '../../../assets/icons/smartphone.svg'
import { Link } from 'react-router-dom';
import { NavData } from './NavData';
import NavSubmenu from './NavSubmenu';
import './Navigation.moudle.css'

const Navigation = () => {

    const [activeSubmenu, SetActiveSubmenu] = useState(null);


    // Hover Effect
    const handleMouseEnter = (submenuId) => {
        SetActiveSubmenu(submenuId);
    }

    const handleMouseLeave = () => {
        SetActiveSubmenu(null)
    }

    

  return (
    <>
    <nav className='navbar-Main'>
        <div className='LogoHeadding'>
            <h3>Hire <span>Work</span></h3>
        </div>

        {/* NavLinks */}
        <div>
            <ul className='nav-menuData'>
                {NavData.map((menuItems) => {
                    return(
                        <li key={menuItems.id} className='navLinkData'
                            onMouseEnter={() => handleMouseEnter(menuItems.id)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className='d-flex align-items-center'>
                                <Link to={menuItems.url}>
                                    <div>{menuItems.name}</div>
                                </Link>
                            </div>
                            {menuItems.submenu && activeSubmenu === menuItems.id && (
                                <NavSubmenu submenus={menuItems.submenu}/>
                            )}
                        </li>
                    )
                })}
            </ul>
        </div>


        {/* Button and Login */}
        <div className='buttonWrapper'>
            <div className='downloadAppWrapper'>
                <img src={MobileIcon} className='downloadApp'/>
                <span>Download App</span>
            </div>

            <div className='buttonParentDiv'>
                <div>
                    <button className='btn-Recruiter'>Recruiter Login</button>
                </div>
                <div>
                    <Link to="/JobSeekerLogin">
                        <button className='btn-jobseeker'>Jobseeker Login</button>
                    </Link>
                </div>
            </div>
        </div>
    </nav>  
    </>
  )
}

export default Navigation