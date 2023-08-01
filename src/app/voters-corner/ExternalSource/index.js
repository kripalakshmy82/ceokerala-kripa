"use client";

import { Container, Row, Col } from "react-bootstrap";
import { AppSection, AppBox, InfoCard } from "@/app/_components";

const ExternalSource = ({ data }) => {
  return (
    <AppSection
      id="external-source"
      className="section-v-corner section-block-sm"
    >
      <AppBox className="external-source-box">
        <Container>
          <Row>
            {data.map(({ ...rest }, key) => (
              <Col lg={6} md={6} sm={12} xs={12} key={key}>
                <InfoCard className="px-4 py-4" {...rest} cardTitleDir="row" themeCard />
              </Col>
            ))}
          </Row>
        </Container>
      </AppBox>
    </AppSection>
  );
};

export default ExternalSource;
