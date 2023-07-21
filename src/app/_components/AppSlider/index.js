"use client";

import { Carousel } from "react-responsive-carousel";
import { Row, Col } from "react-bootstrap";

import AppButton from "@/app/_components/AppButton";

import { sliderData } from "@/app/data";

import "react-responsive-carousel/lib/styles/carousel.min.css";

const AppSlider = () => {
  const settings = {
    showIndicators: true,
    showThumbs: false,
    swipeable: true,
    transitionTime: 10,
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
              <Col className="col-lg-7 col-md-12 col-sm-12 col-12 d-flex align-items-center">
                <div className="content text-start">
                  <h2 className="mb-lg-4 mb-md-4 mb-sm-3 mb-3">{heading}</h2>
                  <p className="mb-5">{description}</p>
                  <div className="btn-box d-flex gap-3">
                    <AppButton
                      href={href}
                      color="black"
                      title="Discover"
                      variant="themeBtn"
                    />
                  </div>
                </div>
              </Col>
              <Col className="col-lg-5 col-md-5 col-sm-12 col-12 d-lg-block d-md-none d-sm-none d-none position-relative">
              <span className="object-1 position-absolute"> 
                <img src="./assets/spot-object-1.png" alt="" /> 
              </span>
              <span className="object-2 position-absolute"> 
                <img src="./assets/spot-object-2.png" alt="" /> 
              </span>
              <span className="object-3 position-absolute"> 
                <img src="./assets/spot-object-3.png" alt="" /> 
              </span>
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
