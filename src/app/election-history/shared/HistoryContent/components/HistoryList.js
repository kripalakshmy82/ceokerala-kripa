"use client";

import { Row, Col, } from "react-bootstrap";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { AvatarInfo } from "@/app/_components";

const HistoryList = ({ activeKey, data }) => {
  console.log(activeKey);

  const settings = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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

  return (
    <Row>
      <Slider {...settings} className="history-carousel carousel-common">
        {data.map(({ ...rest }, key) => (
          <Col key={key}>
            <AvatarInfo {...rest} direction="column" />
          </Col>
        ))}
      </Slider>
    </Row>
  );
};

export default HistoryList;
