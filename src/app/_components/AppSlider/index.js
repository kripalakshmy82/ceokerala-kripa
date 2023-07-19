"use client";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
//import Slider from "react-slick";
import { Row, Col } from "react-bootstrap";

import AppButton from "@/app/_components/AppButton";

import { sliderData } from "@/app/data";

//import "slick-carousel/slick/slick.css";
//import "slick-carousel/slick/slick-theme.css";

const AppSlider = () => {
  const settings = {
    showIndicators: true,
    swipeable: true,
    transitionTime: 5,
    showArrows: false,
    showStatus: false,
  };

  return (
    <Carousel {...settings}>
      {sliderData.map(
        (
          {
            heading,
            description,
            href,
            videoLink,
            alt,
            circleImgOne,
            circleImgTwo,
            circleImgThree,
            circleImgFour,
          },
          key
        ) => (
          <div className="slide-item" key={key}>
            <Row>
              <Col className="col-lg-7 col-md-7 col-sm-12 col-12 d-flex align-items-center">
                <div className="content text-start">
                  <h2 className="mb-lg-4 mb-md-4 mb-sm-3 mb-3">{heading}</h2>
                  <p>{description}</p>
                  <div className="btn-box d-flex gap-3">
                    <AppButton
                      href={href}
                      color="black"
                      title="Discover"
                      variant="themeBtn"
                    />

                    <a
                      href={videoLink}
                      className="play-btn-component border-0 bg-transparent color-black"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="css-i6dzq1"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <polygon points="10 8 16 12 10 16 10 8"></polygon>
                      </svg>
                      Watch Video
                    </a>
                  </div>
                </div>
              </Col>
              <Col className="col-lg-5 col-md-5 col-sm-12 col-12">
                <div className="campign-latest-image position-relative">
                  <span className="floating campign-item campign-item-1 campign-item-sm d-block">
                    <img
                      src={circleImgOne}
                      className="rounded-circle w-100"
                      alt={alt}
                    />
                  </span>
                  <span className="tossing campign-item campign-item-2 campign-item-sm d-block">
                    <img
                      src={circleImgTwo}
                      className="rounded-circle w-100"
                      alt={alt}
                    />
                  </span>
                  <span className="tossing campign-item campign-item-3 campign-item-md d-block">
                    <img
                      src={circleImgThree}
                      className="rounded-circle w-100"
                      alt={alt}
                    />
                  </span>
                  <span className="tossing campign-item campign-item-4 campign-item-lg d-block">
                    <img
                      src={circleImgFour}
                      className="rounded-circle w-100"
                      alt={alt}
                    />
                  </span>
                </div>
              </Col>
            </Row>
          </div>
        )
      )}
    </Carousel>
  );
};

export default AppSlider;
