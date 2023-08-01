"use client";

import { Container, Row, Col } from "react-bootstrap";
import { AppSection, AppBox, InfoCard } from "@/app/_components";

const Information = ({ data }) => {
  return (
    <AppSection id="information" className="section-v-corner section-block-md">
      <AppBox className="info-card-box">
        <Container>
          <Row>
            {data.map(({ id, ...rest }) => (
              <Col lg={6} md={6} sm={12} xs={12} key={id}>
                <InfoCard className="p-5" cardTitleDir="row" {...rest} />
              </Col>
            ))}
          </Row>
        </Container>
      </AppBox>
    </AppSection>
  );
};

export default Information;
