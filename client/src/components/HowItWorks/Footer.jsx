import React from "react";
import { Link } from "react-router-dom";
import styles from "../../components/HowItWorks/Footer.module.sass";
import CONSTANTS from "../../constants";


export const Footer = () => {
  
  return (
    <> 
    <footer className={styles.footerTop}>
      <div className={styles.container}>
        <div className={styles.columns}>
            <h3>Services
                <span className={styles.arrowBlue}
                      style= {{backgroundImage: `url(${CONSTANTS.STATIC_IMAGES_PATH}NavContests/menu/icon-arrow-down-blue.svg)`}}>
                </span>
            </h3>
            <div className={styles.menu}>
                <Link to='https://www.atom.com/domains-for-sale' className={styles.linkRows}>Domains for Sale</Link>
                <Link to='https://www.atom.com/ultra-premium-marketplace/all' className={styles.linkRows}>Ultra Premium Marketplace</Link>
                <Link to='https://www.atom.com/premium-domains-for-sale' className={styles.linkRows}>Premium Domains For Sale</Link>
                <Link to='https://www.atom.com/branding-marketing-naming-contests' className={styles.linkRows}>Crowdsource Naming</Link>
                <Link to='https://www.atom.com/brandable-domains' className={styles.linkRows}>Brandable Domains</Link>
                <Link to='https://www.atom.com/premium-domains-for-sale/tld/.ai' className={styles.linkRows}>.ai Domains</Link>
                <Link to='https://www.atom.com/premium-domains-for-sale/length/Short' className={styles.linkRows}>Short Domains</Link>
                <Link to='https://www.atom.com/premium-domains-for-sale/length/3%20Letters' className={styles.linkRows}>3 Letter Domains</Link>
                <Link to='https://www.atom.com/premium-domains-for-sale/length/4%20Letters' className={styles.linkRows}>4 Letter Domains</Link>
                <Link to='https://www.atom.com/premium-domains-for-sale/length/5%20Letters' className={styles.linkRows}>5 Letter Domains</Link>
                <Link to='https://www.atom.com/premium-domains-for-sale/q/6%20letter' className={styles.linkRows}>6 Letter Domains</Link>
                <Link to='https://www.atom.com/premium-domains-for-sale/q/7%20letter' className={styles.linkRows}>7 Letter Domains</Link>
                <Link to='https://www.atom.com/premium-domains-for-sale/type_of_name/One%20Word' className={styles.linkRows}>One Word Domains</Link>
                <Link to='https://www.atom.com/aged-domains' className={styles.linkRows}>Aged Domains</Link>
                <Link to='https://www.atom.com/aftermarket-domains' className={styles.linkRows}>Aftermarket Domains</Link>
                <Link to='https://www.atom.com/expired-domains' className={styles.linkRows}>Expired Domains</Link>
                <Link to='https://www.atom.com/cctld/in/all' className={styles.linkRows}>.in Domains</Link>
                <Link to='https://www.atom.com/cctld/ca/all' className={styles.linkRows}>.ca Domains</Link>
                <Link to='https://www.atom.com/cctld/uk/all' className={styles.linkRows}>.co.uk Domains</Link>
                <Link to='https://www.atom.com/cctld/de/all' className={styles.linkRows}>.de Domains</Link>
                <Link to='https://www.atom.com/rent-a-domain' className={styles.linkRows}>Domains for Rent</Link>
                <Link to='https://www.atom.com/domain-broker' className={styles.linkRows}>Domain Broker</Link>
                <Link to='https://www.atom.com/brand-identity-design' className={styles.linkRows}>Brand Identity Design</Link>
                <Link to='https://www.atom.com/brand-naming-agency' className={styles.linkRows}>Brand Naming Agency</Link>
                <Link to='https://www.atom.com/logos' className={styles.linkRows}>Logo Contests</Link>
                <Link to='https://www.atom.com/taglines' className={styles.linkRows}>Tagline Contests</Link>
                <Link to='https://helpdesk.atom.com/en/articles/389884-trademark-filing-package' className={styles.linkRows}>Trademark Filing Service</Link>
                <Link to='https://www.atom.com/research' className={styles.linkRows}>Audience Research</Link>
            </div>
        </div>
        <div className={styles.columns}>
            <h3>Tools
                <span className={styles.arrowBlue}
                      style= {{backgroundImage: `url(${CONSTANTS.STATIC_IMAGES_PATH}NavContests/menu/icon-arrow-down-blue.svg)`}}>
                </span>
            </h3>
            <div className={styles.menu}>
                <Link to='https://www.atom.com/business-name-generator' className={styles.linkRows}>Business Name Generator</Link>
                <Link to='https://www.atom.com/domain-name-generator' className={styles.linkRows}>Domain Name Generator</Link>
                <Link to='https://www.atom.com/domain-appraisal' className={styles.linkRows}>Domain Appraisal</Link>
                <Link to='https://www.atom.com/blog/how-to-come-up-with-a-business-name/' className={styles.linkRows}>How to Name Your Business</Link>
                <Link to='https://www.atom.com/free-trademark-search' className={styles.linkRows}>Free Trademark Checker</Link>
                <Link to='https://www.atom.com/startups' className={styles.linkRows}>Startup Toolkit</Link>
                <Link to='https://www.atom.com/startup-name-generator' className={styles.linkRows}>Startup Name Generator</Link>
                <Link to='https://www.atom.com/band-name-generator' className={styles.linkRows}>Band Name Generator</Link>
                <Link to='https://www.atom.com/blog-name-generator' className={styles.linkRows}>Blog Name Generator</Link>
                <Link to='https://www.atom.com/product-name-generator' className={styles.linkRows}>Product Name Generator</Link>
                <Link to='https://www.atom.com/youtube-name-generator' className={styles.linkRows}>YouTube Name Generator</Link>
                <Link to='https://www.atom.com/domain-extensions' className={styles.linkRows}>Domain Extensions</Link>
                <Link to='https://www.atom.com/whois' className={styles.linkRows}>WHOIS Lookup</Link>
                <Link to='https://www.atom.com/build-a-brand' className={styles.linkRows}>Build a Brand</Link>
                <Link to='https://www.atom.com/logo-maker' className={styles.linkRows}>AI Logo Generator</Link>
            </div>
        </div>
        <div className={styles.columns}>
            <h3>Sellers
                <span className={styles.arrowBlue}
                      style= {{backgroundImage: `url(${CONSTANTS.STATIC_IMAGES_PATH}NavContests/menu/icon-arrow-down-blue.svg)`}}>
                </span>
            </h3>
            <div className={styles.menu}>
                <Link to='https://www.atom.com/sell-domain-names' className={styles.linkRows}>Become a Seller</Link>
                <Link to='https://helpdesk.atom.com/en/articles/997701-domain-marketplace-terms-conditions-sellers' className={styles.linkRows}>Domain Selling Info</Link>
                <Link to='https://www.atom.com/ultra-premium-marketplace' className={styles.linkRows}>Ultra Premium Seller Info</Link>
                <Link to='/sapphire' className={styles.linkRows}>Sapphire Marketplace</Link>
                <Link to='/cctld' className={styles.linkRows}>ccTLD Marketplace</Link>
                <Link to='https://www.atom.com/auctions' className={styles.linkRows}>Domain Auctions</Link>
                <Link to='https://discussion.atom.com' className={styles.linkRows}>Discussion Forum</Link>
            </div>
            <h3 className={styles.indent}>Creatives
                <span className={styles.arrowBlue}
                      style= {{backgroundImage: `url(${CONSTANTS.STATIC_IMAGES_PATH}NavContests/menu/icon-arrow-down-blue.svg)`}}>
                </span>
            </h3>
            <div className={styles.menu}>
                <Link to='https://www.atom.com/join-as-creative' className={styles.linkRows}>Become a Creative</Link>
                <Link to='https://helpdesk.atom.com/en/collections/118397-creatives' className={styles.linkRows}>Creative FAQs</Link>
                <Link to='https://www.atom.com/branding-marketing-naming-contests' className={styles.linkRows}>Active Contests</Link>
                <Link to='https://www.atom.com/winners' className={styles.linkRows}>Recent Winners</Link>
                <Link to='https://discussion.atom.com' className={styles.linkRows}>Discussion Forum</Link>
            </div>
        </div>
        <div className={styles.columns}>
            <h3>Atom
                <span className={styles.arrowBlue}
                      style= {{backgroundImage: `url(${CONSTANTS.STATIC_IMAGES_PATH}NavContests/menu/icon-arrow-down-blue.svg)`}}>
                </span>
            </h3>
            <div className={styles.menu}>
                <Link to='https://www.atom.com/AboutUs' className={styles.linkRows}>About</Link>
                <Link to='https://www.atom.com/ContactUs' className={styles.linkRows}>Contact</Link>
                <Link to='https://www.atom.com/how-it-works' className={styles.linkRows}>How It Works</Link>
                <Link to='https://www.atom.com/testimonials-feedback' className={styles.linkRows}>Testimonials</Link>
                <Link to='https://www.atom.com/our-work' className={styles.linkRows}>Our Work</Link>
                <Link to='https://helpdesk.atom.com/' className={styles.linkRows}>Help & FAQs</Link>
                <Link to='https://www.atom.com/connect' className={styles.linkRows}>Partner with Us</Link>
                <Link to='/connect/affiliate' className={styles.linkRows}>Affiliate Program</Link>
                <Link to='https://www.atom.com/radar/' className={styles.linkRows}>AtomRadar</Link>
                <Link to='https://www.atom.com/blog/' className={styles.linkRows}>Blog</Link>
                <Link to='https://careers.atom.com/atom-com' className={styles.linkRows}>Careers</Link>
            </div>
            <h3 className={styles.indent}>Legal
                <span className={styles.arrowBlue}
                      style= {{backgroundImage: `url(${CONSTANTS.STATIC_IMAGES_PATH}NavContests/menu/icon-arrow-down-blue.svg)`}}>
                </span>
            </h3>
            <div className={styles.menu}>
                <Link to='https://www.atom.com/Terms&Conditions' className={styles.linkRows}>Terms of Service</Link>
                <Link to='https://www.atom.com/privacy-policy' className={styles.linkRows}>Privacy Policy</Link>
                <Link to='https://www.atom.com/cookie-policy' className={styles.linkRows}>Cookie Policy</Link>
            </div>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;