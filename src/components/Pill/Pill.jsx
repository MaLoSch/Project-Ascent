import "./Pill.scss"

function Pill(props) {
    return(
        <>
            <p className="pill">{props.children}</p>
        </>
    )
}

export default Pill;