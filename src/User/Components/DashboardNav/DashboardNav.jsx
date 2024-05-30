import React, { useState } from 'react'
import { BiMessageSquareDetail } from "react-icons/bi";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from 'react-router-dom';
import UserAvatar from '../../../assets/usersIcon/UserAvatar.jpg'
import DashboardSubMenus from './DashboardSubMenus';
import ProfileDetails from './ProfileDetails';
import './DashboardNav.moudle.css'
import { IoIosSettings } from "react-icons/io";



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

    const UserData = {
        "data":[
            {
                "id":1,
                "user_image":UserAvatar,
                "userName":"Karthik K",
                "role":"React Developer",
                "profile_score":50,
                "search_appearance":100,
                "recruiter_actions":33,
            }
        ]
    };

    // Message Popup

    // Notification
    const [notification, setNotification] = useState();

    const openNotification = () => {
        setNotification(!notification)
    };

    // notification data
    const notificationData = {
        "notifications": [
            {
                "type": "New Job Alert",
                "title": "Software Engineer at Tech Innovators Inc.",
                "posted": "Just now",
                "location": "San Francisco, CA",
                "salary": "$120,000 - $140,000 per year",
                "applyBy": "June 15, 2024",
                "description": "Seeking a skilled software engineer with 3+ years of experience in Python and JavaScript. Strong problem-solving skills and a passion for innovation are a must."
            },
            {
                "type": "New Job Alert",
                "title": "Marketing Manager at Creative Minds Co.",
                "posted": "10 minutes ago",
                "location": "Remote",
                "salary": "$70,000 - $90,000 per year",
                "applyBy": "June 20, 2024",
                "description": "Looking for a dynamic marketing manager with expertise in digital marketing strategies and social media management. Previous experience in a similar role required."
            },
            {
                "type": "Application Status Update",
                "title": "Project Manager at BuildIt Corp.",
                "status": "Under Review",
                "appliedOn": "May 15, 2024",
                "description": "Thank you for your application for the Project Manager position at BuildIt Corp. Your application is currently under review. We will notify you of the next steps soon."
            },
            {
                "type": "New Job Alert",
                "title": "Data Analyst at Data Insights LLC",
                "posted": "30 minutes ago",
                "location": "New York, NY",
                "salary": "$80,000 - $95,000 per year",
                "applyBy": "June 25, 2024",
                "description": "Seeking a data analyst with proficiency in SQL and data visualization tools like Tableau. Experience in data mining and statistical analysis is preferred."
            },
            {
                "type": "Interview Scheduled",
                "title": "UX Designer at Creative Studio",
                "interviewDate": "June 5, 2024",
                "time": "2:00 PM EST",
                "location": "Virtual (Zoom link will be sent via email)",
                "description": "Your interview for the UX Designer position at Creative Studio has been scheduled. Please prepare a portfolio presentation and be ready to discuss your design process."
            },
            {
                "type": "New Job Alert",
                "title": "Customer Service Representative at HelpDesk Inc.",
                "posted": "1 hour ago",
                "location": "Austin, TX",
                "salary": "$40,000 - $50,000 per year",
                "applyBy": "June 10, 2024",
                "description": "Join our team as a customer service representative. Excellent communication skills and a friendly attitude are essential. Prior customer service experience is a plus."
            },
            {
                "type": "Application Status Update",
                "title": "Junior Accountant at FinanceWorks",
                "status": "Rejected",
                "appliedOn": "May 10, 2024",
                "description": "We regret to inform you that your application for the Junior Accountant position at FinanceWorks was not successful. Thank you for your interest, and we encourage you to apply for future openings."
            },
            {
                "type": "New Job Alert",
                "title": "Graphic Designer at AdCreatives",
                "posted": "2 hours ago",
                "location": "Chicago, IL",
                "salary": "$50,000 - $65,000 per year",
                "applyBy": "June 30, 2024",
                "description": "We are looking for a talented graphic designer with a strong portfolio and proficiency in Adobe Creative Suite. Experience in branding and advertising is highly desirable."
            },
            {
                "type": "Interview Scheduled",
                "title": "Sales Executive at Global Sales Co.",
                "interviewDate": "June 10, 2024",
                "time": "11:00 AM EST",
                "location": "Company Headquarters (123 Main St, New York, NY)",
                "description": "Your interview for the Sales Executive position at Global Sales Co. has been scheduled. Please bring a copy of your resume and be prepared to discuss your sales experience and techniques."
            },
            {
                "type": "New Job Alert",
                "title": "HR Coordinator at PeopleFirst HR",
                "posted": "3 hours ago",
                "location": "Remote",
                "salary": "$55,000 - $70,000 per year",
                "applyBy": "July 1, 2024",
                "description": "Seeking an HR coordinator with strong organizational skills and experience in recruitment and employee relations. HR certification is a plus."
            }
        ]
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
                <IoIosArrowDown size={16} className='mx-1' color='#494949' onClick={openNotification}/>
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
        {/* user info */}
        {openUserSetting && (
            <ProfileDetails UserData={UserData} close={openPopup} openUserSetting={openUserSetting}/>
        )}

        {/* Notification */}
        {notification && (
            <div className='notificationWrapper'>
                <div className='notificationinnerDiv'>
                    <div>
                        <div>
                            <h6>Notification</h6>
                            <span>Mark all as read</span>
                        </div>
                        <div>
                            <div>
                                <button>All</button>
                                <button>Archived</button>
                            </div>
                            <div>
                                <IoIosSettings size={30}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )}

    </nav>
    </>
  )
}

export default DashboardNav