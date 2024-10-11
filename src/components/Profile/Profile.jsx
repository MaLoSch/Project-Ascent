import profilePic from "../../assets/0.jpg"
import "./Profile.css"

function Profile() {
    return(
        <>
        <div className="profile">
            <img className="pic" src={profilePic}></img>
            <p className="given-name">ma.lo.sch</p>
            <p className="actual-name">Markus Lorenz Schilling</p>
            <p className="city">Lucerne</p>
            <p className="country">Switzerland</p>
            <p className="description">Just your average outdoor enthusiast.</p>
        </div>
        </>
    )
}

export default Profile