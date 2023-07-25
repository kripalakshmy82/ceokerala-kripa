"use client";

import classNames from "classnames";

import { Container, Col } from "react-bootstrap";

import { InfoCard, AppSection } from "@/app/_components";
import { helpCardData } from "@/app/data";

const HelpCard = () => {
  const colCx = classNames({
    "d-flex": true,
    "gap-4": true,
    "flex-column flex-lg-row flex-md-row flex-sm-column": true,
    "justify-content-between align-items-center": true,
  });

  return (
    <AppSection id="help-card" className="help-card-section section-block-lg">
      <Container>
        <Col className={colCx}>
          {helpCardData.map(
            ({ id, iconUrl, heading, description, href }) => (
              <InfoCard
                key={id}
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
    </AppSection>
  );
};

export default HelpCard;
