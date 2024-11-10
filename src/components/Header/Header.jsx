import { 
    Link, // required to navigate to different pages
    useNavigate // required for back button functionality
} from 'react-router-dom'
import './Header.scss' // import the scss for this component
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import pa from "../../assets/PA.svg"

function Header({type = "nav"}) {

    const navigate = useNavigate();
    
    const showLeftToolbar = () => {
        if(type === "timer") {
            return(
                <div className="back-button" onClick={() => {navigate(-1)}}>
                    <ArrowBackOutlinedIcon className="back-icon" fontSize='1rem'/>
                    <span>Back</span>
                </div>
            )
        } else {
            return(
                <div className="menu-button">
                   {/* <MenuOutlinedIcon /> {/* Hiding menu for now as it is not required at the moment */ }
                </div>
            )
        }
    }
    
    return(
        <>
            <div id="header">
                {/** onClick nafigate(-1) is the back button functionality provided by react-router-dom */}
                <div className="left-header">
                    { showLeftToolbar() }
                </div>
                
                <div className="middle-header">
                    <Link to='/'>
                        <span>Project</span>
                            <img className="app-logo" src={pa} />
                        <span>Ascent</span>
                    </Link>
                </div>

                <div className="right-header">
                    {/* <FilterAltOutlinedIcon /> Hiding filtering icon for now as the functionality is not available at the moment */ }
                </div>
            </div>
        </>
    )
}

export default Header;