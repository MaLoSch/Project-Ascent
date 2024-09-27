import "./Pill.css"

function Pill(props) {
    return(
        <>
            <p className="pill">{props.children}</p>
        </>
    )
}

export default Pill;