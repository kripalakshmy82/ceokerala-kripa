"use client";

import { Container } from "react-bootstrap";
import {
  AppSection,
  AppBox,
  AppText,
  AppButton,
  InfoCard
} from "@/app/_components";

import classNames from "classnames";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Archive = ({ data }) => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const sectionHeadingCx = classNames({
    "news-title-section": true,
    "d-flex": true,
    "flex-row": true,
    "justify-content-between align-items-center": true,
    "mb-3 mb-lg-5 mb-md-5 mb-sm-4": true,
  });
  
  return (
    <AppSection id="archives" className="section-block-sm archives-election">
      <Container>
        <AppBox className={sectionHeadingCx}>
          <AppBox className="section-heading">
            <AppText render={() => <h3>Archives</h3>} />
          </AppBox>
        </AppBox>
        <AppBox className="history-election">
          <Slider {...settings} className="history-carousel carousel-common">
            {data.map(({id, ...rest }) => (
              <InfoCard key={id} className="py-5 px-4" cardTitleDir="column" {...rest} />
            ))}
          </Slider>
        </AppBox>
        <AppBox className="btn-box pt-5 d-flex justify-content-center">
          <AppButton
            title="See More"
            href="#"
            variant="themeBtn"
            anchorTitle="See more"
          />
        </AppBox>
      </Container>
    </AppSection>
  );
};

export default Archive;
