import profilePic from "../../assets/profile3.jpeg"
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import "./Profile.scss"

function Profile() {
    return(
        <>
        <section className="side-padding center">
            <img className="profile-pic" src={profilePic}></img>
        </section>

        <section className="side-padding center">
            <p className="given-name">Profile handle</p>
            <p className="actual-name">Actual Name</p>
        </section>

        <section className="side-padding center">
            <p className="description">Profile description goes here.</p>
        </section>

        <section className="side-padding center">
            <p className="location">
            <LocationOnOutlinedIcon fontSize="12px" />
            <span className="city">City,&nbsp;</span><span className="country">Country</span>
            </p>
        </section>
        </>
    )
}

export default Profile