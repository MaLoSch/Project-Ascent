import { useState } from "react";

import img from "../../assets/0.jpg"
import "./ClipImage.css"

function ClipImage({type = "random", range = 25}) {

    
    function randomPos() {
        return(Math.floor(Math.random()*range))
    }
    
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

    switch(type) {
        case 'random':
            break;
        case 'trapezoid':
            break;
        default:
           break; 
    }

    return(
        <>
            <img
                className="animate"
                onClick={handleClick}
                style={{
                clipPath: `polygon(${points.x1}% ${points.y1}%,${points.x2}% ${points.y2}%,${points.x3}% ${points.y3}%,${points.x4}% ${points.y4}%)`,
            }} src={img}></img>
        </>
    )
}

export default ClipImage