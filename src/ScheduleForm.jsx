import React, { useState } from 'react';

function ScheduleForm({ addEvent }) {
  const [subject, setSubject] = useState('');
  const [classroom, setClassroom] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const event = { subject, classroom, time };
    addEvent(event);
    setSubject('');
    setClassroom('');
    setTime('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Předmět" value={subject} onChange={(e) => setSubject(e.target.value)} required />
      <input type="text" placeholder="Učebna" value={classroom} onChange={(e) => setClassroom(e.target.value)} required />
      <input type="text" placeholder="Čas" value={time} onChange={(e) => setTime(e.target.value)} required />
      <button type="submit">Přidat</button>
    </form>
  );
}

export default ScheduleForm;
