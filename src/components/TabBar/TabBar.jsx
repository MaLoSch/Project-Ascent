import { Link, useLocation } from 'react-router-dom'
import FitnessCenterOutlinedIcon from '@mui/icons-material/FitnessCenterOutlined';
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';
import FaceOutlinedIcon from '@mui/icons-material/FaceOutlined';
import './TabBar.scss'

function TabBar(){

    const location = useLocation()

    function isActive(path) {
        return location.pathname.startsWith(path); // if location pathname starts 'path', return true. Otherwise return false. Use this version if only exercises page should be acitve but not the single exercise page
        //return location.pathname === path; // if location pathname is equal to path, return true. Otherwise return false
    }

    return(
        <>
            <ul className='tab-bar'>
                <li className={isActive('/exercises') ? 'active' : ''}>
                    <FitnessCenterOutlinedIcon />
                    <Link to='/exercises'>Exercises</Link>
                </li>
                <li className={isActive('/timer') ? 'active' : ''}>
                    <TimerOutlinedIcon />
                    <Link to='/timer'>Timer</Link>
                </li>
                <li className={isActive('/profile') ? 'active' : ''}>
                    <FaceOutlinedIcon />
                    <Link to='/profile'>Profile</Link>
                </li>
            </ul>
        </>
    )
}

export default TabBar