"use client";

import { Card, Container, Row, Col } from "react-bootstrap";
import classNames from "classnames";

import AppCard from "../AppCard";
import { AppSection, AppBox } from "../Elements";

const Promotion = ({ img }) => {
  const promoCxWrapper = classNames({
    "bg-theme": true,
    "rounded-5": true,
    "d-flex justify-content-center align-items-center": true,
  });

  return (
    <AppSection id="promotion-card" className="promotion-card section-block-sm">
      <Container>
        <Row>
          <Col lg={12}>
            <AppCard cardType="default">
              <AppBox className={promoCxWrapper}>
                <Card.Img variant="top" src={img.url} alt={img.alt} />
              </AppBox>
            </AppCard>
          </Col>
        </Row>
      </Container>
    </AppSection>
  );
};

export default Promotion;
