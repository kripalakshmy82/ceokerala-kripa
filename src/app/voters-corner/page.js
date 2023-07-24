"use client";
import { Container, Row, Col } from "react-bootstrap";
import DetailBanner from "../_components/DetailBanner";
import { InfoCard } from "../_components/AppCard";
import { registerCardData } from "../data";

function VotersCorner() {
  return (
    <>
      <DetailBanner />
      <section className="section-v-corner section-block-md">
        <Container>
          <Row>
            {registerCardData.map(
              ({ alt, imgUrl: iconUrl, title, description }, key) => (
                <Col lg={4} md={4} sm={12} xs={12} key={key}>
                  <InfoCard
                    className="p-4"
                    alt={alt}
                    imgUrl={iconUrl}
                    title={title}
                    cardTitleDir="row"
                    description={description}
                  />
                </Col>
              )
            )}
          </Row>
        </Container>
      </section>
    </>
  );
}

export default VotersCorner;
