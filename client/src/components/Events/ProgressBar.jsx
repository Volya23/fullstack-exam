import React from "react";
import styles from "../../pages/Events/Events.module.sass";

const ProgressBar = ({ total, timeLeft }) => {
  const filled = Math.min(100, Math.max(0,  ((total - timeLeft) / total) * 100));
  
  return (
    <div className={styles.progressBar}>
      <div
        className={styles.progressFill}
        style={{ width: `${filled}%`, background: "#5cc750"}}
      />
    </div>
  )
}

export default ProgressBar;