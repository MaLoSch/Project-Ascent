import './Notification.scss'
import InfoIcon from '@mui/icons-material/Info';
import ErrorIcon from '@mui/icons-material/Error';

function Notification (props) {

    const {msg, type} = props.notification;

    return(
        <>
            <div className={`notification ${type==="info" ? `info` : `warning`}`}>
                {type === "info" ? <InfoIcon fontSize='.75rem' className='notification-icon'/> : <ErrorIcon fontSize='.75rem' className='notification-icon'/>}
                <p>{msg}</p>
            </div>
        </>
    )
}

export default Notification