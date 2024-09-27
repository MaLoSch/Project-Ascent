import "./ExerciseListItem.css"; // import the css file for this component
import { Link } from 'react-router-dom'

function ExerciseListItem(props) {

    const {id, title } = props;

    return(
        <>
            <Link to={`/exercises/${id}`}>
                <div className="exerciseListItem">    
                    <p className="exerciseListTitle">{title}</p>
                </div>
            </Link>
        </>
    )
}

export default ExerciseListItem;