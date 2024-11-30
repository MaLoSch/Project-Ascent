import { useEffect, useState } from "react"; // import required react modules
import "./ClipImage.scss" // import CSS file for component

function ClipImage({ imageName = "default", range = 8, height="auto", className="", style="random" }) {

    // imageName -> The name of the image that should be pulled (currently they all need to be in the same folder)
    // range -> how much "movement" is in the image corners
    // height -> how tall should the image be displayed
    // className -> animate, hero
    // style -> pre-defined image clipping paths (see below for options)

    // function to retrieve a random position for each corner of the polygon mask

    const [clipStyle, setClipStyle] = useState(() => {
        if(style === "random") {
            let options = ['p-up', 'p-down', 'corner-tl', 'corner-tr', 'corner-bl', 'corner-br', 'full'];
            let randomIndex = Math.floor(Math.random()* options.length);
            return(options[randomIndex])
        } else {
            return style;
        }
    })

    function createClipPath() {
        switch(clipStyle) {
            case 'p-up':
                return `polygon(${0}% ${0+range}%, ${0}% ${100}%, ${100}% ${100-range}%, ${100}% ${0}%)`;
            case 'p-down':
                return `polygon(${0}% ${0}%, ${0}% ${100-range}%, ${100}% ${100}%, ${100}% ${0+range}%)`;
            case 'corner-tl':
                return `polygon(${0+range}% ${0+range}%, ${0}% ${100}%, ${100}% ${100}%, ${100}% ${0}%)`;
            case 'corner-tr':
                return `polygon(${0}% ${0}%, ${0}% ${100}%, ${100}% ${100}%, ${100-range}% ${0+range}%)`;
            case 'corner-br':
                return `polygon(${0}% ${0}%, ${0}% ${100}%, ${100-range}% ${100-range}%, ${100}% ${0}%)`;
            case 'corner-bl':
                return `polygon(${0}% ${0}%, ${0+range}% ${100-range}%, ${100}% ${100}%, ${100}% ${0}%)`;
            default: // full
                return `polygon(${0}% ${0}%,${0}% ${100}%,${100}% ${100}%,${100}% ${0}%)`;
        }
    }

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
                style= {{
                    clipPath: createClipPath(),
                    height: `${height}`,
                    backgroundImage: `url(${imgSrc})`
                }}
            ></div>
        </>
    )
}

export default ClipImage