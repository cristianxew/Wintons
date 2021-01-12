import React from "react";
import { normalizePath, sanitize } from "../../utils/functions";
import Link from "gatsby-link";
import FacebookIcon from "../icons/facebook-icon";
import TwitterIcon from "../icons/twitter-icon";
import InstagramIcon from "../icons/instagram-icon";
import { FaWhatsappSquare } from "react-icons/fa";
import Favicon from "../../images/favicon.png";
import PropTypes from "prop-types";
import { ImMobile, ImPhone } from "react-icons/im";
//import Button from "../../components/button";

const Footer = ({ data }) => {
  const {
    wp: {
      footer: { copyrightText, socialLinks, sidebarOne, sidebarTwo },
    },
    footerMenuItems,
  } = data;

  const staticSocialLink = [
    {
      iconName: "facebook",
      iconUrl: "https://www.facebook.com/wintonsblinds/",
    },
    { iconName: "twitter", iconUrl: "https://twitter.com/wintonsblinds" },
    {
      iconName: "instagram",
      iconUrl: "https://www.instagram.com/wintonsblinds/",
    },
    { iconName: "youtube", iconUrl: "https://wa.me/447884325979" },
  ];

  const socialLinksData = socialLinks.length ? socialLinks : staticSocialLink;

  return (
    <footer className="footer">
      <div className="container">
        {/*Top section*/}
        <div className="row footer__top">
          {sidebarOne ? (
            <div
              dangerouslySetInnerHTML={{ __html: sanitize(sidebarOne) }}
              className="footer__sidebar-one footer-widget"
            />
          ) : null}
          {sidebarTwo ? (
            <div
              dangerouslySetInnerHTML={{ __html: sanitize(sidebarTwo) }}
              className="footer__sidebar-two footer-widget"
            />
          ) : null}

          {footerMenuItems.edges.length ? (
            <div className="col-md-4 footer__top__item footer-menu-items footer-widget">
              <h5>Wintons</h5>
              <ul>
                {footerMenuItems.edges.map((menu) => (
                  <li key={menu.node.databaseId}>
                    <Link
                      className="header-nav__menu-link"
                      to={normalizePath(menu.node.url)}
                    >
                      {menu.node.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            ""
          )}
          <div className="col-sm-6 col-md-4 footer__top__item ">
            <h5>Contact us</h5>
            <p>
              Wintons are here to help you make the most of your home. Our team
              will be happy to answer any questions to help find your perfect
              blinds.
            </p>
            <div className="icon-footer-contact-wrapper">
              <div className="icon-footer-contact">
                <address>
                  <ImMobile />
                  <a
                    href="tel:+4407511455559"
                    className="icon-footer-contact-number"
                  >
                    07511 455559
                  </a>
                </address>
              </div>
              <div className="icon-footer-contact">
                <address>
                  <ImPhone />
                  <a
                    href="tel:+4408000320646"
                    className="icon-footer-contact-number"
                  >
                    0800 0320 646
                  </a>
                </address>
              </div>
            </div>
            {/* <div className="button-wrap">
              <Button styles="button__outline-red">Contact us</Button>
            </div> */}
          </div>
          <div className="col-sm-6 col-md-4 footer__top__item ">
            {/*	Bottom section*/}
            <div className="favicon-wrap">
              <img src={Favicon} alt="Wintons Blinds logo" />
            </div>
            <div className="footer__top__item-content">
              {socialLinksData.length ? (
                <ul className="social-links">
                  {socialLinksData.map((socialLink) => (
                    <li key={socialLink.iconName}>
                      <a
                        href={socialLink.iconUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {"facebook" === socialLink.iconName ? (
                          <FacebookIcon />
                        ) : null}
                        {"twitter" === socialLink.iconName ? (
                          <TwitterIcon />
                        ) : null}
                        {"instagram" === socialLink.iconName ? (
                          <InstagramIcon />
                        ) : null}
                        {"youtube" === socialLink.iconName ? (
                          <FaWhatsappSquare />
                        ) : null}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : null}
              <div className="copyright-text">
                {copyrightText ? (
                  <span>{copyrightText}</span>
                ) : (
                  <span>
                    <>&#x000A9;</>
                    {` Wintons Blinds ${new Date().getFullYear()} All rights reserved`}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  copyrightText: PropTypes.string,
};

Footer.defaultProps = {
  copyrightText: `Wintons Blinds ${new Date().getFullYear()}`,
};

/**
 *  Exporting Just the footer as well without static query for storybook,
 *  as static query does not work in storybook
 */
export { Footer };
