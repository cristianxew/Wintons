import React from "react";
import Link from "gatsby-link";
import { ImMobile, ImPhone } from "react-icons/im";
import FacebookIcon from "../icons/facebook-icon";
import TwitterIcon from "../icons/twitter-icon";
import InstagramIcon from "../icons/instagram-icon";
import { FaWhatsappSquare } from "react-icons/fa";
/**
 * Internal dependencies.
 */
import Nav from "./nav";
import useSticky from "../hooks/useSticky";
import "./style.scss";
import defaultSiteLogoUrl from "../../images/logo.png";

const Header = ({ data }) => {
  const {
    wp: {
      header: { siteTitle, siteTagLine, siteLogoUrl },
    },
    headerMenuItems,
  } = data;
  const siteLogoURL = siteLogoUrl ? siteLogoUrl : defaultSiteLogoUrl;
  const { isSticky, element } = useSticky();
  return (
    <header
      ref={element}
      className={`site-header-container ${
        isSticky ? "site-header-container-sticky" : ""
      }`}
    >
      <div className="container">
        <div className="header-top-info">
          <div className="header-top-info-social">
            <ul className="social-links">
              <li>
                <a href="https://www.facebook.com/wintonsblinds/">
                  <FacebookIcon />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/wintonsblinds">
                  <TwitterIcon />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/wintonsblinds/">
                  <InstagramIcon />
                </a>
              </li>
              <li>
                <a href="https://wa.me/447884325979">
                  <FaWhatsappSquare />
                </a>
              </li>
            </ul>
          </div>
          <div className="header-top-info-contact">
            <div className="header-top-info-contact-item">
              <address>
                <ImPhone />
                <a href="tel:+4408000320646">0800 0320 646</a>
              </address>
            </div>
            <div className="header-top-info-contact-item">
              <address>
                <ImMobile />
                <a href="tel:+4407511455559">07511 455559</a>
              </address>
            </div>
          </div>
        </div>
        <div className="site-header">
          <div className="site-brand">
            <Link to="/">
              <figure>
                <img
                  className="site-brand__logo"
                  src={siteLogoURL}
                  alt="header logo"
                />
              </figure>
            </Link>
            <div className="site-brand__content">
              <h2 className="screen-reader-text site-brand__title">
                {siteTitle}
              </h2>
              <p className="site-brand__description">{siteTagLine}</p>
            </div>
          </div>

          <Nav headerMenuItems={headerMenuItems} />
        </div>
      </div>
    </header>
  );
};

/**
 *  Exporting Just the footer as well without static query for storybook,
 *  as static query does not work in storybook
 */
export { Header };
