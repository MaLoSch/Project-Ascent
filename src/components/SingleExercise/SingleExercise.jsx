import { useParams } from 'react-router-dom'
import AccordionItem from '../../components/AccordionItem/AccordionItem'
import ClipImage from '../../components/ClipImage/ClipImage'
import Pill from '../../components/Pill/Pill'

function SingleExercise(props) {

    const { data } = props;
    const { id } = useParams();

    const exercise = data.find(ex => ex.id === parseInt(id))

    // little helper function to convert the first character of a string to uppercase
    function toUpperCase(string) {
        const str = string[0].toUpperCase() + string.slice(1);
        return str;
    }

    return(
        <>
        <div className='page-content'>
            
            <section>
                <p>{exercise.description}</p>
            </section>

            <section>
                <ClipImage imageName={exercise.heroImage} range="5" height="320px" className="animate"></ClipImage>
            </section>

            <section>
            <AccordionItem title="How to">
                <p>{exercise.howTo}</p>
            </AccordionItem>
            </section>

            <section>
                <div className="pill-container">
                    {exercise.effect.map((item, id) => (
                        <Pill key={id}>{toUpperCase(item)}</Pill>
                    ))}
                </div>
            </section>
        </div>
        </>
    )
}

export default SingleExercise