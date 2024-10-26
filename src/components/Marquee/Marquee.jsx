import "./Marquee.scss"

function Marquee(props) {

    const text = props.children;
    const count = 55;
    // should figure out how to do this based on the window length divided by item length
    const marqueeArray = Array(count).fill(text);

    return(
        <>
            <div className="marquee-container">
                {marqueeArray.map((item, index) => (
                    <p key={index}>{item}<span>&nbsp;&bull;&nbsp;</span></p>
                ))}
            </div>
        </>
    )
}

export default Marquee