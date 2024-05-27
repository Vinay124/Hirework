import React from 'react'
import { Link } from 'react-router-dom'

const DashboardSubMenus = ({submenuData}) => {
  return (
    <>
    <div className='dashboardSubmenuWrapper'>
    {submenuData.map((navSubmenu) => {
        return (
            <div>
                <li to={navSubmenu.id}>
                    <div>
                        <Link to={navSubmenu.url}>{navSubmenu.name}</Link>
                    </div>
                </li>
            </div>
        )})}
    </div>
    </>
  )
}

export default DashboardSubMenus