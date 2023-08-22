import React from 'react';
// import './SwitchButton.css'; // Import your custom CSS for styling the switch

const SwitchButton = ({ checked, onChange }) => {
  return (
    <label className="switch">
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span className="slider"></span>
    </label>
  );
};

export default SwitchButton;
                                                                                  