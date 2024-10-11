import { useState } from 'react'
import ExerciseListItem from '../ExerciseListItem/ExerciseListItem'
import Search from '../Search/Search'

function Exercises(props) {

    const {data} = props;

    // state to keep track of exercises. Initial state is the full DB
    const [filteredExercises, setFilteredExercises] = useState(data);
    
    // filterList function to filter the list based on the search components input
    const filterList = (query) => {

        // filter through all exercises and save result in filterResult
        const filterResult = data.filter((exercise) => 
            // translate exercise name to all lower case and compare it with the query coming from the search form (which is also translated to all lower case)
            exercise.name.toLowerCase().includes(query.toLowerCase())
        );
        //  assign filterResult to filteredExercises
        setFilteredExercises(filterResult);
    }

    return(
        <>
            <Search filterList={filterList} /> {/* Seaech component receives filterList function as a prop */}
            
            {filteredExercises.length === 0
                ? <p>No exercises found</p>
                : <>
                    {filteredExercises.map((item) => (
                        <ExerciseListItem
                            key={item.id}
                            id={item.id} 
                            title={item.name} 
                        />
                    ))}
                </>
            }
        </>
    )
}

export default Exercises