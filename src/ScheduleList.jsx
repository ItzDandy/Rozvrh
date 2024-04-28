import React from 'react';

function ScheduleList({ schedule, removeEvent }) {
  return (
    <div className="schedule-list">
      {schedule.map((event, index) => (
        <div key={index} className="event-card">
          <div>
            <h4>Předmět: {event.subject}</h4>
            <p>Učebna: {event.classroom}</p>
            <p>Čas: {event.time}</p>
          </div>
          <button onClick={() => removeEvent(index)}>Smazat</button>
        </div>
      ))}
    </div>
  );
}

export default ScheduleList;
