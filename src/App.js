import React from 'react';
import Calendar_com from './Calendar.tsx';
import Header from './Header.tsx';
import './App.css';


const App = () => {
  return (
    <div>
      <Header/>
      <div class='cal'>
        <Calendar_com />
      </div>
      
    </div>
  );
};

export default App;


