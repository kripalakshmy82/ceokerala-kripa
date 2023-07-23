"use client";
import { Container, Col } from "react-bootstrap";

import AppCard from "@/app/_components/AppCard";

import { helpCardData } from "@/app/data";

const HelpCard = () => {
  return (
    <section className="help-card-section section-block-lg">
      <Container>
        <Col className="d-flex gap-4 flex-lg-row flex-md-row flex-sm-column flex-column justify-content-between align-items-center">
          {helpCardData.map(({ alt, imgUrl, heading, description, href }, key) => (
            <AppCard key={key} className="p-4">
              <span className="d-block mb-3 app-card">
                <img src={imgUrl} alt={alt} className="w-100" />
              </span>
              <h3>{heading}</h3>
              <p className="mb-0">{description}</p>
              <a href={href} className="stretched-link"></a>
            </AppCard>
          ))}
        </Col>
      </Container>
    </section>
  );
};

export default HelpCard;
