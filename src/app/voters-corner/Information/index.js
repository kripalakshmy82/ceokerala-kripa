"use client";

import { Container, Row, Col } from "react-bootstrap";
import { AppSection, AppBox, InfoCard } from "@/app/_components";

import { infoCardData } from "@/app/data";

const Information = () => {
  return (
    <AppSection id="information" className="section-v-corner section-block-md">
      <AppBox className="info-card-box">
        <Container>
          <Row>
            {infoCardData.map(
              ({ title, imgUrl: iconUrl, description }, key) => (
                <Col lg={6} md={6} sm={12} xs={12} key={key}>
                  <InfoCard className="p-5"
                    title={title}
                    iconUrl={iconUrl}
                    cardTitleDir="row"
                    description={description}
                  />
                </Col>
              )
            )}
          </Row>
        </Container>
      </AppBox>
    </AppSection>
  );
};

export default Information;
