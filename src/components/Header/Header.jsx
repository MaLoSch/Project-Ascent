import { useLocation, useParams, Link } from 'react-router-dom'
import './Header.css'
import filter_icon from "../../assets/filter_24dp.svg"
import menu_icon from "../../assets/menu_24dp.svg"
import Marquee from "../Marquee/Marquee"
import pa from "../../assets/PA.svg"

function Header(props) {

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

    return(
        <>
            <div className="header">
                <img src={menu_icon} />
                <Link to='/'>
                    <img className="header-title" src={pa} />
                </Link>
                <img src={filter_icon} />
            </div>
            {/* */}
            <Marquee>{getTitle()}</Marquee>
        </>
    )
}

export default Header;