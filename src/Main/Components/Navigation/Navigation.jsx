import React, { useState , useEffect, useRef} from 'react'
import MobileIcon from '../../../assets/icons/smartphone.svg'
import { Link } from 'react-router-dom';
import { NavData } from './NavData';
import NavSubmenu from './NavSubmenu';
import './Navigation.moudle.css'
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";
import { RiCloseLine } from 'react-icons/ri';
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { SiAppstore } from "react-icons/si";


const Navigation = () => {

    const [activeSubmenu, SetActiveSubmenu] = useState(null);

    // Hover Effect
    const handleMouseEnter = (submenuId) => {
        SetActiveSubmenu(submenuId);
    }

    const handleMouseLeave = () => {
        SetActiveSubmenu(null)
    }


    // Responsivness Menu Open and Close
    const [open, setOpen] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setOpen(false);
            };
        }
        
        document.addEventListener('click', handleOutsideClick);
        
        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    },[]);

    const toggleMenu = () => {
        setOpen(!open);
    }

    const [mobileMenu, setMobileMenu] = useState(null)
    
    const handleMobileMenuopen = (itemsId) => {
        setMobileMenu(itemsId);
    }

    const handleMobileMenuClose = () => {
        setMobileMenu(null)
    }


  return (
    <>
    
    {/* Hamburger Menu */}
    <div className='mobileHeader'>
        <div className="hamburger-menu" ref={menuRef}>
            <div>
                <button className="hamburger-icon" onClick={toggleMenu}>
                    <RxHamburgerMenu size={25}/>
                </button>
            </div>

            <div className='LogoHeadding' id='MobileLogo'>
                <h3>Hire <span>Work</span></h3>
            </div>


            {/* <div className='menu-ItemsWrapper'> */}
                {open && (
                    <div className="menu-items">
                        <ul>
                            {NavData.map((items) => {
                                return (
                                    <li key={items.id}
                                        onMouseEnter={() => handleMobileMenuopen(items.id)}
                                        onMouseLeave={handleMobileMenuClose}>
                                        <div className='mobileIconWrapper'>
                                            <div>   
                                                <Link>{items.name}</Link>
                                            </div>
                                            <div>
                                            <IoIosArrowDown/>
                                            </div>
                                        </div>
                                        {items.submenu && mobileMenu === items.id && (
                                            <div className='mobileSubmens'>
                                                <ul>
                                                    {items.submenu.map((navmenu) => {
                                                        return(
                                                            <li key={navmenu.id}>{navmenu.name}</li>
                                                        )
                                                    })}
                                                </ul>
                                            </div>
                                        )}
                                    </li>
                                )
                            })}
                        </ul>

                        <div className='mobileNavigationWrapper'>
                            <div className='Googleplay'>
                                <IoLogoGooglePlaystore size={30}/>
                                <span>Play Store</span>
                            </div>
                            <div className='appStore'>
                                <SiAppstore size={30}/>
                                <span>App Store</span>
                            </div>
                        </div>
                    </div>
                )}

            {/* </div> */}
        </div>
    </div>


{/* Dashboard Nav */}
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
                    <Link to="/RecruiterLogin">
                        <button className='btn-Recruiter'>Recruiter Login</button>
                    </Link>
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