"use client";

import { Container, Row, Col } from "react-bootstrap";
import { AppSection, AppBox, InfoCard } from "@/app/_components";

const rollUpdateData = {
  alt: "image",
  imgUrl: "./assets/icon-link.png",
  title: "Electoral roll Continuous Updating with Suppliment",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.",
};

const EnrollUpdation = () => {
  return (
    <AppSection
      id="enroll-update"
      className="enroll-update section-block-md-end"
    >
      <AppBox className="enroll-update-box">
        <Container>
          <Row>
            <Col lg={12}>
              <InfoCard
                alt={rollUpdateData.alt}
                iconUrl={rollUpdateData.imgUrl}
                title={rollUpdateData.title}
                cardTitleDir="row"
                description={rollUpdateData.description}
              />
            </Col>
          </Row>
        </Container>
      </AppBox>
    </AppSection>
  );
};

export default EnrollUpdation;
