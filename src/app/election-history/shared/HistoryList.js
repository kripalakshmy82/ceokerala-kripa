"use client";

import { useEffect, useState } from "react";
//import { string, oneOf, node, shape } from "prop-types";
import { Row, Col, Spinner } from "react-bootstrap";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { AppBox, AvatarInfo } from "@/app/_components";

import { historyListItem } from "@/app/data";

const HistoryList = ({ activeKey }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 500);
    return () => {
      setLoading(true);
    };
  }, [activeKey]);

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
    <>
      {loading ? (
        <AppBox className="d-flex align-items-center justify-content-center">
          <Spinner animation="border" size="lg" />
        </AppBox>
      ) : (
        <>
          <Row>
            <Slider {...settings} className="history-carousel">
              {historyListItem.map(({ ...rest }, key) => (
                <Col key={key}>
                  <AvatarInfo {...rest} direction="column" />
                </Col>
              ))}
            </Slider>
          </Row>
        </>
      )}
    </>
  );
};

export default HistoryList;
