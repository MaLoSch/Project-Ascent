import { Link } from 'react-router-dom'
import './Header.scss'
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import pa from "../../assets/PA.svg"

function Header(props) {
        
    return(
        <>
            <div id="header">
                {/* <MenuOutlinedIcon /> Hiding menu for now as it is not required at the moment */ }
                <Link to='/'>
                    <span>Project</span>
                    <span>
                        <img className="app-logo" src={pa} />
                    </span>
                    <span>Ascent</span>
                </Link>
                {/* <FilterAltOutlinedIcon /> Hiding filtering icon for now as the functionality is not available at the moment */ }
            </div>
        </>
    )
}

export default Header;