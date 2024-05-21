import React from 'react'
import { Link } from 'react-router-dom'

const NavSubmenu = ({submenus}) => {
  return (
    <>
        <div className='submenuWrapper'>
            {submenus.map((submenu) => {
                return(
                    <div>
                        <li key={submenu.id} >
                            <div className='submenuwrap'>
                                <Link to={submenu.id}>
                                    {submenu.name}
                                </Link>

                                {/* Child Menu */}
                                {submenu.submenus.map(childMenu => (
                                    <div className='childWrapper'>
                                        <Link key={childMenu.id} to={childMenu.url}>{childMenu.name}</Link>
                                    </div>
                                ))}
                            </div>
                        </li>
                    </div>
                )
            })}
        </div>
    </>
  )
}

export default NavSubmenu