// import Countdown from './pages/Countdown';
import { useState, useEffect } from "react";
import spin from "./assets/cube_spin.gif";
import tinkerhub from "./assets/tinkerhub_logo.png";
import iet from "./assets/iet_logo.png";

function App() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());


  function calculateTimeLeft() {
    const difference = +new Date("2024-03-24T06:30:00") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24))
          .toString()
          .padStart(2, "0"),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24)
          .toString()
          .padStart(2, "0"),
        minutes: Math.floor((difference / 1000 / 60) % 60)
          .toString()
          .padStart(2, "0"),
        seconds: Math.floor((difference / 1000) % 60)
          .toString()
          .padStart(2, "0"),
      };
    }
    return timeLeft;
  }
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  return (
    <div
      id="countdown"
      className="scroll-smooth snap-center overflow-y-hidden bg-primary relative h-screen font-schabo text-ivory text-center flex flex-col justify-center items-center gap-0 sm:p-8"
    >
      <div className="flex flex-col justify-center relative">
        <h2 className="font-thunder font-normal text-3xl sm:text-6xl">
          Hacking ends in
        </h2>
        <h2 className="text-[76px] sm:text-[128px] md:text-[176px] lg:text-[256px] leading-tight">
          {timeLeft.days} : {timeLeft.hours} : {timeLeft.minutes} :{" "}
          {timeLeft.seconds}
        </h2>
        <img
          src={spin}
          alt="cube"
          className="w-1/2 max-sm:w-3/4 transition rotate-45 absolute left-1/2 top-40 sm:top-56 md:top-72 lg:top-96 -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      <div className="flex w-full h-[30%] justify-between items-center px-0 pt-16 sm:px-24 sm:pt-8 md:px-40 lg:px-24">
        <img src={tinkerhub} alt="Tinkerhub" className="m-3 w-20 sm:w-40" />
        <img src={iet} alt="IET" className="m-3 w-20 sm:w-40" />
      </div>
    </div>
  )
}

export default App
