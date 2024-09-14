import React from 'react';
import './Popup.css';

const Popup = ({ selectedDate, closePopup }: { selectedDate: Date; closePopup: () => void }) => {
  return (
    <div className="popup">
          <div className="popup-content">
            <h3>Selected Date: {selectedDate.toDateString()}</h3>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
  );
};

export default Popup;
