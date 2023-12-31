"use client";

import { Container } from "react-bootstrap";
import {
  AppSection,
  AppBox,
  AppText,
  AvatarInfo,
  AppButton,
  AppCard,
  AppSelect,
} from "@/app/_components";

import classNames from "classnames";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HistoryElection = ({ data }) => {
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
    "d-flex justify-content-between align-items-center": true,
  });

  return (
    <AppSection id="history" className="section-block-sm history-election">
      <Container>
        <AppBox className={sectionHeadingCx}>
          <AppBox className="section-heading">
            <AppText render={() => <h3>Election History</h3>} />
          </AppBox>
          <AppBox className="area-block d-flex flex-row gap-2 align-items-center">
            <AppBox className="text-box">
              <AppText
                render={() => <h6 className="mb-0">Select the year</h6>}
              />
            </AppBox>
            <AppBox className="select-box">
              <AppSelect
                options={["2000 - 2010", "2010 - 2014", "2014 - 2020"]}
              />
            </AppBox>
          </AppBox>
        </AppBox>
        <AppBox className="history-election">
          <Slider {...settings} className="history-carousel carousel-common">
            {data.map(({ id, ...rest }) => (
              <AppCard key={id} cardType="hover">
                <AppBox className="p-5">
                  <AvatarInfo {...rest} direction="row" />
                </AppBox>
              </AppCard>
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

export default HistoryElection;
