"use client"

import About from "@/components/About";
import Alarm from "@/components/Alarm";
import Settings from "@/components/Settings";
import { Timers } from "@/components/Timers";
import { Button } from "@/components/ui/button";
import { montserrat } from "@/ui/fonts";
import { useEffect, useRef, useState } from "react";
import { GiTomato } from "react-icons/gi";

export default function Home() {

  const [pomodoro, setPomodoro] = useState(25);
  const [shortBreak, setShortBreak] = useState(5);
  const [longBreak, setLongBreak] = useState(15);
  const [seconds, setSecond] = useState(0);
  const [ticking, setTicking] = useState(false)
  const [stage, setStage] = useState(0);
  const [consumedSecond, setConsumedSeconds] = useState(0);
  const [isTimeUp, setIsTimeUp] = useState(false);

  const alarmRef = useRef();
  const pomodoroRef = useRef();
  const shortBreakRef = useRef();
  const longBreakRef = useRef();

  const updateTimeDefaultValue = () => {
    setPomodoro(pomodoroRef.current.value);
    setShortBreak(shortBreakRef.current.value);
    setLongBreak(longBreakRef.current.value);
    setSecond(0);
    setConsumedSeconds(0);
  };

  const switchStage = (index) => {
    const isYes =
      consumedSecond && stage !== index
        ? confirm("Are you sure you want to switch?")
        : false;
    if (isYes) {
      reset();
      setStage(index);
    } else if (!consumedSecond) {
      setStage(index);
    }
  };

  const getTickingTime = () => {
    const timeStage = {
      0: pomodoro,
      1: shortBreak,
      2: longBreak,
    };
    return timeStage[stage];
  };
  const updateMinute = () => {
    const updateStage = {
      0: setPomodoro,
      1: setShortBreak,
      2: setLongBreak,
    };
    return updateStage[stage];
  };

  const reset = () => {
    setConsumedSeconds(0);
    setTicking(false);
    setSecond(0);
    updateTimeDefaultValue();
  };

  const timeUp = () => {
    alarmRef.current.play();
    reset();
    setIsTimeUp(true);
  };

  const clockTicking = () => {
    const minutes = getTickingTime();
    const setMinutes = updateMinute();

    if (minutes === 0 && seconds === 0) {
      timeUp();
    } else if (seconds === 0) {
      setMinutes((minute) => minute - 1);
      setSecond(59);
    } else {
      setSecond((second) => second - 1);
    }
  };
  const muteAlarm = () => {
    alarmRef.current.pause();
    alarmRef.current.currentTime = 0;
  };

  const startTimer = () => {
    setIsTimeUp(false);
    muteAlarm();
    setTicking((ticking) => !ticking);
  };

  useEffect(() => {
    window.onbeforeunload = () => {
      return consumedSecond ? "Show waring" : null;
    };

    const timer = setInterval(() => {
      if (ticking) {
        setConsumedSeconds((value) => value + 1);
        clockTicking();
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [seconds, pomodoro, shortBreak, longBreak, ticking]);

  return (
    <div className="w-full flex mx-auto flex-col">
      <div className='flex justify-between text-center items-center py-4 px-2 border-b border-zinc-300 dark:border-zinc-800'>
        <div>
          <GiTomato className="text-2xl" />
        </div>
        <div className="">
          <div className="mx-auto flex justify-center">
            <Settings
              pomodoroRef={pomodoroRef}
              shortBreakRef={shortBreakRef}
              longBreakRef={longBreakRef}
              updateTimeDefaultValue={updateTimeDefaultValue}

            />
          </div>
        </div>
      </div>
      <h1 className={`${montserrat.className} my-8 text-indigo-500 w-fit p-4 mx-auto rounded-lg antialiased flex justify-center items-center tracking-tight text-center text-4xl sm:text-5xl font-black`}>

        SZ.P<GiTomato className="text-3xl sm:text-4xl dark:text-indigo-200 text-indigo-900" />MODORO
      </h1>
      <div className=" min-w-[300px] max-w-[600px] flex justify-center mx-auto w-full" >
        <div className="w-full">
          <Timers
            stage={stage}
            switchStage={switchStage}
            getTickingTime={getTickingTime}
            seconds={seconds}
            ticking={ticking}
            startTimer={startTimer}
            muteAlarm={muteAlarm}
            isTimeUp={isTimeUp}
            reset={reset}
          />
          <Alarm ref={alarmRef} />

        </div>
      </div>
    </div>
  );
}
