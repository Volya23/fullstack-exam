import React from "react";
import { Link } from "react-router-dom";
import CONSTANTS from "../../constants";
import styles from "../../components/HowItWorks/EndBlock.module.sass";


export const EndBlock = () => {
  
  return (
    <> 
    <section className={styles.bottom}>
      <div className={styles.container}>
        <div className={styles.rightBlock}>
          <span>Copyright &copy; {new Date().getFullYear()} Atom.com</span>
          <div className={styles.dot}></div>
          <Link to='#' className={styles.termly}>Consent Preferences</Link>
        </div>
        <Link to='https://www.trustpilot.com/review/atom.com' className={styles.rating}>
          <div className={styles.trust}>
            <strong>Excellent</strong>
            <div className={styles.stars}>
              <div style= {{backgroundImage: `url(${CONSTANTS.STATIC_IMAGES_PATH}NavContests/menu/star.webp)`}}></div>
              <div style= {{backgroundImage: `url(${CONSTANTS.STATIC_IMAGES_PATH}NavContests/menu/star.webp)`}}></div>
              <div style= {{backgroundImage: `url(${CONSTANTS.STATIC_IMAGES_PATH}NavContests/menu/star.webp)`}}></div>
              <div style= {{backgroundImage: `url(${CONSTANTS.STATIC_IMAGES_PATH}NavContests/menu/star.webp)`}}></div>
              <div style= {{backgroundImage: `url(${CONSTANTS.STATIC_IMAGES_PATH}NavContests/menu/half-star.webp)`}}></div>
            </div>
            <div className={styles.name}>
              <div className={styles.icon}
                   style= {{backgroundImage: `url(${CONSTANTS.STATIC_IMAGES_PATH}NavContests/brand.png)`}}></div>
              <span>Trustpilot</span>
            </div>
          </div>
          <div className={styles.ratings} itemScope itemType="http://schema.org/AggregateRating">
            <strong itemProp="ratingValue">
              4.5/
              <span itemProp="bestRating">5</span>
            </strong>
            <p>
              based on
              <span itemProp="ratingCount">716 ratings</span>
            </p>
          </div>
        </Link>
        <div className={styles.social}>
          <Link to='https://www.facebook.com/atomdotcom'
                style= {{backgroundImage: `url(${CONSTANTS.STATIC_IMAGES_PATH}NavContests/social/facebook.svg)`}}></Link>
          <Link to='https://x.com/atomhq'
                style= {{backgroundImage: `url(${CONSTANTS.STATIC_IMAGES_PATH}NavContests/social/twitter.svg)`}}></Link>
          <Link to='https://www.instagram.com/workwithatom/'
                style= {{backgroundImage: `url(${CONSTANTS.STATIC_IMAGES_PATH}NavContests/social/instagram.svg)`}}></Link>
          <Link to='https://www.linkedin.com/company/atomdotcom/'
                style= {{backgroundImage: `url(${CONSTANTS.STATIC_IMAGES_PATH}NavContests/social/linkedin.svg)`}}></Link>
          <Link to='https://www.youtube.com/@atomdotcom'
                style= {{backgroundImage: `url(${CONSTANTS.STATIC_IMAGES_PATH}NavContests/social/youtube.svg)`}}></Link>
        </div>
      </div>
    </section>
    </>
  );
};

export default EndBlock;