import './Meta.scss'
import SpeedOutlinedIcon from '@mui/icons-material/SpeedOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';

function Meta(props) {

    const { time, effort } = props

    return(
        <>
        <section className="meta-info side-padding">
            <span>
                <AccessTimeOutlinedIcon className="meta-icon" fontSize='.75rem' />
                {time}
            </span>
            <span>&nbsp;|&nbsp;</span>
            <span>
                <SpeedOutlinedIcon className="meta-icon" fontSize='.75rem' />
                {effort}
            </span>
        </section>
        </>
    )

}

export default Meta