"use client";

import { string, number, bool, oneOf, shape } from "prop-types";

import classNames from "classnames";
import ReactMarkdown from "react-markdown";

import { Carousel } from "react-responsive-carousel";
import { Container, Row, Col } from "react-bootstrap";

import { AppSection, AppButton, AppBox, AppText } from "@/app/_components";

import NewsTicker from "@/app/home/NewsTicker";

import "react-responsive-carousel/lib/styles/carousel.min.css";

// Slider intro component
const AppSliderIntro = ({ heading, description, link }) => {
  return (
    <AppBox className="content text-start">
      <AppText
        render={() => (
          <>
            <h2 className="mb-lg-4 mb-md-4 mb-sm-3 mb-3">
              <ReactMarkdown
                children={heading}
                components={{
                  em: ({ node, ...props }) => <span {...props} />,
                }}
              />
            </h2>
            <p className="mb-lg-5 mb-md-3 mb-sm-3 mb-3">{description}</p>
          </>
        )}
      />
      <AppBox className="btn-box d-flex gap-3">
        <AppButton
          {...link}
          color="black"
          title="Discover"
          variant="themeBtn"
        />
      </AppBox>
    </AppBox>
  );
};

AppSliderIntro.propTypes = {
  heading: string.isRequired,
  description: string.isRequired,
  link: shape({
    href: string.isRequired,
    title: string.isRequired,
    anchorTitle: string.isRequired,
  }),
};

// Slider spot png obj component
const SliderSpotObj = ({ url, idx }) => {
  return (
    <span className={`object-${idx} position-absolute`}>
      <img src={url} alt="" />
    </span>
  );
};

SliderSpotObj.propTypes = {
  url: string.isRequired,
  idx: number.isRequired,
};

// Slider Campaign Image component
const SliderCampaginImage = ({ url, alt, idx, floating = false, size }) => {
  const wrapperCx = classNames({
    "campign-item d-block": true,
    [`campign-item-${idx}`]: true,
    [`campign-item-${size}`]: true,
    floating: floating,
    tossing: !floating,
  });

  return (
    <span className={wrapperCx}>
      <img src={url} className="rounded-circle w-100" alt={alt} />
    </span>
  );
};

SliderCampaginImage.propTypes = {
  url: string.isRequired,
  alt: string.isRequired,
  idx: number.isRequired,
  floating: bool,
  size: oneOf(["sm", "md", "lg"]).isRequired,
};

// AppSlider component
const AppSlider = ({ data }) => {
  const settings = {
    showIndicators: true,
    showThumbs: false,
    swipeable: true,
    transitionTime: 1000,
    showArrows: false,
    showStatus: false,
    autoPlay: true,
  };

  return (
    <Carousel {...settings}>
      {data.map(({ id, img_one, img_two, img_three, image_four, ...rest }) => (
        <AppBox className="slide-item" key={id}>
          <Row>
            <Col className="col-lg-7 col-md-12 col-sm-12 col-12 d-flex align-items-center">
              <AppSliderIntro {...rest} />
            </Col>
            <Col className="col-lg-5 col-md-5 col-sm-12 col-12 d-lg-block d-md-none d-sm-none d-none position-relative">
              {[
                "./assets/spot-object-1.png",
                "./assets/spot-object-2.png",
                "./assets/spot-object-3.png",
              ].map((spo, key) => (
                <SliderSpotObj url={spo} idx={key + 1} key={key} />
              ))}
              <AppBox className="campign-latest-image position-relative">
                <SliderCampaginImage {...img_one} idx={1} size="sm" floating />
                <SliderCampaginImage {...img_two} idx={2} size="sm" />
                <SliderCampaginImage {...img_three} idx={3} size="md" />
                <SliderCampaginImage {...image_four} idx={4} size="lg" />
              </AppBox>
            </Col>
          </Row>
        </AppBox>
      ))}
    </Carousel>
  );
};

// Spot Light component
function SpotLight({ data }) {
  return (
    <AppSection id="spotlight" className="spotlight section-block-sm background-bg">
      <Container fluid="xxl">
        <AppSlider data={data} />
      </Container>
      <NewsTicker />
    </AppSection>
  );
}

export default SpotLight;
