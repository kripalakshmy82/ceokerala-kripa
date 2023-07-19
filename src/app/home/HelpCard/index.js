"use client";
import { Container, Col } from "react-bootstrap";

import AppCard from "@/app/_components/AppCard";

import { helpCardData } from "@/app/data";

const HelpCard = () => {
  return (
    <section className="help-card-section section-block-lg">
      <Container>
        <Col className="d-flex gap-4 flex-lg-row flex-md-row flex-sm-column flex-column justify-content-between align-items-center">
          {helpCardData.map((item, key) => (
            <AppCard key={key} variant="themeCard" {...item} />
          ))}
        </Col>
      </Container>
    </section>
  );
};

export default HelpCard;
