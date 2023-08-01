"use client";

import { Container, Row, Col } from "react-bootstrap";
import { AppSection, AppBox, InfoCard, AppCard } from "@/app/_components";

const EnrollUpdation = ({ data }) => {
  return (
    <AppSection
      id="enroll-update"
      className="enroll-update section-block-md-end"
    >
      <AppBox className="enroll-update-box">
        <Container>
          <Row>
            <Col lg={12}>
              <AppCard isShadow>
                <AppBox className="p-5 col-lg-8 offset-lg-2 d-flex justify-content-center align-items-center">
                  <InfoCard
                    {...data}
                    cardTitleDir="row"
                    className="p-5"
                    hoverCard={false}
                  />
                </AppBox>
              </AppCard>
            </Col>
          </Row>
        </Container>
      </AppBox>
    </AppSection>
  );
};

export default EnrollUpdation;
