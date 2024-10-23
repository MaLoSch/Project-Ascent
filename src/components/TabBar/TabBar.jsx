import { Link, useLocation } from 'react-router-dom'
import './TabBar.css'

function TabBar(){

    const location = useLocation()

    function isActive(path) {
        return location.pathname.startsWith(path); // if location pathname starts 'path', return true. Otherwise return false. Use this version if only exercises page should be acitve but not the single exercise page
        //return location.pathname === path; // if location pathname is equal to path, return true. Otherwise return false
    }

    return(
        <>
            <nav className='main-nav'>
                <ul className='tab-bar'>
                    <li className={isActive('/exercises') ? 'active' : ''}>
                        <div className="link-icon"></div>
                        <Link to='/exercises'>Exercises</Link>
                    </li>
                    <li className={isActive('/timer') ? 'active' : ''}>
                        <div className="link-icon"></div>
                        <Link to='/timer'>Timer</Link>
                    </li>
                    <li className={isActive('/profile') ? 'active' : ''}>
                        <div className="link-icon"></div>
                        <Link to='/profile'>Profile</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default TabBar