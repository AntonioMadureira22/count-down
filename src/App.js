import './App.css';
import React, { useState, useEffect } from 'react';

//page import
import Clock from "./components/Clock";

import song from './components/assets/Countdown Beat.mp3'


function App() {
  const [timerDays, setTimerDays] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();

  let interval;

  const startTimer = () => {
    const countDownDate = new Date("January 2,2023").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();

      const distance = countDownDate - now;

      const days = Math.floor(distance / (24 * 60 * 60 * 1000));

      const hours= Math.floor(distance % (24 * 60 * 60* 1000)/ (1000 * 60 * 60));

      const minutes= Math.floor(distance % (60 * 60* 1000)/ (1000 * 60 ));

      const seconds= Math.floor(distance % ( 60 * 1000)/ (1000 ));

      if (distance < 0) {
        //stop timer

        clearInterval(interval);
      } else {
        // Update Timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    });
  }
 useEffect(() => {
    startTimer();
  });
  

  return (
    <div className="App">
      <div className='title'>
        <h1 className='fx'> T'ill Phase 1</h1>
      </div>
      <Clock timerDays={timerDays} timerHours={timerHours} timerMinutes={timerMinutes} timerSeconds={timerSeconds} />
      <audio className='controller' controls loop
      src={song} type='audio/mp3'
      />
      <h2 className='pulsate'>Click Play ^</h2>
    </div>
    
  );
}


export default App;