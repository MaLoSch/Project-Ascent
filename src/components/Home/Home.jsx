import "./Home.scss"
import ClipImage from "../ClipImage/ClipImage"

function Home() {
    return(
        <>
        <section className="full-height">
            <ClipImage imageName="cover" range="5" height="100%" className="animate hero" />
        </section>
        </>
    )
}

export default Home