import React, { useState } from "react";
import { Link } from "react-router-dom";
import CONSTANTS from "../../constants";
import styles from "../../components/HowItWorks/Mobile.module.sass";

export const MobilePart = () => {
    const [openMobmenu, setOpenMobmenu] = useState([]);
    
    const toggleMenu = (menuName) => {
      setOpenMobmenu ((prev) => prev.includes(menuName) ? prev.filter((id) => id !== menuName) : [...prev, menuName]);
    };

    return (
      <>
          <nav className={styles.mobileInner}>
            <div className={styles.container}>
              <div className={styles.mobSearch}>
                <div className={styles.mobIcon} style= {{backgroundImage: `url(${CONSTANTS.STATIC_IMAGES_PATH}NavContests/icon-search.svg)`}}></div>
                <input
                  type="text"
                  placeholder="Search Over 300,000+ Premium Names"
                  className={styles.mobInput}
                />
                <button>
                  <span style= {{backgroundImage: `url(${CONSTANTS.STATIC_IMAGES_PATH}NavContests/icon-arrow-long-right.svg)`}}></span>
                </button>
              </div>
              <div className={styles.mobMenu}>
                <ul className={styles.generalUl}>
                  <li className={styles.mobSubmenu}>
                    <div className={`${styles.mobTitleMenu} ${openMobmenu.includes("firstMob") ? styles.showArrowBlue : ""}`}
                          onClick={() => toggleMenu("firstMob")}>
                              Domains for Sale
                      <span className={`${styles.arrowDown} ${openMobmenu === "firstMob" ? styles.rotate : ""}`}
                            style= {{backgroundImage: `url(${CONSTANTS.STATIC_IMAGES_PATH}NavContests/menu/icon-arrow-down-blue.svg)`}}>
                      </span>
                    </div>
                    <ul className={`${styles.ulMenuLarge} ${openMobmenu.includes("firstMob") ? styles.open : ""}`}>
                      <div className={styles.mobSubmenuLarge}>
                        <div className={styles.mobLeft}>
                          <Link to="https://www.atom.com/premium-domains-for-sale"
                                className={styles.mobLink}>
                              <div className={styles.link}>
                                <div className={styles.linkHead}>Premium Domain Marketplace
                                  <img src={`${CONSTANTS.STATIC_IMAGES_PATH}NavContests/menu/arrow_right_black.svg`} className={styles.arrow} width={7} height={12} loading="lazy" alt="arrow_right_black" />
                                </div>
                                <p className={styles.linkText}>Explore 300,000+ expert-curated, brandable domains to elevate your business.</p>
                              </div>
                          </Link>
                          <Link to="https://www.atom.com/ultra-premium-marketplace/all" className={styles.mobLink}>
                            <div className={styles.link}>
                              <div className={styles.linkHead}>Ultra Premium Marketplace
                                <img src={`${CONSTANTS.STATIC_IMAGES_PATH}NavContests/menu/arrow_right_black.svg`} className={styles.arrow} width={7} height={12} loading="lazy" alt="arrow_right_black" />
                              </div>
                              <p className={styles.linkText}>Discover the world’s most coveted and powerful domains for top-tier brands.</p>
                            </div>
                          </Link>
                          <Link to="https://www.atom.com/sapphire/all" className={styles.mobLink}>
                            <div className={styles.link}>
                                <div className={styles.linkHead}>Sapphire Marketplace
                                  <img src={`${CONSTANTS.STATIC_IMAGES_PATH}NavContests/menu/arrow_right_black.svg`} className={styles.arrow} width={7} height={12} loading="lazy" alt="arrow_right_black" />
                                </div>
                                <p className={styles.linkText}>Find one-word domains with modern extensions like .ai, .io, and .xyz.</p>
                            </div>
                          </Link>
                        </div>
                        <div className={styles.collections}>
                            <h3>Top Domain Collections</h3>
                            <div>
                            <Link to="https://www.atom.com/premium-domains-for-sale/tld/.ai">.ai Domains</Link>
                            <span>Popular</span>
                            </div>
                            <Link to="https://www.atom.com/auctions/all">Domain Auction</Link>
                            <Link to="https://www.atom.com/premium-domains-for-sale/length/Short">Short Domains</Link>
                            <Link to="https://www.atom.com/premium-domains-for-sale/type_of_name/One%20Word">One Word Domains</Link>
                            <Link to="https://www.atom.com/premium-domains-for-sale/length/3%20Letters">3 Letter Domains</Link>
                            <Link to="https://www.atom.com/premium-domains-for-sale/length/4%20Letters">4 Letter Domains</Link>
                            <Link to="https://www.atom.com/premium-domains-for-sale/length/5%20Letters">5 Letter Domains</Link>
                            <Link to="https://www.atom.com/cctld">Country-Specific Domains</Link>
                        </div>
                        <Link className={styles.mobGetStarted}
                              to="https://www.atom.com/premium-domains-for-sale"
                              style= {{backgroundImage: `url(${CONSTANTS.STATIC_IMAGES_PATH}NavContests/menu/get_started_bg.svg)`}}>
                          <h4>
                            <img src={`${CONSTANTS.STATIC_IMAGES_PATH}NavContests/menu/search.svg`} loading="lazy" width={16} height={17} alt="search" />
                              Get started
                            <img src={`${CONSTANTS.STATIC_IMAGES_PATH}NavContests/menu/arrow_right_black.svg`} className={styles.arrowBlack} loading="lazy" width={7} height={12} alt="arrow_right_black" />
                          </h4>
                          <p>Find your perfect domain today and buy instantly in the Atom.com marketplace.</p>
                        </Link>
                      </div>
                    </ul>
                  </li>
                  <li className={styles.mobSubmenu} style={{position:'static'}}>
                      <div className={`${styles.mobTitleMenu} ${openMobmenu.includes("secondMob") ? styles.showArrowBlue : ""}`}
                          onClick={() => toggleMenu("secondMob")}>
                              Naming & Branding
                        <span className={`${styles.arrowDown} ${openMobmenu === "secondMob" ? styles.rotate : ""}`}
                              style= {{backgroundImage: `url(${CONSTANTS.STATIC_IMAGES_PATH}NavContests/menu/icon-arrow-down-blue.svg)`}}>
                        </span>
                      </div>
                      <ul className={`${styles.ulMenuLarge} ${openMobmenu.includes("secondMob") ? styles.open : ""}`}>
                        <div className={styles.mobSubmenuLarge}>
                          <div className={styles.mobLeft}>
                            <Link to="https://www.atom.com/branding-marketing-naming-contests"
                                  className={styles.mobLinkSecond}>
                              <div className={styles.link}>
                                <div className={styles.linkHead}>
                                  Start a Naming Contest
                                  <img src={`${CONSTANTS.STATIC_IMAGES_PATH}NavContests/menu/arrow_right_black.svg`} className={styles.arrow} width={7} height={12} loading="lazy" alt="arrow_right_black" />
                                </div>
                                <p className={styles.linkText}>Launch a name and domain contest today for 1000s of unique name ideas!</p>
                              </div>
                            </Link>
                            <div className={styles.twoCollections}>
                              <h3>Branding Contests</h3>
                              <Link to="https://www.atom.com/logos">Logo Contests</Link>
                              <Link to="https://www.atom.com/taglines">Tagline Contests</Link>
                              <Link to="https://www.atom.com/brand-identity-design">Brand Identity Contests</Link>
                              <Link to="https://www.atom.com/brand-naming-agency">Brand Naming Agency</Link>
                            </div>
                            <div className={styles.twoCollections}>
                              <h3>Contest Details</h3>
                              <Link to="https://www.atom.com/how-it-works">How It Works</Link>
                              <Link to="https://www.atom.com/pricing">Contest Pricing</Link>
                              <Link to="https://www.atom.com/our-work">Our Work</Link>
                              <Link to="https://www.atom.com/winners">Recent Winners</Link>
                              <Link to="https://www.atom.com/branding-marketing-naming-contests">Active Contests</Link>
                              <Link to="https://www.atom.com/join-as-creative">Become a Creative</Link>
                            </div>
                            <Link to="https://www.atom.com/managed-contests"
                                  className={styles.mobGetStarted}
                                  style= {{backgroundImage: `url(${CONSTANTS.STATIC_IMAGES_PATH}NavContests/menu/brand_naming_bg.svg)`}}>
                              <h4>Agency Style Experience
                                <img src={`${CONSTANTS.STATIC_IMAGES_PATH}NavContests/menu/arrow_right_black.svg`} className={styles.arrow} width={7} height={12} loading="lazy" alt="arrow_right_black" />
                              </h4>
                              <p>Work with a naming and branding expert in our better-than-an-agency managed contests.</p>
                            </Link>
                          </div>
                        </div>
                      </ul>
                  </li>
                  <li className={styles.mobSubmenu} style={{position:'static'}}>
                      <div className={`${styles.mobTitleMenu} ${openMobmenu.includes("thirdMob") ? styles.showArrowBlue : ""}`}
                           onClick={() => toggleMenu("thirdMob")}>
                            Research & Testing
                        <span className={`${styles.arrowDown} ${openMobmenu === "thirdMob" ? styles.rotate : ""}`}
                              style= {{backgroundImage: `url(${CONSTANTS.STATIC_IMAGES_PATH}NavContests/menu/icon-arrow-down-blue.svg)`}}>
                        </span>
                      </div>
                      <ul className={`${styles.ulMenuLarge} ${openMobmenu.includes("thirdMob") ? styles.open : ""}`}>
                        <div className={styles.mobSubmenuLarge}>
                          <div className={styles.mobLeft}>
                            <Link to="https://www.atom.com/research" className={styles.mobLink}>
                              <div className={styles.link}>
                                <div className={styles.linkHead}>Audience Research
                                  <img src={`${CONSTANTS.STATIC_IMAGES_PATH}NavContests/menu/arrow_right_black.svg`} className={styles.arrow} width={7} height={12} loading="lazy" alt="arrow_right_black" />
                                </div>
                                <p className={styles.linkText}>Business decisions are easier with data. Run targeted surveys on just about anything, and get real data fast!</p>
                              </div>
                            </Link>
                          </div>
                          <div className={styles.thirdCollections}>
                            <Link to="/research/name-testing">Name Testing</Link>
                            <Link to="/research/design-testing">Design Testing</Link>
                            <Link to="/research/logo-testing">Logo Testing</Link>
                            <Link to="/research/product-testing">Product Testing</Link>
                            <Link to="/research/copy-testing">Copy Testing</Link>
                            <Link to="/research/customer-research">Customer Development</Link>
                          </div>
                        </div>
                      </ul>
                  </li>
                  <li className={styles.mobSubmenu} style={{position:'static'}}>
                      <div className={`${styles.mobTitleMenu} ${openMobmenu.includes("fourthMob") ? styles.showArrowBlue : ""}`}
                            onClick={() => toggleMenu("fourthMob")}>
                              Trademarks
                        <span className={`${styles.arrowDown} ${openMobmenu === "fourthMob" ? styles.rotate : ""}`}
                              style= {{backgroundImage: `url(${CONSTANTS.STATIC_IMAGES_PATH}NavContests/menu/icon-arrow-down-blue.svg)`}}></span>
                      </div>
                      <ul className={`${styles.ulMenuLarge} ${openMobmenu.includes("fourthMob") ? styles.open : ""}`}>
                        <div className={styles.mobSubmenuLarge}>
                          <div className={styles.mobLeft}>
                            <Link to="https://helpdesk.atom.com/en/articles/389884-trademark-filing-package"
                                  className={styles.mobLink}>
                              <div className={styles.link}>
                                <div className={styles.linkHead}>Trademark Filing
                                  <img src={`${CONSTANTS.STATIC_IMAGES_PATH}NavContests/menu/arrow_right_black.svg`} className={styles.arrow} width={7} height={12} loading="lazy" alt="arrow_right_black" />
                                </div>
                                  <p className={styles.linkText}>Protect your brand with trademark services spanning search to filing.</p>
                              </div>
                            </Link>
                          </div>
                          <div className={styles.thirdCollections}>
                            <Link to="https://helpdesk.atom.com/en/articles/389625-trademark-research-service">Trademark Research</Link>
                            <Link to="https://www.atom.com/trademark-registration">Trademark Consultation</Link>
                            <Link to="https://www.atom.com/free-trademark-search">Free Trademark Checker</Link>
                          </div>
                        </div>
                      </ul>
                  </li>
                  <li className={styles.mobSubmenu} style={{position:'static'}}>
                      <div className={`${styles.mobTitleMenu} ${openMobmenu.includes("fifthMob") ? styles.showArrowBlue : ""}`}
                          onClick={() => toggleMenu("fifthMob")}>
                            Resources
                        <span className={`${styles.arrowDown} ${openMobmenu === "fifthMob" ? styles.rotate : ""}`}
                              style= {{backgroundImage: `url(${CONSTANTS.STATIC_IMAGES_PATH}NavContests/menu/icon-arrow-down-blue.svg)`}}>
                        </span>
                      </div>
                      <ul className={`${styles.ulMenuLarge} ${openMobmenu.includes("fifthMob") ? styles.open : ""}`}>
                        <div className={styles.mobSubmenuLarge}>
                          <div className={`${styles.mobLeftMenu} ${styles.mobLeft}`}>
                            <Link to="https://www.atom.com/business-name-generator"
                                  className={styles.mobLink}>
                                <div className={styles.link}>
                                  <div className={styles.linkHead}>
                                    Business Name Generator
                                    <img src={`${CONSTANTS.STATIC_IMAGES_PATH}NavContests/menu/arrow_right_black.svg`} className={styles.arrow} width={7} height={12} loading="lazy" alt="arrow_right_black" />
                                  </div>
                                  <p className={styles.linkText}>Be inspired by our AI-powered generators! Get 1000s of name ideas in seconds.</p>
                                </div>
                            </Link>
                            <Link to="https://www.atom.com/domain-name-generator" className={styles.generator}>Domain Name Generator</Link>
                            <Link to="https://www.atom.com/startup-name-generator" className={styles.generator}>Startup Name Generator</Link>
                            <Link to="https://www.atom.com/product-name-generator" className={styles.generator}>Product Name Generator</Link>
                            <Link to="https://www.atom.com/logo-maker" className={styles.mobLink}>
                                <div className={styles.link}>
                                  <div className={styles.linkHead}>
                                    AI Logo Maker
                                    <img src={`${CONSTANTS.STATIC_IMAGES_PATH}NavContests/menu/arrow_right_black.svg`} className={styles.arrow} width={7} height={12} loading="lazy" alt="arrow_right_black" />
                                  </div>
                                  <p className={styles.linkText}>Create eye-catching logos in minutes and make your brand memorable.</p>
                                </div>
                            </Link>
                          </div>
                          <div className={styles.menuLeftSec}>
                          <Link to="https://www.atom.com/brand-alignment" className={styles.mobLink}>
                            <div className={styles.link}>
                              <div className={styles.linkHead}>
                                Brand Alignment Tool
                                <img src={`${CONSTANTS.STATIC_IMAGES_PATH}NavContests/menu/arrow_right_black.svg`} className={styles.arrow} width={7} height={12} loading="lazy" alt="arrow_right_black" />
                              </div>
                              <p className={styles.linkText}>Make the right naming choice with our AI-powered brand alignment tool.</p>
                            </div>
                          </Link>
                          <Link to="https://www.atom.com/radar/" className={styles.mobLink}>
                            <div className={styles.link}>
                              <div className={styles.linkHead}>
                                AtomRadar
                                <img src={`${CONSTANTS.STATIC_IMAGES_PATH}NavContests/menu/arrow_right_black.svg`} className={styles.arrow} width={7} height={12} loading="lazy" alt="arrow_right_black" />
                              </div>
                              <p className={styles.linkText}>Exclusive naming and branding research from Atom.com</p>
                            </div>
                          </Link>
                          <Link to="https://www.atom.com/build-a-brand" className={styles.mobLink}>
                            <div className={styles.link}>
                              <div className={styles.linkHead}>
                                Build a Brandbook
                                <img src={`${CONSTANTS.STATIC_IMAGES_PATH}NavContests/menu/arrow_right_black.svg`} className={styles.arrow} width={7} height={12} loading="lazy" alt="arrow_right_black" />
                              </div>
                              <p className={styles.linkText}>Create a free brand bible in minutes using our AI-assisted builder.</p>
                            </div>
                          </Link>
                          <Link to="https://www.atom.com/startups" className={styles.mobLink}>
                            <div className={styles.link}>
                              <div className={styles.linkHead}>
                                Startup Toolkit
                                <img src={`${CONSTANTS.STATIC_IMAGES_PATH}NavContests/menu/arrow_right_black.svg`} className={styles.arrow} width={7} height={12} loading="lazy" alt="arrow_right_black" />
                              </div>
                              <p className={styles.linkText}>
                                Explore apps and services to help your startup thrive.
                              </p>
                            </div>
                          </Link>
                          </div>
                          <div className={styles.lastCollections}>
                            <h3>Atom.com</h3>
                            <Link to="/AboutUs">About Us</Link>
                            <Link to="/blog/">Atom Blog</Link>
                            <Link to="/testimonials-feedback">Testimonials</Link>
                            <div>
                              <Link to="/connect">Partner with us</Link>
                              <span>AtomConnect</span>
                            </div>
                            <Link to="/connect/affiliate">Affiliate</Link>
                          </div>
                          <Link to="https://www.atom.com/domain-appraisal"
                                className={styles.mobGetStarted}
                                style= {{backgroundImage: `url(${CONSTANTS.STATIC_IMAGES_PATH}NavContests/menu/domain_score_bg.svg)`}}>
                            <h4>AI Domain Appraisal Tool
                              <img src={`${CONSTANTS.STATIC_IMAGES_PATH}NavContests/menu/arrow_right_black.svg`} className={styles.arrow} loading="lazy" width={7} height={12} alt="arrow_right_black" />
                            </h4>
                            <p>Discover the value of your domains, based on 50+ data points and powered by effective AI.</p>
                          </Link>
                        </div>
                      </ul>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
      </>
    )
};

export default MobilePart;