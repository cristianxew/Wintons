import React from "react";
import { BsCardList, BsFillPeopleFill } from "react-icons/bs";
import { IoHomeSharp } from "react-icons/io5";
import Link from "gatsby-link";
import Button from "../../button";
import "./style.scss";

const Services = ({ data }) => {
  const {
    serviceTitleBig,
    serviceTitleSmall,
    service1,
    service2,
    service3,
    servicesFooterButtons,
  } = data;
  return (
    <>
      <section className="container section-services">
        <div className="number-tag-3">04.</div>
        <div className="section-services__title">
          <h3>{serviceTitleSmall}</h3>
          <h1>{serviceTitleBig}</h1>
        </div>
        <div className="row section-services__content">
          <div className="col-md-4 section-services__content__item">
            <div>
              {service1.icon ? (
                <img
                  alt={
                    service1.icon.altText
                      ? service1.icon.altText
                      : "service icon"
                  }
                  src={service1.icon.sourceUrl}
                />
              ) : (
                <BsCardList />
              )}
            </div>
            <h2>
              {service1.title ? service1.title : "Free Quotes, No Obligation"}
            </h2>
            <p>
              {service1.content
                ? service1.content
                : "A free, no-obligation quote, together with advice to help you chose the ideal blinds for your home."}
            </p>
          </div>
          <div className="col-md-4 section-services__content__item">
            <div>
              {service2.icon ? (
                <img
                  alt={
                    service1.icon.altText
                      ? service1.icon.altText
                      : "service icon"
                  }
                  src={service2.icon.sourceUrl}
                />
              ) : (
                <IoHomeSharp />
              )}
            </div>
            <h2>{service2.title ? service2.title : "Measured at Your Home"}</h2>
            <p>
              {service2.content
                ? service2.content
                : "Free measurement and fittings at your home to ensure a perfect fit, in a range of locations in the UK."}
            </p>
          </div>
          <div className="col-md-4 section-services__content__item">
            <div>
              {service3.icon ? (
                <img
                  alt={
                    service1.icon.altText
                      ? service1.icon.altText
                      : "service icon"
                  }
                  src={service3.icon.sourceUrl}
                />
              ) : (
                <BsFillPeopleFill />
              )}
            </div>
            <h2>{service3.title ? service3.title : "Total Customer Care"}</h2>
            <p>
              {service3.content
                ? service3.content
                : "Our team is on hand to help at any stage. We pride ourselves on the quality of the service we provide."}
            </p>
          </div>
        </div>
      </section>
      <footer className="section-services-footer">
        <div className="section-services-footer__content">
          <Link to={servicesFooterButtons.button1.buttonLink.uri}>
            <Button styles="button__outline-red-2">
              {servicesFooterButtons.button1.buttonName}
            </Button>
          </Link>
          <Link to={servicesFooterButtons.button2.buttonLink.uri}>
            <Button styles="button__outline-red-2">
              {servicesFooterButtons.button2.buttonName}
            </Button>
          </Link>
        </div>
      </footer>
    </>
  );
};

export default Services;
