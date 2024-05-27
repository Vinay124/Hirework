import React, { useState } from 'react'
import { BiMessageSquareDetail } from "react-icons/bi";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from 'react-router-dom';
import UserAvatar from '../../../assets/usersIcon/UserAvatar.jpg'
import DashboardSubMenus from './DashboardSubMenus';
import ProfileDetails from './ProfileDetails';
import './DashboardNav.moudle.css'

const DashboardNav = () => {

    const [submenus, setSubmenus] = useState(null)

    const dashboardNavigationData = [
        {
            id:1,
            "name":"Jobs",
            "url":"/",
            "submenus":[
                {
                    id:21,
                    name:"Recommended Jobs",
                    url:"",
                },
                {
                    id:22,
                    name:"Job invites",
                    url:"",
                },
                {
                    id:23,
                    name:"Saved Jobs",
                    url:"",
                },
            ]
        }
    ];

    // dummy data
    const dummyJobtitle = [
        "Software Engineer",
        "Product Manager",
        "Data Scientist",
        "UX Designer",
        "Marketing Specialist"
    ];

    const dummyCities = [
        "San Francisco",
        "New York",
        "Los Angeles",
        "Chicago",
        "Boston"
    ];
    const dummyJobs = [
        {
            id:1,
            title:"Software Engineer",
            city:"San Francisco"
        },
        {
            id:2,
            title:"Product Manager",
            city:"New York"
        },
        {
            id:3,
            title:"Data Scientist",
            city:"Los Angeles"
        },
        {
            id:4,
            title:"UX Designer",
            city:"Chicago"
        },
        {
            id:5,
            title:"Marketing Specialist",
            city:"Boston"
        }
    ];

    // submenu
    const handleMouseEnter = (submenusId) => {
        setSubmenus(submenusId);
    }

    const handleMouseLeave = () => {
        setSubmenus(null)
    }


    // states
    const [jobTitle, setjobTitle] = useState('');
    const [city, setCity] = useState('');
    const [jobs, setJobs] = useState([]);
    const [jobTitleSuggestions, setJobTitlesuggestion] = useState([]);
    const [citySuggestions, setCitySuggestions] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchJobTitleSuggestions = (title) => {
        const suggestion = dummyJobtitle.filter( t => t.toLowerCase().includes(title.toLowerCase()));
        setJobTitlesuggestion(suggestion);
    };

    const fetchCitySuggestions = (city) => {
        const suggestions = dummyCities.filter(c => c.toLowerCase().includes(city.toLowerCase().include(city.toLowerCase())));
        setCitySuggestions(suggestions);
    }

    const handleJobTitleChange = (e) => {
        const title = e.target.value;
        setjobTitle(title);

        if (title) {
            fetchJobTitleSuggestions(title);
        } else {
            setJobTitlesuggestion([]);
        }
    };


    // handle city
    const handleCityChange = (e) => {
        const city = e.target.value;
        setCity(city);

        if (city) {
            fetchCitySuggestions(city);
        } else {
            setCitySuggestions([]);
        }
    };

    const handleSearch = () => {
        setLoading(true);
        const filteredJobs = dummyJobs.filter(
            job => job.title.toLowerCase().includes(jobTitle.toLowerCase()) &&
                job.city.toLowerCase().includes(city.toLowerCase())
        );
        setTimeout(() => {
            setJobs(filteredJobs);
            setLoading(false);
        }, 500)
    };

 
    // Dropdown 
    const [openUserSetting, setOpenUserSetting] = useState();

    const openPopup = () => { 
        setOpenUserSetting(!openUserSetting);
    }

  return (
    <>
    <nav className='userNavigation'>
        <div className='LogoHeadding'>
            <h3>Hire <span>Work</span></h3>
        </div>

        {/* NavLinks */}
        <div className='navLinksDashboard'>
            <ul>
                {dashboardNavigationData.map((menudata) => {
                    return (
                        <li key={menudata.id}
                        onMouseEnter={() => handleMouseEnter(menudata.id)}
                        onMouseLeave={handleMouseLeave}
                        >
                            <Link to={menudata.url}>
                                <div>
                                    {menudata.name}
                                </div>
                            </Link>

                           {menudata.submenus && submenus === menudata.id && (
                                <DashboardSubMenus submenuData={menudata.submenus}/>
                           )}
                        </li>
                    )
                })}
            </ul>
        </div>

        {/* Search input */}
        <div className='jobSearchInput'>
           <div>
            <input type="text" value={jobTitle} 
            onChange={handleJobTitleChange}
            placeholder='Job Title'
            list='job-title-suggestions'/>
            <datalist id='job-title-suggestions'>
                {jobTitleSuggestions.map((suggestion, index) => (
                    <option key={index} value={suggestion}/>
                ))}
            </datalist>
           </div>

           <div>
            <input type="text" value={city}
            onChange={handleCityChange} placeholder='Enter City' list="city-suggestions"
            />
            <datalist id="city-suggestions">
                {citySuggestions.map((suggestion,index) => (
                    <option key={index} value={suggestion}/>
                ))}
            </datalist>
           </div>

           <button onClick={handleSearch} className='search-btn' disabled={loading}>{loading ? 'Searching...' : 'Search'}</button>
        </div>

        {/* <div>
            {jobs.length > 0 ? (
                <ul>
                    {jobs.map((job) => (
                        <li key={job.id}>{job.title} - {job.city}</li>
                    ))}
                </ul>
            ) : (
                <span></span>
            )}
             {/* : ( */}
                 {/* // <p>No jobs found</p> */}
             {/* )} *
        
        </div> */}

        {/* notifications and account details */}
        <div className='alertSectionDiv'>
            <div>
                <BiMessageSquareDetail size={25}/>
                <IoIosArrowDown size={16} className='mx-1' color='#494949'/>
            </div>
            <div>
                <IoNotificationsOutline size={25}/>
                <IoIosArrowDown size={16} className='mx-1' color='#494949'/>
            </div>
        </div>

        {/* Account info */}
        <div className='accountInfo'>
            <div className='notificationBadge'>
                <span>20</span>
            </div>
            <div className='accountUserImage'>
                <img src={UserAvatar} className=''/>
            </div>
            <IoIosArrowDown size={20} onClick={openPopup}/>
        </div>

        {openUserSetting && (
            <ProfileDetails close={openPopup} openUserSetting={openUserSetting}/>
        )}
    </nav>
    </>
  )
}

export default DashboardNav