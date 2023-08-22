import React, { useState } from 'react';

function AddMultipleValues({hilights, setHilights}) {
  const [inputValue, setInputValue] = useState('');
  const [total, setTotal] = useState(0);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddValue = (e) => {
    e.preventDefault();
    setHilights([...hilights, inputValue]);
    setTotal(total + inputValue);
    setInputValue(''); // Clear input field after adding value
  };

  return (
    <div>
      <h2>Add Hilights Values</h2>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter a value"
      />
      <button onClick={handleAddValue}>Add</button>
      <div>
        <p>Entered Values: {hilights.join(', ')}</p>
        <p>Total: {total}</p>
      </div>
    </div>
  );
}

export default AddMultipleValues;
