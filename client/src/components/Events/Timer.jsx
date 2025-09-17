import React, { useState, useEffect } from "react";
import ProgressBar from "./ProgressBar";
import styles from "../../pages/Events/Events.module.sass";


const Timer = ({ event, onDelete }) => {
  const [timeLeft, setTimeLeft] = useState(new Date(event.date) - new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      const diff = new Date(event.date) - new Date();
      setTimeLeft(diff > 0 ? diff : 0);

      if (diff > 0 && diff <= event.notifyBefore * 60 * 1000) {
        console.log(`Event "${event.name}" is coming soon!`);
      }
    }, 1000);
       
    return () => clearInterval(interval);
  }, [event.date]);
      
  if (timeLeft <= 0) {
    return (
      <div className={styles.itemFinish}>
        <span>{event.name}</span>
        <button className={styles.deleteBtn} onClick={() => onDelete(event.id)}>
        ✕</button>
      </div>
    );
  }
  const total = new Date(event.date) - new Date(event.createdAt);

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);
      
  const timeGo =
    days > 0 ? `${days}d ${hours}h ${minutes}min ${seconds}s` :
    hours > 0 ? `${hours}h ${minutes}min ${seconds}s` : `${minutes}min ${seconds}s`;

  return (
    <div className={styles.item}>
      <div className={styles.wrapper}>
      <ProgressBar total={total} timeLeft={timeLeft} />
      <div className={styles.row}>
        <span>{event.name}</span>
        <span className={styles.timeSpan}>{timeGo}</span>
      </div>
      </div>
     
    </div>
  );
}

export default Timer;
