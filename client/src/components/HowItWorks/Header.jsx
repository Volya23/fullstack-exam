import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CONSTANTS from "../../constants";
import styles from "../../components/HowItWorks/Header.module.scss";
import MobilePart from "../../components/HowItWorks/Mobile";


export const Header = () => {
  const [isOpen, setIsOpen] = useState();
  const [isSearch, setIsSearch] = useState(false);

  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    const scrollLine = styles.openMenu;
    if (openMenu) {
      document.documentElement.classList.add(scrollLine);
      document.body.classList.add(scrollLine);
    } else {
      document.documentElement.classList.remove(scrollLine);
      document.body.classList.remove(scrollLine);
    }
  }, [openMenu]);
  
  return (
    <> 
    <header className={styles.headerTop}>
      <div className={styles.container}>
        <div className={styles.headerInner}>
            <div className={styles.left}>
              <Link to="/">
                <img src={`${CONSTANTS.STATIC_IMAGES_PATH}NavContests/header-logo.webp`} width={140} height={52} alt="logo" />
              </Link>
            </div>
          <nav className={styles.headerMiddle}>
            <div className={styles.menu}>
              <ul>
                <li className={styles.submenu}
                    style={{position:'static'}}
                    onMouseEnter = {() => setIsOpen ('first')}
                    onMouseLeave = {() => setIsOpen ()}
                >
                    <div className={styles.titleMenu}>Domains for Sale</div>
                      <div className={`${styles.menuLarge} ${isOpen === 'first' ? styles.open : ''}`}>
                        <div className={styles.menuLeft}>
                            <Link to='https://www.atom.com/premium-domains-for-sale'
                                  className={styles.item}>
                              <div className={styles.images}>
                                <img src={`${CONSTANTS.STATIC_IMAGES_PATH}NavContests/menu/cdm_icon.svg`} loading="lazy" width={270} height={185} alt="cdm_icon" />
                              </div>
                              <div className={styles.link}>
                                <div className={styles.linkHead}>
                                  Curated Domain Marketplace
                                  <img src={`${CONSTANTS.STATIC_IMAGES_PATH}NavContests/menu/arrow_right_black.svg`} className={styles.arrow} width={7} height={12} loading="lazy" alt="arrow_right_black" />
                                </div>
                                <p className={styles.linkText}>
                                  Explore 300,000+ expert-curated, brandable domains to elevate your business.
                                </p>
                              </div>
                            </Link>
                            <Link to="https://www.atom.com/ultra-premium-marketplace/all"
                                  className={styles.item}>
                              <div className={styles.images}>
                                <img src={`${CONSTANTS.STATIC_IMAGES_PATH}NavContests/menu/upm_icon.svg`}loading="lazy" width={270} height={185} alt="upm_icon" />
                              </div>
                              <div className={styles.link}>
                                <div className={styles.linkHead}>
                                  Ultra Premium Marketplace
                                  <img src={`${CONSTANTS.STATIC_IMAGES_PATH}NavContests/menu/arrow_right_black.svg`} className={styles.arrow} width={7} height={12} loading="lazy" alt="arrow_right_black" />
                                </div>
                                <p className={styles.linkText}>
                                  Discover the world's most coveted and powerful domains for top-tier brands.
                                </p>
                              </div>
                            </Link>
                            <Link to="https://www.atom.com/sapphire/all"
                                  className={styles.item}>
                              <div className={styles.images}>
                                <img src={`${CONSTANTS.STATIC_IMAGES_PATH}NavContests/menu/sapphire_icon.svg`} loading="lazy" width={270} height={185} alt="sapphire_icon" />
                              </div>
                              <div className={styles.link}>
                                <div className={styles.linkHead}>
                                  Sapphire Marketplace
                                  <img src={`${CONSTANTS.STATIC_IMAGES_PATH}NavContests/menu/arrow_right_black.svg`} className={styles.arrow} width={7} height={12} loading="lazy" alt="arrow_right_black" />
                                </div>
                                <p className={styles.linkText}>
                                  Find one-word domains with modern extensions like .ai, .io, and .xyz.
                                </p>
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
                      <Link to="https://www.atom.com/premium-domains-for-sale"
                        className={styles.getStarted}
                        style= {{backgroundImage: `url(${CONSTANTS.STATIC_IMAGES_PATH}NavContests/menu/get_started_bg.svg)`}}
                      >
                        <div className={styles.images}>
                          <img src={`${CONSTANTS.STATIC_IMAGES_PATH}NavContests/menu/get_started.webp`} loading="lazy" width="100%" height={202} alt="get_started" />
                        </div>
                        <h4>
                          <img src={`${CONSTANTS.STATIC_IMAGES_PATH}NavContests/menu/search.svg`} loading="lazy" width={16} height={17} alt="search" />
                        Get started
                          <img src={`${CONSTANTS.STATIC_IMAGES_PATH}NavContests/menu/arrow_right_black.svg`} className={styles.arrow} loading="lazy" width={7} height={12} alt="arrow_right_black" />
                        </h4>
                        <p>Find your perfect domain today and buy instantly in the Atom.com marketplace.</p>
                      </Link>
                      </div>
                </li>
                <li className={styles.submenu}
                    style={{position:'static'}}
                    onMouseEnter = {() => setIsOpen ('second')}
                    onMouseLeave = {() => setIsOpen ()}
                >
                  <div className={styles.titleMenu}>Naming & Branding</div>
                  <div className={`${styles.menuLarge} ${styles.second} ${isOpen === 'second' ? styles.open : ''}`}>
                          <div className={styles.menuLeft}>
                              <Link to="https://www.atom.com/branding-marketing-naming-contests"
                                    className={styles.item}>
                                <div className={styles.link}>
                                  <div className={styles.linkHead}>
                                    Start a Naming Contest
                                    <img src={`${CONSTANTS.STATIC_IMAGES_PATH}NavContests/menu/arrow_right_black.svg`} className={styles.arrow} width={7} height={12} loading="lazy" alt="arrow_right_black" />
                                  </div>
                                  <p className={styles.linkText}>
                                    Launch a name and domain contest today for 1000s of unique name ideas!
                                  </p>
                                </div>
                              </Link>
                              <div className={styles.collections}>
                                <h3>Branding Contests</h3>
                                <Link to="https://www.atom.com/logos">Logo Contests</Link>
                                <Link to="https://www.atom.com/taglines">Tagline Contests</Link>
                                <Link to="https://www.atom.com/brand-identity-design">Brand Identity Contests</Link>
                                <Link to="https://www.atom.com/brand-naming-agency">Brand Naming Agency</Link>
                              </div>
                          </div>
                        <div className={styles.collections}>
                          <h3>Contest Details</h3>
                          <Link to="https://www.atom.com/how-it-works">How It Works</Link>
                          <Link to="https://www.atom.com/pricing">Contest Pricing</Link>
                          <Link to="https://www.atom.com/our-work">Our Work</Link>
                          <Link to="https://www.atom.com/winners">Recent Winners</Link>
                          <Link to="https://www.atom.com/branding-marketing-naming-contests">Active Contests</Link>
                          <Link to="https://www.atom.com/join-as-creative">Become a Creative</Link>
                        </div>
                        <Link to="https://www.atom.com/managed-contests"
                              className={styles.getStarted}
                              style= {{backgroundImage: `url(${CONSTANTS.STATIC_IMAGES_PATH}NavContests/menu/brand_naming_bg.svg)`}}>
                        <div className={styles.images}>
                          <img src={`${CONSTANTS.STATIC_IMAGES_PATH}NavContests/menu/agency_style.webp`} loading="lazy" width="100%" height={202} alt="agency-style" />
                        </div>
                        <h4>Agency Style Experience
                        <img src={`${CONSTANTS.STATIC_IMAGES_PATH}NavContests/menu/arrow_right_black.svg`} className={styles.arrow} width={7} height={12} loading="lazy" alt="arrow_right_black" />
                        </h4>
                        <p>Work with a naming and branding expert in our better-than-an-agency managed contests.</p>
                        </Link>
                  </div>
                </li>
                <li className={styles.submenu}
                    style={{position:'static'}}
                    onMouseEnter = {() => setIsOpen ('third')}
                    onMouseLeave = {() => setIsOpen ()}
                >
                  <div className={styles.titleMenu}>Research & Testing</div>
                    <div className={`${styles.menuLargeThird} ${isOpen === 'third' ? styles.open : ''}`}>
                          <div className={styles.menuLeft}>
                            <Link to="https://www.atom.com/research" className={styles.item}>
                                <div className={styles.images}>
                                  <img src={`${CONSTANTS.STATIC_IMAGES_PATH}NavContests/menu/audience_research.svg`} loading="lazy" width={270} height={185} alt="audience_research" />
                                </div>
                                <div className={styles.link}>
                                  <div className={styles.linkHead}>
                                    Audience research
                                    <img src={`${CONSTANTS.STATIC_IMAGES_PATH}NavContests/menu/arrow_right_black.svg`} className={styles.arrow} width={7} height={12} loading="lazy" alt="arrow_right_black" />
                                  </div>
                                  <p className={styles.linkText}>
                                    Business decisions are easier with data. Run targeted surveys on just about anything, and get real data fast!
                                  </p>
                                </div>
                            </Link>
                          </div>
                        <div className={styles.collections}>
                          <Link to="/research/name-testing">Name Testing</Link>
                          <Link to="/research/design-testing">Design Testing</Link>
                          <Link to="/research/logo-testing">Logo Testing</Link>
                          <Link to="/research/product-testing">Product Testing</Link>
                          <Link to="/research/copy-testing">Copy Testing</Link>
                          <Link to="/research/customer-research">Customer Development</Link>
                          <Link to="https://www.atom.com/cctld/buy-domains"
                          style= {{display:'none'}}>Country-Specific Domains</Link>
                        </div>
                    </div>
                </li>
                <li className={styles.submenu}
                    style={{position:'static'}}
                    onMouseEnter = {() => setIsOpen ('fourth')}
                    onMouseLeave = {() => setIsOpen ()}
                >
                  <div className={styles.titleMenu}>Trademarks</div>
                    <div className={`${styles.menuLargeFourth} ${isOpen === 'fourth' ? styles.open : ''}`}>
                        <div className={styles.menuLeft}>
                            <Link to="https://helpdesk.atom.com/en/articles/389884-trademark-filing-package"
                                  className={styles.item}>
                              <div className={styles.images}>
                                <img src={`${CONSTANTS.STATIC_IMAGES_PATH}NavContests/menu/trademark_filling.svg`} loading="lazy" width={270} height={185} alt="trademark_filling" />
                              </div>
                              <div className={styles.link}>
                                <div className={styles.linkHead}>
                                  Trademark Filing
                                  <img src={`${CONSTANTS.STATIC_IMAGES_PATH}NavContests/menu/arrow_right_black.svg`} className={styles.arrow} width={7} height={12} loading="lazy" alt="arrow_right_black" />
                                </div>
                                <p className={styles.linkText}>
                                  Protect your brand with trademark services spanning search to filing.
                                </p>
                              </div>
                            </Link>
                          </div>
                        <div className={styles.collections}>
                          <Link to="https://helpdesk.atom.com/en/articles/389625-trademark-research-service">Trademark Research</Link>
                          <Link to="https://www.atom.com/trademark-registration">Trademark Consultation</Link>
                          <Link to="https://www.atom.com/free-trademark-search">Free Trademark Checker</Link>
                        </div>
                    </div>
                </li>
                <li className={styles.submenu}
                    style={{position:'static'}}
                    onMouseEnter = {() => setIsOpen ('fifth')}
                    onMouseLeave = {() => setIsOpen ()}
                >
                  <div className={styles.titleMenu}>Resources</div>
                    <div className={`${styles.menuLargeFifth} ${isOpen === 'fifth' ? styles.open : ''}`}>
                          <div className={styles.menuLeft}>
                              <Link to="https://www.atom.com/business-name-generator"
                                    className={styles.item}>
                                <div className={styles.images}>
                                  <img src={`${CONSTANTS.STATIC_IMAGES_PATH}NavContests/menu/bsg.svg`} loading="lazy" width={270} height={185} alt="bsg" />
                                </div>
                                <div className={styles.link}>
                                  <div className={styles.linkHead}>
                                    Business Name Generator
                                    <img src={`${CONSTANTS.STATIC_IMAGES_PATH}NavContests/menu/arrow_right_black.svg`} className={styles.arrow} width={7} height={12} loading="lazy" alt="arrow_right_black" />
                                  </div>
                                  <p className={styles.linkText}>
                                    Be inspired by our AI-powered generators! Get 1000s of name ideas in seconds.
                                  </p>
                                </div>
                              </Link>
                              <Link to="https://www.atom.com/domain-name-generator" className={styles.fifthCollection}>Domain Name Generator</Link>
                              <Link to="https://www.atom.com/startup-name-generator" className={styles.fifthCollection}>Startup Name Generator</Link>
                              <Link to="https://www.atom.com/product-name-generator" className={styles.fifthCollection}>Product Name Generator</Link>
                              <Link to="https://www.atom.com/logo-maker"
                                    className={styles.itemTwo}>
                                <div className={styles.images}>
                                  <img src={`${CONSTANTS.STATIC_IMAGES_PATH}NavContests/menu/ai.svg`} loading="lazy" width={270} height={185} alt="ai" />
                                </div>
                                <div className={styles.link}>
                                  <div className={styles.linkHead}>
                                    AI Logo Maker
                                    <img src={`${CONSTANTS.STATIC_IMAGES_PATH}NavContests/menu/arrow_right_black.svg`} className={styles.arrow} width={7} height={12} loading="lazy" alt="arrow_right_black" />
                                  </div>
                                  <p className={styles.linkText}>
                                    Create eye-catching logos in minutes and make your brand memorable.
                                  </p>
                                </div>
                              </Link>
                          </div>
                          <div className={styles.menuLeftSec}>
                            <Link to="https://www.atom.com/brand-alignment"
                                  className={styles.item}>
                              <div className={styles.imgs}>
                                <img src={`${CONSTANTS.STATIC_IMAGES_PATH}NavContests/menu/alignment_tool.svg`} loading="lazy" width={270} height={185} alt="alignment_tool" />
                              </div>
                              <div className={styles.link}>
                                <div className={styles.linkHead}>
                                  Brand Alignment Tool
                                  <img src={`${CONSTANTS.STATIC_IMAGES_PATH}NavContests/menu/arrow_right_black.svg`} className={styles.arrow} width={7} height={12} loading="lazy" alt="arrow_right_black" />
                                </div>
                                <p className={styles.linkText}>
                                  Make the right naming choice with our AI-powered brand alignment tool.
                                </p>
                              </div>
                            </Link>
                            <Link to="https://www.atom.com/radar/"
                                  className={styles.item}>
                              <div className={styles.imgs}>
                                <img src={`${CONSTANTS.STATIC_IMAGES_PATH}NavContests/menu/atom_radar.svg`}loading="lazy" width={270} height={185} alt="atom_radar" />
                              </div>
                              <div className={styles.link}>
                                <div className={styles.linkHead}>
                                  AtomRadar
                                  <img src={`${CONSTANTS.STATIC_IMAGES_PATH}NavContests/menu/arrow_right_black.svg`} className={styles.arrow} width={7} height={12} loading="lazy" alt="arrow_right_black" />
                                </div>
                                <p className={styles.linkText}>
                                  Exclusive naming and branding research from Atom.com
                                </p>
                              </div>
                            </Link>
                            <Link to="https://www.atom.com/build-a-brand"
                                  className={styles.item}>
                              <div className={styles.imgs}>
                                <img src={`${CONSTANTS.STATIC_IMAGES_PATH}NavContests/menu/brand_book.svg`} loading="lazy" width={270} height={185} alt="brand_book" />
                              </div>
                              <div className={styles.link}>
                                <div className={styles.linkHead}>
                                  Build a Brandbook
                                  <img src={`${CONSTANTS.STATIC_IMAGES_PATH}NavContests/menu/arrow_right_black.svg`} className={styles.arrow} width={7} height={12} loading="lazy" alt="arrow_right_black" />
                                </div>
                                <p className={styles.linkText}>
                                  Create a free brand bible in minutes using our AI-assisted builder.
                                </p>
                              </div>
                            </Link>
                            <Link to="https://www.atom.com/startups"
                                  className={styles.item}>
                              <div className={styles.imgs}>
                                <img src={`${CONSTANTS.STATIC_IMAGES_PATH}NavContests/menu/start_up.svg`} loading="lazy" width={270} height={185} alt="start_up" />
                              </div>
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
                          <div className={styles.collections}>
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
                              className={styles.getStarted}
                              style= {{backgroundImage: `url(${CONSTANTS.STATIC_IMAGES_PATH}NavContests/menu/domain_score_bg.svg)`}}>
                          <div className={styles.images5}>
                            <img src={`${CONSTANTS.STATIC_IMAGES_PATH}NavContests/menu/domain_score.svg`} loading="lazy" width="100%" height={201} alt="domain_score" />
                          </div>
                          <h4>
                          AI Domain Appraisal Tool
                            <img src={`${CONSTANTS.STATIC_IMAGES_PATH}NavContests/menu/arrow_right_black.svg`} className={styles.arrow} loading="lazy" width={7} height={12} alt="arrow_right_black" />
                          </h4>
                          <p>Discover the value of your domains, based on 50+ data points and powered by effective AI.</p>
                        </Link>
                    </div>
                </li>
              </ul>
            </div>
          </nav>
          <div className={styles.headerRight}>
            <div className={`${styles.search} ${isSearch ? styles.active : ""}`}
                onClick={() => {setIsSearch (prev => !prev)}}
                style= {{backgroundImage: `url(${CONSTANTS.STATIC_IMAGES_PATH}NavContests/icon-search.svg)`}}>
            </div>
            <div className={styles.account}
                aria-expanded={isOpen === 'account' ? 'true' : 'false'}
                onMouseEnter = {() => setIsOpen ('account')}
                onMouseLeave = {() => setIsOpen ()}>
                  <div className={styles.dropdown}>
                        <div className={styles.icon}
                            style= {{backgroundImage: `url(${CONSTANTS.STATIC_IMAGES_PATH}NavContests/icon-user.svg)`}}>
                        </div>
                  </div>
                  <ul className={`${styles.dropdownMenu} ${isOpen === 'account' ? styles.show : ''}`}>
                    <li>
                      <Link to="/login"
                            className={styles.dropdownItem}>
                        <div className={styles.icons}
                            style= {{backgroundImage: `url(${CONSTANTS.STATIC_IMAGES_PATH}NavContests/icon-account.svg)`}}>
                        </div>
                        Login
                      </Link>
                    </li>
                    <li>
                      <Link to="/Signup"
                            className={styles.dropdownItem}>
                        <div className={styles.icons}
                              style= {{backgroundImage: `url(${CONSTANTS.STATIC_IMAGES_PATH}NavContests/icon-account.svg)`}}>
                        </div>
                        Signup
                      </Link>
                    </li>
                  </ul>
            </div>
            <div className={styles.phone}
                aria-expanded={isOpen === 'phone' ? 'true' : 'false'}
                onMouseEnter = {() => setIsOpen ('phone')}
                onMouseLeave = {() => setIsOpen ()}>
                  <div className={styles.dropdown}>
                    <div className={styles.icon}
                        style= {{backgroundImage: `url(${CONSTANTS.STATIC_IMAGES_PATH}NavContests/icon-phone.svg)`}}>
                    </div>
                  </div>
                  <ul className={`${styles.dropdownMenu} ${isOpen === 'phone' ? styles.show : ''}`}>
                    <li>
                      <Link to="tel:1-877-355-3585"
                            className={styles.dropdownItem}>
                        <div className={styles.icons}
                            style= {{backgroundImage: `url(${CONSTANTS.STATIC_IMAGES_PATH}NavContests/icon-phone.svg)`}}>
                        </div>
                        (877) 355-3585
                      </Link>
                    </li>
                    <li>
                      <Link to="#"
                            className={styles.dropdownItem}>
                        <div className={styles.icons1}
                              style={{backgroundImage: `url(${CONSTANTS.STATIC_IMAGES_PATH}NavContests/icon-chat-black.svg)`}}>
                        </div>
                        Chat
                      </Link>
                    </li>
                    <li>
                      <Link to="#"
                            className={styles.dropdownItem}>
                        <div className={styles.icons1}
                            style= {{backgroundImage: `url(${CONSTANTS.STATIC_IMAGES_PATH}NavContests/icon-email.svg)`}}>
                        </div>
                        Email
                      </Link>
                    </li>
                    <li>
                      <Link to="https://helpdesk.atom.com"
                            className={styles.dropdownItem}>
                        <div className={styles.icons2}
                              style= {{backgroundImage: `url(${CONSTANTS.STATIC_IMAGES_PATH}NavContests/icon-help.svg)`}}>
                        </div>
                        Help Desk
                      </Link>
                    </li>
                  </ul>
            </div>
            <Link to="/shortlisted-domains" className={styles.favorite}
                  style= {{backgroundImage: `url(${CONSTANTS.STATIC_IMAGES_PATH}NavContests/icon-heart.svg)`}}></Link>
              <div className={`${styles.mobileIcon} ${openMenu ? styles.activeMobMenu : ""}`}
                  onClick={() => {setOpenMenu (prev => !prev)}}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
        </div>
      </div>
      <div  className={`${styles.mobileMenu} ${openMenu ? styles.open : ""}`}>
        <MobilePart />
      </div>
        

      {isSearch && (
        <div className={`${styles.searchDesktop} ${styles.active}`}>
          <div className={styles.container}>
            <div className={styles.searchForm}>
              <div className={styles.icon}
                   style= {{backgroundImage: `url(${CONSTANTS.STATIC_IMAGES_PATH}NavContests/icon-search.svg)`}}></div>
              <input
                  name="search_field"
                  type="text"
                  placeholder="Search Over 300,000+ Premium Names"
                  className={styles.searchInput}
              />
              <button>
                <span style= {{backgroundImage: `url(${CONSTANTS.STATIC_IMAGES_PATH}NavContests/search1.svg)`}}></span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
    </>
  );
};

export default Header;