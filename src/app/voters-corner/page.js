"use client";
import { Container, Row, Col } from "react-bootstrap";
import DetailBanner from "../_components/DetailBanner";
import { InfoCard } from "../_components/AppCard";
import {
  registerCardData,
  infoCardData,
  externalCardData
} from "../data";
import { AppSection, AppText, AppBox } from "../_components";
import PromotionCard from "../_components/PromotionCard";

const rollUpdateData = {
  alt: "image",
  imgUrl: "./assets/icon-link.png",
  title: "Electoral roll Continuous Updating with Suppliment",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.",
}

function VotersCorner() {
  return (
    <>
      <DetailBanner />

      <AppSection
        id="Registration"
        className="section-v-corner section-block-md"
      >
        <Container>
          <Row>
            <Col lg={12} className="mb-4">
              <AppText render={() => <h2>Registration</h2>}></AppText>
            </Col>
            {registerCardData.map(
              ({ alt, imgUrl: iconUrl, title, description, img }, key) => (
                <Col lg={4} md={4} sm={12} xs={12} key={key}>
                  <InfoCard
                    className="p-0 theme-card overflow-hidden"
                    alt={alt}
                    iconUrl={iconUrl}
                    iconWidth="full"
                    title={title}
                    img={img}
                    cardTitleDir="row"
                    description={description}
                  />
                </Col>
              )
            )}
          </Row>
        </Container>
      </AppSection>

      <AppSection id="promotion" className="section-v-corner section-block">
        <Container>
          <Row>
            <Col>
              <PromotionCard>
                <AppBox className="promo-img-box">
                  <img
                    src="./promotion/promoBg.png"
                    alt="logo"
                    className="w-100"
                  />
                </AppBox>
              </PromotionCard>
            </Col>
          </Row>
        </Container>
      </AppSection>

      <AppSection
        id="information"
        className="section-v-corner section-block-md"
      >
        <Container>
          <Row>
            {infoCardData.map(
              ({ title, imgUrl: iconUrl, description }, key) => (
                <Col lg={6} md={6} sm={12} xs={12} key={key}>
                  <InfoCard
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
      </AppSection>

      <AppSection
        id="external-source"
        className="section-v-corner section-block-sm"
      >
        <Container>
          <Row>
            {externalCardData.map(({ alt, title, img, link }, key) => (
              <Col lg={6} md={6} sm={12} xs={12} key={key}>
                <InfoCard
                  alt={alt}
                  title={title}
                  link={link}
                  img={img}
                  className="theme-card overflow-hidden"
                />
              </Col>
            ))}
          </Row>
        </Container>
      </AppSection>

      <AppSection
        id="enroll-update"
        className="enroll-update section-block-md-end"
      >
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
      </AppSection>
    </>
  );
}

export default VotersCorner;
