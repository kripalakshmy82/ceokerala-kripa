"use client";
import { Container, Col } from "react-bootstrap";

import { InfoCard } from "@/app/_components/AppCard";

import { helpCardData } from "@/app/data";

// Change imgUrl to iconUrl
// no need of alt while icon url provided
// create link shape obj

const HelpCard = () => {
  return (
    <section className="help-card-section section-block-lg">
      <Container>
        <Col className="d-flex gap-4 flex-lg-row flex-md-row flex-sm-column flex-column justify-content-between align-items-center">
          {helpCardData.map(
            ({ imgUrl: iconUrl, heading, description, href }, key) => (
              <InfoCard
                key={key}
                className="p-0"
                title={heading}
                description={description}
                cardTitleDir="column"
                iconUrl={iconUrl}
                iconWidth="full"
                link={href}
              />
            )
          )}
        </Col>
      </Container>
    </section>
  );
};

export default HelpCard;
