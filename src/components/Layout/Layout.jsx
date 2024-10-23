import Header from '../Header/Header'
import TabBar from '../TabBar/TabBar'
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

            <TabBar />
        </>
    )
}

export default Layout