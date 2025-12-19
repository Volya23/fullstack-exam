import React, { useState } from "react";
import styles from "../StartContext/ButtonGroup.module.sass";
import CONSTANTS from "../../../constants";

const ButtonGroup = () => {
  const [select, setSelect] = useState("recommend");

  const choices = [
    {
      value: "recommend",
      answer: "Yes",
      option: "But minor variations are allowed",
      recommended: true,
    },
    {
      value: "yes",
      answer: "Yes",
      option: "The Domain should exactly match the name",
    },
    {
      value: "no",
      answer: "No",
      option: "I am only looking for a name, not a Domain",
    }
  ];

  const toggleSelect = (value) => {
    setSelect(value);
  };

  return (
    <>
    <section className={styles.buttonGroup}>
      <div className={styles.container}>
        <div className={styles.headerBlock}>
          <h1>Do you want a matching domain (.com URL) with your name?</h1>
        </div>
        <div className={styles.generalBlock}>
          {choices.map((opt) => (
            <button key={opt.value} type="button"
                    onClick={() => toggleSelect(opt.value)}
                    className={`${styles.optBtn} ${select === opt.value ? styles.select : ""}`}>
              {opt.recommended && (<span className={styles.recommend}>Recommended</span>)}
              <div className={styles.littleBlock}>
                <h3 className={`${styles.answering} ${select === opt.value ? styles.activeAnswering : ""}`}>{opt.answer}</h3>
                {select === opt.value && 
                  <span className={styles.mark}
                        style= {{backgroundImage: `url(${CONSTANTS.STATIC_IMAGES_PATH}icon-check.svg)`}}>
                  </span>}
              </div>
              <p className={styles.textOption}>{opt.option}</p>
            </button>
          ))}
        </div>
        <p className={styles.textDown}>If you want a matching domain, our platform will only accept those name suggestions where the domain is available.</p>
      </div>
    </section>
    </>
  );
};
export default ButtonGroup;




