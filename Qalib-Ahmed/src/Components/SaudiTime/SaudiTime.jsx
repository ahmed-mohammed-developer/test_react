import React, { useState, useEffect } from 'react';
import './SaudiTime.css'

function SaudiTime() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      const saudiTime = new Intl.DateTimeFormat('ar-SA', {
        weekday: 'long', // إضافة هذا الخط لعرض اسم اليوم
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        timeZone: 'Asia/Riyadh'
      }).format(new Date());
      setTime(saudiTime);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <p>{time}</p>
    </div>
  );
}

export default SaudiTime;
