import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import DayView from './DayView';
import './App.css';

function App() {
  const [schedule, setSchedule] = useState(() => {
    const savedSchedule = localStorage.getItem('schedule');
    return savedSchedule ? JSON.parse(savedSchedule) : {};
  });

  useEffect(() => {
    localStorage.setItem('schedule', JSON.stringify(schedule));
  }, [schedule]);

  const addEventToSchedule = (day, event) => {
    setSchedule(prevSchedule => ({
      ...prevSchedule,
      [day]: [...(prevSchedule[day] || []), event]
    }));
  };

  const removeEventFromSchedule = (day, index) => {
    setSchedule(prevSchedule => ({
      ...prevSchedule,
      [day]: prevSchedule[day].filter((_, i) => i !== index)
    }));
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:day" element={<DayView schedule={schedule} addEventToSchedule={addEventToSchedule} removeEventFromSchedule={removeEventFromSchedule} />} />
      </Routes>
    </Router>
  );
}

export default App;
