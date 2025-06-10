import { useLocation, useParams } from 'react-router-dom'
import Marquee from "../Marquee/Marquee"
import Header from '../Header/Header'
import TabBar from '../TabBar/TabBar'
import { Outlet } from 'react-router-dom'
import { useTimer } from '../Timer/TimerContext/TimerContext';
import './Layout.scss'

function Layout(props) {

    const { data } = props;
    const {
        time,
        setTime,
        timerState,
        setTimerState,
        timerMode,
        setTimerMode,
        countdownTime,
        setCountdownTime
    } = useTimer();

    const location = useLocation();
    const { id } = useParams();

    const getExerciseTitle = (id) => {
        const exercise = data.find(ex => ex.id === parseInt(id));
        return exercise ? exercise.name : "Exersise not found";
    }

    const getTitle = () => {
        switch(location.pathname) {
            case "/exercises":
                return "Exercises";
            case "/timer":
                return "Timer";
            case "/profile":
                return "Profile";
            default:
                if(location.pathname.startsWith("/exercises/")) {
                    return getExerciseTitle(id);
                }
                return "Project Ascent";
        }
    }

    // function to change the class of the main elements based on if the timer is running and which page is active
    const getTimerState = () => {
        // if the timer is running AND the timer page is active
        if(timerState === 'running' && location.pathname === '/timer') {
            // return "running"
            return "running";
        // in all other scenarios
        } else {
            // return "standard"
            return "standard";
        }
    }
    
    // function to check if we should display the marquee or not
    const displayMarquee = (path) => {
        // check if the pathname is unequal to path and return result (true / false)
        //return true
        return location.pathname === path;
    }

    // function to determine what kind of nav should be displayed
    const navStyle = () => {
        return location.pathname.startsWith('/exercises/') ? 'timer' : 'nav';
    }

    return(
        <>
            {/* <header className={`${timerState === "running" ? "timer-running" : ""}`}> */ }
            <header className={getTimerState()}>
                <Header type={navStyle()}/>
                {/* Conditional rendering of the Marquee as it should NOT be displayed on the home page ('/') */}
                {displayMarquee('/') ? <></> : <Marquee>{getTitle()}</Marquee> }
            </header>
            <main className={`${displayMarquee('/') ? '' : 'extra-padding'} ${getTimerState()}`}>
                { <Outlet /> }
            </main>
            <nav className={getTimerState()}>
                <TabBar type={navStyle()} />
            </nav>
        </>
    )
}

export default Layout