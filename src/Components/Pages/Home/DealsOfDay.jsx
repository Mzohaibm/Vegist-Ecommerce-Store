import { useEffect, useState } from "react";
import "../../Styles/DealsOfDay.css";

const DealsOfDay = () => {
  const targetDate = new Date("November 11, 2023").getTime();
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  function calculateTimeRemaining() {
    const now = new Date().getTime();
    const timeDifference = targetDate - now;
    if (timeDifference > 0) {
      const seconds = Math.floor((timeDifference / 1000) % 60);
      const minutes = Math.floor((timeDifference / 1000 / 60) % 60);
      const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

      return { days, hours, minutes, seconds };
    } else {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
  }

  return (
    <div className="deal_bg mx-auto w-11/12 text-center py-32 my-20">
      <div className="my-4">
        <h1 className="text-2xl font-medium">We offer a hot deal offer every festival</h1>
        <h1 className="text-4xl font-bold">Deal of the day!</h1>
      </div>
      <div className="timer flex flex-wrap mx-auto justify-center">
        <div className="bg-[#73841B] w-[80px] h-[80px] flex flex-col items-center justify-center rounded text-white m-3">
          <h2 className="text-3xl font-bold">{timeRemaining.days}</h2>
          <span>Days</span>
        </div>
        <div className="bg-[#73841B] w-[80px] h-[80px] flex flex-col items-center justify-center rounded text-white m-3">
          <h2 className="text-3xl font-bold">{timeRemaining.hours}</h2>
          <span>Hours</span>
        </div>
        <div className="bg-[#73841B] w-[80px] h-[80px] flex flex-col items-center justify-center rounded text-white m-3">
          <h2 className="text-3xl font-bold">{timeRemaining.minutes}</h2>
          <span>Minutes</span>
        </div>
        <div className="bg-[#73841B] w-[80px] h-[80px] flex flex-col items-center justify-center rounded text-white m-3">
          <h2 className="text-3xl font-bold">{timeRemaining.seconds}</h2>
          <span>Seconds</span>
        </div>
      </div>
    </div>
  );
};

export default DealsOfDay;
