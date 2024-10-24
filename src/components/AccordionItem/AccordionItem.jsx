import {useRef, useState} from 'react' // import required react properties
import "./AccordionItem.scss"; // import accordion stylesheet

// main accordion function with children prop and title prop (using a default value)
function AccordionItem({children, title="Some other title"}) {

    const [isOpen, setIsOpen] = useState(false); // keeping track of isOpen state
    const [height, setHeight] = useState(0); // Initially height is 0 (collapsed)
    const contentRef = useRef(null); // Reference to the content element

    // function when accordion is toggled open / closed
    function toggleAccordion() {
        setIsOpen(!isOpen); // inverse isOpen state
        // if accordion is open
        if(!isOpen) {
            setHeight(contentRef.current.scrollHeight); // set the height to the height of the content
        } else {
            setHeight(0); // set height to 0
        }
    }

    return(
        <>
        <div>
            {/* comment if required */}
            <p className="accordion-title" onClick={toggleAccordion}>{title}</p>
            <div ref={contentRef} className={`accordion-content ${isOpen ? 'active' : ''}`} style={{ height: `${height}px`}}>
                {children}
            </div>
        </div>
        </>
    )
}

export default AccordionItem;