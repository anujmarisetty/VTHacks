import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Popup.css'; 
// import Popup from './Popup';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

function Popup({ selectedDate, closePopup }: { selectedDate: Date; closePopup: () => void }) {
  return (
    <div className="popup">
      <div className="popup-content">
        <h3>Selected Date: {selectedDate.toDateString()}</h3>
        <button onClick={closePopup}>Close</button>
      </div>
    </div>
  );
}

function MyApp() {
  const [value, onChange] = useState<Value>(new Date());
  const [showPopup, setShowPopup] = useState(false); // Track popup visibility
  const [selectedDate, setSelectedDate] = useState<Date | null>(null); // Track selected date

  const handleDateChange = (newValue: Value) => {
    if (newValue instanceof Date) {
      setSelectedDate(newValue); // Set selected date
      setShowPopup(true); // Show popup when date is selected
    }
    onChange(newValue); // Update calendar date
  };

  const closePopup = () => {
    setShowPopup(false); // Close the popup
  };

  return (
    <div>
      <Calendar onChange={handleDateChange} value={value} />

      {/* {showPopup && <Popup selectedDay={selectedDay} closePopup={closePopup} />} */}
      {showPopup && selectedDate && <Popup selectedDate={selectedDate} closePopup={closePopup} />}
    </div>
  );
}

export default MyApp;
