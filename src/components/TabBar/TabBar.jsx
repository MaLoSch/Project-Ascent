import { Link, useLocation } from 'react-router-dom'
import FitnessCenterOutlinedIcon from '@mui/icons-material/FitnessCenterOutlined';
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';
import FaceOutlinedIcon from '@mui/icons-material/FaceOutlined';
import './TabBar.scss'

function TabBar(props){
    const { type } = props;

    const location = useLocation()

    function isActive(path) {
        return location.pathname.startsWith(path); // if location pathname starts 'path', return true. Otherwise return false. Use this version if only exercises page should be acitve but not the single exercise page
        //return location.pathname === path; // if location pathname is equal to path, return true. Otherwise return false
    }

    function renderNav() {
        return(
            <ul className='tab-bar'>
                <li>
                    <Link to='/exercises' className={isActive('/exercises') ? 'active' : ''}>
                        <FitnessCenterOutlinedIcon className="tab-bar-icon" fontSize="12px"/>
                        <p className="tab-bar-title">Exercises</p>
                    </Link>
                </li>
                
                <li>
                    <Link to='/timer' className={isActive('/timer') ? 'active' : ''}>
                        <TimerOutlinedIcon className="tab-bar-icon" fontSize="12px"/>
                        <p className="tab-bar-title">Timer</p>
                    </Link>
                </li>
                
                <li>
                    <Link to='/profile' className={isActive('/profile') ? 'active' : ''}>
                        <FaceOutlinedIcon className="tab-bar-icon" fontSize="12px"/>
                        <p className="tab-bar-title">Profile</p>
                    </Link>
                </li>
            </ul>
        )
    }

    function renderTimerLink() {
        return(
            <ul className='tab-bar'>
                <li>
                    <Link to='/timer'>
                        <TimerOutlinedIcon className="tab-bar-icon" fontSize="12px"/>
                        <p className='tab-bar-title'>Start exercise</p>
                    </Link>
                </li>
            </ul>
        )
    }

    return(
        <>
            {type === "nav" ? renderNav() : renderTimerLink()}
        </>
    )
}

export default TabBar