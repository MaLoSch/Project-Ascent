import './Notification.scss'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

function Notification ({msg}) {

    return(
        <>
            <div className="notification">
                <InfoOutlinedIcon fontSize='.75rem' className='notification-icon'/>
                <p>{msg}</p>
            </div>
        </>
    )
}

export default Notification