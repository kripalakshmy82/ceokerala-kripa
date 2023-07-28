"use client";

import { useEffect, useState } from "react";
import { Row, Col, Spinner } from "react-bootstrap";
import { Carousel } from "react-responsive-carousel";

import { AppBox } from "@/app/_components";
import AvatarInfo from "@/app/_components/AvatarInfo";

import { historyListItem } from "@/app/data";

import "react-responsive-carousel/lib/styles/carousel.min.css";

const HistoryListItem = ({ img, heading, place, party, link }) => {
  return (
    <AppBox className="history-info">
      <AvatarInfo
        img={img}
        heading={heading}
        place={place}
        party={party}
        link={link}
      />
    </AppBox>
  );
};

const HistoryList = ({ activeKey }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 500);
    return () => {
      setLoading(true);
    };
  }, [activeKey]);

  const settings = {
    showIndicators: false,
    showThumbs: false,
    swipeable: true,
    transitionTime: 1000,
    showArrows: true,
    showStatus: false,
    autoPlay: true,
    showStatus: 4,
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
            <Carousel {...settings}>
              {historyListItem.map((history, key) => (
                <Col lg={3} key={key}>
                  <HistoryListItem {...history} />
                </Col>
              ))}
            </Carousel>
          </Row>
        </>
      )}
    </>
  );
};

export default HistoryList;
