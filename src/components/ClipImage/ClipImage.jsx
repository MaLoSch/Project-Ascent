import { useEffect, useState } from "react"; // import required react modules
import "./ClipImage.css" // import CSS file for component

function ClipImage({ imageName = "default", range = 8, height="auto", className=""}) {

    // imageName -> The name of the image that should be pulled (currently they all need to be in the same folder)
    // range -> how much "movement" is in the image corners
    // height -> how tall should the image be displayed
    // className -> animate, hero

    // function to retrieve a random position for each corner of the polygon mask
    function randomPos() {
        return(Math.floor(Math.random()*range))
    }
    
    // function when the image is clicked
    function handleClick() {
        setPoints(points => ({
            ...points,
            x1: randomPos(),
            y1: randomPos(),
            x2: randomPos(),
            y2: 100 - randomPos(),
            x3: 100 - randomPos(),
            y3: 100 - randomPos(),
            x4: 100 - randomPos(),
            y4: randomPos()
        }));
    }

    const [points, setPoints] = useState(
        {
            x1: randomPos(),
            y1: randomPos(),

            x2: randomPos(),
            y2: 100 - randomPos(),
            
            x3: 100 - randomPos(),
            y3: 100 - randomPos(),
            
            x4: 100 - randomPos(),
            y4: randomPos()
        }
    );

    const [imgSrc, setImgSrc] = useState(null)

    useEffect(() => {
        async function loadImage() {
            try {
                const image = await import(`../../assets/images/${imageName}.jpg`)
                setImgSrc(image.default)
            } catch (error) {
                const fallbackImage = await import(`../../assets/images/default.jpg`)
                setImgSrc(fallbackImage.default)
            }
        }
        loadImage()
    }, [imageName])

    return(
        <>
             <div className={className}
                onClick={handleClick}
                style= {{
                    clipPath: `polygon(${points.x1}% ${points.y1}%,${points.x2}% ${points.y2}%,${points.x3}% ${points.y3}%,${points.x4}% ${points.y4}%)`,
                    height: `${height}`,
                    backgroundImage: `url(${imgSrc})`
                }}
            ></div>
        </>
    )
}

export default ClipImage