import { useEffect, useState } from "react";
import Timer from "./timer";

export default function Start() {
  const [start, setStart] = useState(false);

  useEffect(() => {
    const handleClick = () => setStart(true);
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  return (
    <>
      {start ? (
        <Timer start1={start} />
      ) : (
        <h2>Hi, click anywhere to start</h2>
      )}
    </>
  );
}
