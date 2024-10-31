import { useParams } from 'react-router-dom'
import AccordionItem from '../../components/AccordionItem/AccordionItem'
import ClipImage from '../../components/ClipImage/ClipImage'
import Pill from '../../components/Pill/Pill'
import Meta from '../../components/Meta/Meta'
import './SingleExercise.scss'

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
                <ClipImage imageName={exercise.heroImage} range="5" height="33vh" className="animate"></ClipImage>
            </section>

            <section className='side-padding'>
                <div className="pill-container">
                    {exercise.effect.map((item, id) => (
                        <Pill key={id}>{toUpperCase(item)}</Pill>
                    ))}
                </div>
            </section>

            <section>
                <Meta effort={exercise.effort} time={exercise.time}></Meta>
            </section>

            <section className='side-padding'>
                <AccordionItem title="Description" open={true}>
                    <p>{exercise.description}</p>
                </AccordionItem>
            </section>

            <section className='side-padding'>
                <AccordionItem title="How to">
                    <ul className="how-to">
                        {exercise.howTo.map((step, id) => (
                            <li key={id}>{step}</li>
                        ))}
                    </ul>
                </AccordionItem>
            </section>
        </div>
        </>
    )
}

export default SingleExercise