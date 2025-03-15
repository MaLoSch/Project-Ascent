import { useState } from "react";

const TimeEditor = ({ time, setTime }) => {
  const [editingField, setEditingField] = useState(null);
  const [inputValue, setInputValue] = useState("");

  const handleSpanClick = (field) => {
    setEditingField(field);
    setInputValue(time[field]);
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
    <div style={{ fontSize: "2rem" }}>
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
              style={{ width: "50px", fontSize: "1.5rem" }}
            />
          ) : (
            <span onClick={() => handleSpanClick(field)}>{String(time[field]).padStart(2, '0')}</span>
          )}
          {index < 2 && <span>:</span>}
        </span>
      ))}
    </div>
  );
};

export default TimeEditor;
