import { useEffect, useState, useRef } from "react";
import Fun from "./fun";

export default function Timer({ start1 }) {
  const [start2, setStart2] = useState(false);
  const [start, setStart] = useState(false);
  const [count, setCount] = useState(0);
  const [time, setTime] = useState("00");
  const initTimeRef = useRef(null);

  useEffect(() => {
    const handleClick = () => setStart2(true);
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  useEffect(() => {
    if (start1) setStart(true);
  }, [start1]);

  const showTimer = (ms) => {
    const second = Math.floor((ms / 1000) % 60)
      .toString()
      .padStart(2, "0");
    setTime(second);
  };

  useEffect(() => {
    if (!start) return;
    initTimeRef.current = new Date() - count;

    const id = setInterval(() => {
      const left = new Date() - initTimeRef.current;
      setCount(left);
      showTimer(left);
    }, 100);

    return () => clearInterval(id);
  }, [start]);

  return (
    <>
      {start2 ? (
        <Fun />
      ) : (
        <div className="timer-box">
          <h1>Now you in Nothing: {time}</h1>
          <p>Don't do anything</p>
        </div>
      )}
    </>
  );
}
