import React from "react";
import Link from "gatsby-link";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Button from "../../button";
import "./style.scss";

const Welcome = ({ data }) => {
  const { titleBig, titleSmall, section1, section2, section3 } = data;

  return (
    <section className="container welcome-section-container">
      <div className="welcome-section-title">
        <h3>{titleSmall}</h3>
        <h1>{titleBig}</h1>
      </div>
      <div className="row welcome-section">
        <span className="number-tag">01.</span>
        <div className="col-lg-4 box box__3">
          <article>
            <h1>{section1.title}</h1>
            <p>{section1.content}</p>
            {/*  <div className="line my-4"></div> */}
            <Link to={section1.buttonLink.uri}>
              <Button styles="button__gray">{section1.buttonName}</Button>
            </Link>
          </article>
        </div>
        <div className="col-lg-4 box box__2">
          <article>
            <h1>{section2.title}</h1>
            <p>{section2.content}</p>
            <div className="line my-4"></div>
            <Link to={section2.buttonLink.uri}>
              <Button styles="button__gray">{section2.buttonName}</Button>
            </Link>
          </article>
        </div>
        <div className="col-lg-4 box box__4">
          <figure>
            <LazyLoadImage
              alt={
                section3.altText
                  ? section3.altText
                  : "beautifull Blinds in kitchen"
              }
              src={section3.sourceUrl}
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
