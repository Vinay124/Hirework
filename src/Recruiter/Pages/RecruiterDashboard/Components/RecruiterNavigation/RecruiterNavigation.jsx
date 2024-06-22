import React from 'react'
import { RecruiterNavigationData } from './RecruiterNavigationData'
import './RecruiterNavigaction.moudle.css'
import { Link } from 'react-router-dom'

const RecruiterNavigation = () => {


    const userDetails = {
      "data":[
        {
          "name":"",
          "email":"",
          "profileimage":"",
          "plan":""
        }
      ]
    }

  return (
    <>
    
<div className='navSideBar'>
    <div className='sidebarContent'>
      <ul className='sidebarUl'>
        {RecruiterNavigationData.map((menuItem) => (
          <li key={menuItem.id}>
            {menuItem.submenu ? (
              <div className={`menu-item ${openMenuId === menuItem.id ? 'open' : ''}`}>
                <div className='d-flex align-items-center justify-content-between' onClick={() => handleMenuClick(menuItem.id)}>
                  <div className='d-flex align-items-baseline'>
                    <div>{menuItem.icon} </div>
                    <div className='mx-2'>{menuItem.label}</div>  
                  </div>
                <div>
                <LuChevronDown/>
                </div>
                </div>
              <ul>
                {menuItem.submenu.map((subItem) => (
                  <li key={subItem.id}>
                    <Link to={subItem.path}>{subItem.name}</Link>
                  </li>
                ))}
              </ul>
              </div>
            ) : (
              <Link to={menuItem.path}>
                <div className='d-flex   align-items-center'>
                  <div className='navigactionIcon'>{menuItem.icon}</div>
                  <div>{menuItem.label}</div>
                </div> 
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
   </div>
   </>
  )
}

export default RecruiterNavigation