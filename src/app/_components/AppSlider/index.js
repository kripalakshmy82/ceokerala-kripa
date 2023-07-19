"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Row, Col } from "react-bootstrap";
import AppButton from "@/app/_components/AppButton";

import { sliderData } from "@/app/data";

const AppSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    loop: false,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
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
                <div className="content">
                  <h2 className="mb-lg-4 mb-md-4 mb-sm-3 mb-3">{heading}</h2>
                  <p>{description}</p>
                  <div className="btn-box d-flex gap-3">
                    <AppButton href={href} color="black" title="Discover" variant="themeBtn" />
                
                    <a
                      href={videoLink}
                      className="border-0 bg-transparent play-btn-component"
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
                  <span className="campign-item campign-item-1 campign-item-sm d-block">
                    <img
                      src={circleImgOne}
                      className="rounded-circle w-100"
                      alt={alt}
                    />
                  </span>
                  <span className="campign-item campign-item-2 campign-item-sm d-block">
                    <img
                      src={circleImgTwo}
                      className="rounded-circle w-100"
                      alt={alt}
                    />
                  </span>
                  <span className="campign-item campign-item-3 campign-item-md d-block">
                    <img
                      src={circleImgThree}
                      className="rounded-circle w-100"
                      alt={alt}
                    />
                  </span>
                  <span className="campign-item campign-item-4 campign-item-lg d-block">
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
    </Slider>
  );
};

export default AppSlider;
