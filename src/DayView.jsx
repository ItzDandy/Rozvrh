import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ScheduleForm from './ScheduleForm';
import ScheduleList from './ScheduleList';

function DayView({ schedule, addEventToSchedule, removeEventFromSchedule }) {
  const { day } = useParams();
  const [daySchedule, setDaySchedule] = useState([]);

  useEffect(() => {
    if (schedule && schedule[day]) {
      setDaySchedule(schedule[day]);
    } else {
      setDaySchedule([]);
    }
  }, [schedule, day]);

  const handleAddEvent = (event) => {
    addEventToSchedule(day, event);
  };

  const handleRemoveEvent = (index) => {
    const updatedSchedule = [...daySchedule];
    updatedSchedule.splice(index, 1);
    setDaySchedule(updatedSchedule);
    removeEventFromSchedule(day, index);
  };

  return (
    <div>
      <h2>{day}</h2>
      <ScheduleForm addEvent={handleAddEvent} />
      <div>
        <h3>Seznam hodin a aktivit pro {day}</h3>
        <ScheduleList schedule={daySchedule} removeEvent={handleRemoveEvent} />
      </div>
    </div>
  );
}

export default DayView;
