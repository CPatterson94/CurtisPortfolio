import { useState, useEffect } from "react";

export default function DateTime() {
  // State to hold the current date and time
  const [date, setDate] = useState(new Date());

  // useEffect hook to update the date every second
  useEffect(() => {
    // Update the date state with the current date/time
    const timer = setInterval(() => setDate(new Date()), 1000);
    // Clean-up function to clear the interval when component re-renders
    return () => clearInterval(timer);
  }, []); // Empty dependency array ensures effect runs only once when component mounts

  return (
    <div className="nbDateTime">
      <span>{date.toLocaleTimeString()}</span>
      <span>{date.toLocaleDateString()}</span>
    </div>
  );
}
