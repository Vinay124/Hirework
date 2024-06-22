import React, { useEffect, useState } from 'react'
import Profileimage from '../../../assets/usersIcon/UserAvatar.jpg'
import { MdOutlineLogout } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5"
import { CgProfile } from "react-icons/cg";
import { LiaUserEditSolid } from "react-icons/lia";
import { LuMessagesSquare } from "react-icons/lu";
import { HiOutlineSaveAs } from "react-icons/hi";
import { MdOutlinePeopleOutline } from "react-icons/md";
import { FaTasks } from "react-icons/fa";
import ProgressBar from "@ramonak/react-progress-bar";
import axios from 'axios'
import Config from '../../../../config';
import { Link, useNavigate } from 'react-router-dom';
import { TbSettingsStar } from 'react-icons/tb';


const ProfileDetails = ({ getProfileImage }) => {


  const NavLinks = {
    "links":[
      {
        "id":1,
        "name":"Profile",
        "url":"/",
        "icon":<CgProfile size='28' color="#898989"/>
      },
      {
        "id":2,
        "name":"Edit Profile",
        "url":"/",
        "icon":<LiaUserEditSolid size='28' color="#898989"/>
      },
      {
        "id":3,
        "name":"Messages",
        "url":"/",
        "icon":<LuMessagesSquare size='28' color="#898989"/>
      },
      {
        "id":4,
        "name":"Save Jobs",
        "url":"/",
        "icon":<HiOutlineSaveAs size='28' color="#898989"/>
      },
      {
        "id":5,
        "name":"Recruiter View",
        "url":"/",
        "icon":<MdOutlinePeopleOutline size='28' color="#898989"/>

      },
      {
        "id":6,
        "name":"Pending Assessments",
        "url":"/",
        "icon":<FaTasks size='28' color="#898989"/>
      },
      {
        "id":7,
        "name":"Settings",
        "url":"/",
        "icon":<IoSettingsOutline size='28' color="#898989"/>
      },
      // {
      //   "id":8,
      //   "name":"LogOut",
      //   "url":"/",
      //   "icon":<MdOutlineLogout size='28' color="#898989"/>
      // }
    ]
  }

  // Logoutfunction

  const { apiUrl } = Config;

  const navigate = useNavigate();

  const tokenID = sessionStorage.getItem('token');

  const handleLogout = async () => {
    try {
      await axios.post(`${apiUrl}user/logout`,{"token":tokenID});
      sessionStorage.removeItem('token');
      navigate('/JobSeekerLogin')
    } catch (error) {
      console.log('LogoutFailed',error)
    }
  };

  const userName = localStorage.getItem('name');
  const jobRole = localStorage.getItem('jobRole');

      const [newNum, setNewNum] = useState(0);
      const [barColor, setBarColor] = useState('#69aaf9');


      const fetchScore = async () => {
        try {
          //   const response = await fetch('https://api.example.com/score'); 
          //   const data = await response.json();
          // localStorage.setItem('newScore', newScore);
          const newdata = localStorage.getItem('newScore');
          if (newdata >= 0 && newdata <= 100) {
            setNewNum(newdata);
          }
        } catch (error) {
          console.error('Error fetching score:', error);
        }
      };

      useEffect(() => {
        fetchScore();
      }, []);

      useEffect(() => {
          if (newNum <= 30) {
              setBarColor('#FF0000');
          } else if (newNum <= 70) {
              setBarColor('#FFA500');
          } else {
              setBarColor('#008000');
          }
      }, [newNum]);


  return (
    <>
    <div className='profileDetails'>
      <div className='profileinnerDiv'>
        <div>
                <div className='profileDropdownDetails'>
                    <div className='profileDetailsWrapperDiv'>
                      <div className='userimage'>
                        <img src={getProfileImage} className='' alt=''/>
                      </div>
                      <div>
                        <h4>{userName}</h4>
                        <span>{jobRole}</span>
                        <div>
                          <Link to="/UserDashboard/UserProfileDetails">
                            <button className='btn-viewandUpdate'>View and Update Profile</button>
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div className='progressBarDiv mb-3'>
                      <ProgressBar completed={`${newNum}`}
                        height='14px'
                        baseBgColor='#dddddd'
                        bgColor={`${barColor}`}
                        style={{margin:'0 auto'}}
                        labelSize='0'
                        width='90%'
                        borderRadius='5px'
                      />
                    </div>

                </div>
                <div>
                  
                  <div className='navLinksWrapper'>
                      <ul>
                        {NavLinks.links.map((navLink) => {
                          return (
                            <li>
                                <span className='navLinkHover'>{navLink.icon}</span>
                                {navLink.name}
                            </li>
                          )
                        })}

                        <div className='logoutDiv'>
                          <div>
                            <MdOutlineLogout size='28' color="#898989"/>
                          </div>
                          <div>
                              <button className='btn-logout' onClick={handleLogout}>Logout</button>
                          </div>
                        </div>
                      </ul>
                  </div>
               </div>
            </div>
          </div>
      </div>
    </>
  )
}

export default ProfileDetails