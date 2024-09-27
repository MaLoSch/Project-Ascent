import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'

function Layout(props) {

    const { data } = props;

    return(
        <>
            <Header data={data} />
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default Layout