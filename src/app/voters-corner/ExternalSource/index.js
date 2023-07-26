"use client";

import { Container, Row, Col } from "react-bootstrap";
import { AppSection, AppBox, InfoCard } from "@/app/_components";

import { externalCardData } from "@/app/data";

const ExternalSource = () => {
  return (
    <AppSection
      id="external-source"
      className="section-v-corner section-block-sm"
    >
      <AppBox className="external-source-box">
        <Container>
          <Row>
            {externalCardData.map(({ ...rest }, key) => (
              <Col lg={6} md={6} sm={12} xs={12} key={key}>
                <InfoCard {...rest} className="theme-card overflow-hidden" />
              </Col>
            ))}
          </Row>
        </Container>
      </AppBox>
    </AppSection>
  );
};

export default ExternalSource;
