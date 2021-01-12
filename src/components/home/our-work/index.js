import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Link from "gatsby-link";
import Button from "../../button";
import "./style.scss";

const OurWork = ({ data }) => {
  const { titleBlack, titleGray, work1, work2, work3, work4 } = data;
  return (
    <section className="container our-work-section">
      <span className="number-tag-2">03.</span>
      <div className="col-lg-12 our-work-section__title">
        <h3>{titleGray}</h3>
        <h1>{titleBlack}</h1>
      </div>
      <div className="row our-work-section__inner">
        <div className="col-md-6 our-work-section__inner__img">
          <LazyLoadImage src={work1.image.sourceUrl} />
        </div>
        <div className="col-md-6 our-work-section__inner__content">
          <article>
            <p className="our-work-section__inner__content-title">
              {work1.homeSpace}
            </p>
            <h2>{work1.blindType}</h2>
            <div className="line"></div>
            <p>{work1.description}</p>
            <Link to={work1.buttonLink.uri}>
              <Button styles="button__outline-red">{work1.buttonName}</Button>
            </Link>
          </article>
        </div>
      </div>
      <div className="row our-work-section__inner">
        <div className="col-md-6 our-work-section__inner__img">
          <LazyLoadImage src={work2.image.sourceUrl} />
        </div>
        <div className="col-md-6 our-work-section__inner__content">
          <article>
            <p className="our-work-section__inner__content-title">
              {work2.homeSpace}
            </p>
            <h2>{work2.blindType}</h2>
            <div className="line"></div>
            <p>{work2.description}</p>
            <Link to={work2.buttonLink.uri}>
              <Button styles="button__outline-red">{work2.buttonName}</Button>
            </Link>
          </article>
        </div>
      </div>
      <div className="row our-work-section__inner">
        <div className="col-md-6 our-work-section__inner__img">
          <LazyLoadImage src={work3.image.sourceUrl} />
        </div>
        <div className="col-md-6 our-work-section__inner__content">
          <article>
            <p className="our-work-section__inner__content-title">
              {work3.homeSpace}
            </p>
            <h2>{work3.blindType}</h2>
            <div className="line"></div>
            <p>{work3.description}</p>
            <Link to={work3.buttonLink.uri}>
              <Button styles="button__outline-red">{work3.buttonName}</Button>
            </Link>
          </article>
        </div>
      </div>
      <div className="row our-work-section__inner">
        <div className="col-md-6 our-work-section__inner__img">
          <LazyLoadImage src={work4.image.sourceUrl} />
        </div>
        <div className="col-md-6 our-work-section__inner__content">
          <article>
            <p className="our-work-section__inner__content-title">
              {work4.homeSpace}
            </p>
            <h2>{work4.blindType}</h2>
            <div className="line"></div>
            <p>{work4.description}</p>
            <Link to={work4.buttonLink.uri}>
              <Button styles="button__outline-red">{work4.buttonName}</Button>
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
};

export default OurWork;
