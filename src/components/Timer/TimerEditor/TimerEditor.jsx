import { useState } from "react";

// TimerEditor component which receives time and setTime from the parent (Timer) component
const TimeEditor = ({ time, setTime }) => {
  const [editingField, setEditingField] = useState(null); // state to store which field (span) is being edited
  const [inputValue, setInputValue] = useState(""); // state for the input value

  const handleSpanClick = (field) => { // function to handle a click on a span element
    setEditingField(field); // set the editing field (span)
    setInputValue(time[field]); // get the current time and put it into the input field
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputBlur = () => {
    saveNewValue();
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      saveNewValue();
    }
  };

  const saveNewValue = () => {
    let newValue = parseInt(inputValue) || 0;
  
    if (editingField === "minutes" || editingField === "seconds") {
      newValue = Math.max(0, Math.min(59, newValue)); // Restrict to 0-59
    }
  
    const newTime = { ...time, [editingField]: newValue };
  
    // Convert to milliseconds
    setTime((newTime.hours * 3600 + newTime.minutes * 60 + newTime.seconds) * 1000);
  
    setEditingField(null);
  };
  

  return (
    <>
      {["hours", "minutes", "seconds"].map((field, index) => (
        <span key={field}>
          {editingField === field ? (
            <input
              type="number"
              value={inputValue}
              autoFocus
              onChange={handleInputChange}
              onBlur={handleInputBlur}
              onKeyDown={handleKeyDown}
              min={editingField === "hours" ? undefined : 0}
              max={editingField === "hours" ? undefined : 59}
              style={{ /** Add styles here if required */ }}
              className="time"
            />
          ) : (
            <span onClick={() => handleSpanClick(field)}>{String(time[field]).padStart(2, '0')}</span>
          )}
          {index < 2 && <span>:</span>}
        </span>
      ))}
    </>
  );
};

export default TimeEditor;
