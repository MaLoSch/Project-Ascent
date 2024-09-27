import { useParams } from 'react-router-dom'
import AccordionItem from '../../components/AccordionItem/AccordionItem'
import ClipImage from '../../components/ClipImage/ClipImage'
import Pill from '../../components/Pill/Pill'

function SingleExercise(props) {

    const { data } = props;
    const { id } = useParams();

    const exercise = data.find(ex => ex.id === parseInt(id))

    return(
        <>
        <div className='page-content'>
            
            <section>
                <p>{exercise.description}</p>
            </section>

            <section>
                <ClipImage type="random" range="10"></ClipImage>
            </section>

            <section>
            <AccordionItem title="How to">
                <p>{exercise.howTo}</p>
            </AccordionItem>
            </section>

            <section>
                <div className="pill-container">
                    <Pill>This is my pill text</Pill>
                    <Pill>This is another pill</Pill>
                    <Pill>Strength</Pill>
                    <Pill>Core</Pill>
                </div>
            </section>
        </div>
        </>
    )
}

export default SingleExercise