import "./ExerciseListItem.scss"; // import the css file for this component
import { Link } from 'react-router-dom'
import ArrowForward from '@mui/icons-material/ArrowForward'

function ExerciseListItem(props) {

    const {id, title } = props;

    return(
        <>
            <Link to={`/exercises/${id}`}>
                <div className="exerciseListItem">
                    <ArrowForward fontSize="12px"/>    
                    <p className="exerciseListTitle">{title}</p>
                </div>
            </Link>
        </>
    )
}

export default ExerciseListItem;