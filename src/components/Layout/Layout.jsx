import { useLocation, useParams } from 'react-router-dom'
import Marquee from "../Marquee/Marquee"
import Header from '../Header/Header'
import TabBar from '../TabBar/TabBar'
import { Outlet } from 'react-router-dom'
import './Layout.scss'

function Layout(props) {

    const { data } = props;

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
    
    // function to check if we should display the marquee or not
    const displayMarquee = (path) => {
        // check if the pathname is unequal to path and return result (true / false)
        return true
        return location.pathname === path;
    }

    return(
        <>
            <header>
                <Header />
            </header>
            <main>
                {/* Conditional rendering of the Marquee as it should NOT be displayed on the home page ('/') */}
                {displayMarquee('/') ? <></> : <Marquee>{getTitle()}</Marquee> }
                { <Outlet /> }
            </main>
            <nav>
                <TabBar />
            </nav>
        </>
    )
}

export default Layout