import React, { useState } from 'react';

const ColorPicker = ({ colors }) => {
  const [showColors, setShowColors] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);

  const handleButtonClick = () => {
    setShowColors(!showColors);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setShowColors(false);
  };

  return (
    <div className='dd'>
      <button className="but" onClick={handleButtonClick}>Pick a color</button>
      {showColors && (
        <div className="color-list">
          {colors.map((color, index) => (
            <div
              key={index}
              className="color-square"
              style={{ backgroundColor: color }}
              onClick={() => handleColorClick(color)}
            />
          ))}
        </div>
      )}
      {selectedColor && (
        <p>You picked: <span style={{ color: selectedColor }}>{selectedColor}</span></p>
      )}
    </div>
  );
};

export default ColorPicker;
