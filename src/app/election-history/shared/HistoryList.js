"use client";

import { useEffect, useState } from "react";
import { string, oneOf, node, shape } from "prop-types";
import { Row, Col, Spinner, Card } from "react-bootstrap";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { AppCard, AppBox, AppText } from "@/app/_components";

import { historyListItem } from "@/app/data";
import classNames from "classnames";

function AvatarInfoItem({
  img,
  heading,
  place,
  party,
  link,
  direction = "column",
}) {
  const columnClassName = classNames({
    "d-flex flex-column gap-3": direction === "column",
  });
  const rowClassName = classNames({
    "d-flex flex-row gap-3": direction === "row",
  });

  return (
    <AppCard cardType="hover" className="p-4">
      <div className={direction === "column" ? columnClassName : rowClassName}>
        <div className="info-image">
          {img && <Card.Img variant="top" src={img.url} alt={img.alt}/>}
        </div>
        <div className="info-content">
          <AppText render={() => <h4>{heading}</h4>} />
          <AppText render={() => <h5>{place}</h5>} />
          <AppText render={() => <h6>{party}</h6>} />
          {link && <a href={link} className="stretched-link"></a>}
        </div>
      </div>
    </AppCard>
  );
}

AvatarInfoItem.propTypes = {
  heading: string,
  place: string,
  party: node,
  img: shape({
    url: string,
    alt: string,
  }),
  link: string,
  direction: oneOf(["column", "row"]),
};

const HistoryListItem = ({ img, party, place, heading, link }) => {
  return (
    <AvatarInfoItem
      heading={heading}
      img={img}
      place={place}
      party={party}
      link={link}
      direction="column"
    />
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
              {historyListItem.map((history, key) => (
                <Col key={key}>
                  <HistoryListItem {...history} />
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
