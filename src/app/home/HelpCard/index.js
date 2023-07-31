"use client";

import classNames from "classnames";

import { Container, Col } from "react-bootstrap";

import { InfoCard, AppSection } from "@/app/_components";

const HelpCard = ({ data }) => {
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
          {data.map(({ id, ...rest }) => (
            <InfoCard
              key={id}
              className="py-5 px-4"
              cardTitleDir="column"
              iconWidth="full"
              {...rest}
            />
          ))}
        </Col>
      </Container>
    </AppSection>
  );
};

export default HelpCard;
