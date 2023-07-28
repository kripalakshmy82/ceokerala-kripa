"use client";

import { useEffect, useState } from "react";
import { Row, Col, Spinner } from "react-bootstrap";

import { AppBox } from "@/app/_components";

import AvatarInfo from "@/app/_components/AvatarInfo";

import { historyListItem } from "@/app/data";

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

  return (
    <>
      {loading ? (
        <AppBox className="d-flex align-items-center justify-content-center">
          <Spinner animation="border" size="lg" />
        </AppBox>
      ) : (
        <>
        <Row>
        {historyListItem.map((history, key) => (
            <Col lg={3} key={key}>
              <HistoryListItem {...history} />
            </Col>
            
          ))}
        </Row>
          
        </>
      )}
    </>
  );
};

export default HistoryList;
