import { Link } from 'react-router-dom'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'
import './Layout.css'

function Layout(props) {

    const { data } = props;

    return(
        <>
            <Header data={data} />
            
            <main>
                { <Outlet /> }
            </main>

            <nav className='main-nav'>
                <ul className='tab-bar'>
                <li><Link to='/exercises'>Exercises</Link></li>
                <li><Link to='/timer'>Timer</Link></li>
                <li><Link to='/profile'>Profile</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default Layout