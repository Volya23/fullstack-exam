import React from 'react';
import styles from './BackButton.module.sass';

const BackButton = props => {
  function clickHandler () {
    props.history.goBack();
  }

  return (
    <button onClick={clickHandler} className={styles.buttonContainer}>
      Back
    </button>
  );
};

export default (BackButton);
