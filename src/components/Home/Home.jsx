import "./Home.scss"
import ClipImage from "../ClipImage/ClipImage"
import {useState} from 'react'

function Home() {

    function getRandomCoverImage() {
        let number = Math.floor(Math.random()*7);
        return `cover-${number}`;
    }

    return(
        <>
        <section className="full-height">
            <ClipImage imageName={getRandomCoverImage()} range="5" height="100%" className="clipped" />
        </section>
        </>
    )
}

export default Home