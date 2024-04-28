import React from 'react';

function Schedule({ scheduleData, selectedDay }) {

  const filteredScheduleData = scheduleData.filter(item => item.day === selectedDay);

  return (
    <div>
      <h3>Schedule for {selectedDay}</h3>
      <ul>
        {filteredScheduleData.map((item, index) => (
          <li key={index}>{item.subject} - {item.classroom} - {item.time}</li>
        ))}
      </ul>
    </div>
  );
}

export default Schedule;
