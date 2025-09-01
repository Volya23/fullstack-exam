import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/HowItWorks/Header";
import FaqSection from "../../components/HowItWorks/FaqSection";
import Footer from "../../components/HowItWorks/Footer";
import EndBlock from "../../components/HowItWorks/EndBlock";
import styles from "../HowItWorks/HowItWorks.module.sass";
import CONSTANTS from "../../constants";

const PageWorks = () => {
  

    return (
        <>
        <button className={styles.accessibilityBtn}
                style={{backgroundImage: `url(${CONSTANTS.STATIC_IMAGES_PATH}NavContests/icon_accessibility.png)`}}></button>
        <Header />
        <section className={`${styles.blockFirst} ${styles.partOne}`}>
            <div className={styles.bInner}>
              <div className={styles.bContent}>
                <div className={styles.container}>
                  <div className={styles.atp}>
                    <div className={styles.left}>
                        <h4>World's #1 Naming Platform</h4>
                        <h1>How Does Atom Work?</h1>
                        <p>Atom helps you come up with a great name for your business by combining the power of crowdsourcing with sophisticated technology and Agency-level validation services.</p>
                    </div>
                    <div className={styles.right}>
                      <div className={styles.videoBox}>
                      <iframe title="How if works" src="https://iframe.mediadelivery.net/embed/239474/327efcdd-b1a2-4891-b274-974787ae8362?autoplay=false&loop=false&muted=false&preload=true&responsive=true" allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" allowfullscreen="true"></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </section>
        <section className={`${styles.blockSecond} ${styles.partTwo}`}>
          <div className={styles.container}>
            <div className={styles.caption}>
              <div className={styles.max500}>
                <span>Our Services</span>
                <h2>3 Ways To Use Atom</h2>
                <p>Atom offers 3 ways to get you a perfect name for your business.</p>
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.card}>
                <div className={styles.item}>
                  <div>
                    <div className={styles.icon}>
                      <img src={`${CONSTANTS.STATIC_IMAGES_PATH}NavContests/Launch.svg`} alt="launch" />
                    </div>
                    <h3>Launch a Contest</h3>
                    <p>Work with hundreds of creative experts to get custom name suggestions for your business or brand. All names are auto-checked for URL availability.</p>
                  </div>
                  <div className={styles.margin}>
                    <Link to="/start-contest" className={`${styles.button} ${styles.buttonBrand}`}>
                      <span>Launch a Contest</span>
                      <span className={styles.arrowRight}
                            style= {{backgroundImage: `url(${CONSTANTS.STATIC_IMAGES_PATH}NavContests/icon-arrow-long-right.svg)`}}></span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className={styles.card}>
              <div className={styles.item}>
                  <div>
                    <div className={styles.icon}>
                      <img src={`${CONSTANTS.STATIC_IMAGES_PATH}NavContests/Explore.svg`} alt="explore" />
                    </div>
                    <h3>Explore Names For Sale</h3>
                    <p>Our branding team has curated thousands of pre-made names that you can purchase instantly. All names include a matching URL and a complimentary Logo Design</p>
                  </div>
                  <div className={styles.margin}>
                    <Link to="/premium-domains-for-sale" className={`${styles.button} ${styles.buttonBrand}`}>
                      <span>Explore Names For Sale</span>
                      <span className={styles.arrowRight}
                            style= {{backgroundImage: `url(${CONSTANTS.STATIC_IMAGES_PATH}NavContests/icon-arrow-long-right.svg)`}}></span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.item}>
                  <div>
                    <div className={styles.icon}>
                      <img src={`${CONSTANTS.STATIC_IMAGES_PATH}NavContests/Agency.svg`} alt="agency" />
                    </div>
                    <h3>Agency-level Managed Contests</h3>
                    <p>Our Managed contests combine the power of crowdsourcing with the rich experience of our branding consultants. Get a complete agency-level experience at a fraction of Agency costs</p>
                  </div>
                  <div className={styles.margin}>
                    <Link to="/managed-contests" className={`${styles.button} ${styles.buttonBrand}`}>
                      <span>Learn More</span>
                      <span className={styles.arrowRight}
                            style= {{backgroundImage: `url(${CONSTANTS.STATIC_IMAGES_PATH}NavContests/icon-arrow-long-right.svg)`}}></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.emptyLine}></div>
          </div>
        </section>
        <section className={`${styles.blockSecond} ${styles.partThree}`}>
          <div className={styles.container}>
            <div className={styles.caption}>
              <img src={`${CONSTANTS.STATIC_IMAGES_PATH}NavContests/cup.svg`} className={styles.cup} width={70} alt="cup" />
              <h3>How Do Naming Contests Work?</h3>
            </div>
            <div className={styles.row}>
              <div className={styles.column}>
                <div className={styles.itemStep}>
                  <div className={styles.step}>
                    <span>Step 1</span>
                  </div>
                  <span className={styles.blueArrow}
                        style= {{backgroundImage: `url(${CONSTANTS.STATIC_IMAGES_PATH}NavContests/arrow-right.svg)`}}>
                  </span>
                  <p className={styles.text}>Fill out your Naming Brief and begin receiving name ideas in minutes</p>
                </div>
              </div>
              <div className={styles.column}>
                <div className={styles.itemStep}>
                  <div className={styles.step}>
                    <span>Step 2</span>
                  </div>
                  <span className={styles.blueArrow}
                        style= {{backgroundImage: `url(${CONSTANTS.STATIC_IMAGES_PATH}NavContests/arrow-right.svg)`}}>
                  </span>
                  <p className={styles.text}>Rate the submissions and provide feedback to creatives. Creatives submit even more names based on your feedback.</p>
                </div>
              </div>
              <div className={styles.column}>
                <div className={styles.itemStep}>
                  <div className={styles.step}>
                    <span>Step 3</span>
                  </div>
                  <span className={styles.blueArrow}
                        style= {{backgroundImage: `url(${CONSTANTS.STATIC_IMAGES_PATH}NavContests/arrow-right.svg)`}}>
                  </span>
                  <p className={styles.text}>Our team helps you test your favorite names with your target audience. We also assist with Trademark screening.</p>
                </div>
              </div>
              <div className={styles.column}>
                <div className={styles.itemStep}>
                  <div className={styles.step}>
                    <span>Step 4</span>
                  </div>
                  <p className={styles.text}>Pick a Winner. The winner gets paid for their submission.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <FaqSection />
        <section className={styles.searchBlock}>
          <div className={styles.container}>
            <div className={styles.searchForm}>
              <div className={styles.icon}
                   style= {{backgroundImage: `url(${CONSTANTS.STATIC_IMAGES_PATH}NavContests/search.svg)`}}>
              </div>
              <input
                name="search_field"
                type="text"
                placeholder="Search Over 300,000+ Premium Names"
                className={styles.searchInput}/>
              <button>
                <span style= {{backgroundImage: `url(${CONSTANTS.STATIC_IMAGES_PATH}NavContests/search1.svg)`}}></span>
              </button>
            </div>
            <div className={styles.listTags}>
              <span>Popular searches</span>
              <Link to="https://www.atom.com/premium-domains-for-sale/for/technology">Tech</Link>
              <Link to="https://www.atom.com/premium-domains-for-sale/for/fashion-clothing">Clothing</Link>
              <Link to="https://www.atom.com/premium-domains-for-sale/for/finance">Finance</Link>
              <Link to="https://www.atom.com/premium-domains-for-sale/for/real-estate">Real Estate</Link>
              <Link to="https://www.atom.com/premium-domains-for-sale/for/cryptocurrency-blockchain">Crypto</Link>
              <Link to="https://www.atom.com/premium-domains-for-sale/length/Short">Short</Link>
              <Link to="https://www.atom.com/premium-domains-for-sale/type_of_name/One%20Word">One Word</Link>
            </div>
          </div>
        </section>
        <Footer />
        <EndBlock />
        </>
    );
};

export default PageWorks;