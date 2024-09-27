import "./Search.css"
import { useState } from "react"

function Search(props)  {

    // destructuring of the props received
    const { filterList } = props; // filterList is the function received from List

    // state and setState to control the value of the input field
    const [search, setSearch] = useState('');

    // function to handle the change of the input text field
    function handleChange(e) {
        setSearch(e.target.value); // 
        filterList(e.target.value);
    }

    return(
        <>
            <input 
                type="text"
                placeholder="Search"
                value={search} // the value of the input field is determined by the state
                onChange={handleChange} // function to be called whenever the input field changes
            />
        </>
    )
}

export default Search;