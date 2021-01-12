import React from "react";
import Slider from "react-slick";
import { isEmpty } from "lodash";
import Link from "gatsby-link";
import Button from "../../button";
import "./style.scss";

const Carousel = ({ categories }) => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 4000,
    speed: 2000,
    autoplay: true,
    fade: true,
    arrows: true,
    pauseOnFocus: true,
  };

  return (
    <div>
      <Slider {...settings}>
        {!isEmpty(categories.nodes)
          ? categories.nodes.map((category) => {
              return (
                <div key={category.id} className="">
                  <div className="carousel-img-wrap">
                    {!isEmpty(category.image) &&
                    !isEmpty(category.image.sourceUrl) ? (
                      <img
                        src={category.image.sourceUrl}
                        alt={
                          !isEmpty(category.image.altText)
                            ? category.image.altText
                            : category.name
                        }
                      />
                    ) : null}
                  </div>
                  <div className="carousal-info">
                    <div className="container">
                      <div className="carousal-info-inner">
                        <h1 className="carousal-info-inner-title">
                          Beautifully Crafted{" "}
                          <span style={{ color: "" }}>{category.name}</span>
                        </h1>
                        <h2 className="my-3">For Your Home</h2>
                        <p>{category.description}</p>
                        <Link to={category.uri}>
                          <Button styles="button__red">Explore</Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          : null}
      </Slider>
    </div>
  );
};

export default Carousel;
