import profilePic from "../../assets/profile.jpg"
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import "./Profile.scss"

function Profile() {
    return(
        <>
        <section className="side-padding">
            <img className="profile-pic" src={profilePic}></img>
        </section>

        <section className="side-padding">
            <p className="given-name">ma.lo.sch</p>
            <p className="actual-name">Markus Lorenz Schilling</p>
        </section>

        <section className="side-padding">
            <p className="description">Just your average outdoor enthusiast.</p>
        </section>

        <section className="side-padding">
            <p className="city">Lucerne</p>
            <p className="country">Switzerland</p>
        </section>
        </>
    )
}

export default Profile