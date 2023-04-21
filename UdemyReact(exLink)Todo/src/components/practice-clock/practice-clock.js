
import { useState } from 'react';
import './practice-clock.css';

const getLocaleTimeString = () => new Date().toLocaleTimeString();


const PracticeClock = () => {
  const [time, setTime] = useState(getLocaleTimeString());
  const [active, setActive] = useState(false);

  setInterval(() => {
    setTime(getLocaleTimeString());
  }, 1000);

  const onButtonClick = () => {
    setActive(!active);
  }

  return (
    <div className='practice-clock'>
      <h2>It is {time}. Is active: {active.toString()}</h2>
      <button onClick={onButtonClick} />
    </div>
  );
}

export default PracticeClock;
