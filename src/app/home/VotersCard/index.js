"use client";

import { Container, Row } from "react-bootstrap";
import { AppCard, AppBox, AppSection, AppText } from "@/app/_components";

import { votersCardData } from "@/app/data";

function VoterCardItem({ alt, title, imgUrl }) {
  return (
    <AppBox className="flex-fill d-flex align-items-center justify-content-center voter-h-card-item text-center">
      <AppText
        render={() => (
          <>
            <i className="gif-img d-inline-flex">
              <img src={imgUrl} alt={alt} className="w-100" />
            </i>
          </>
        )}
      />
      <AppText
        render={() => (
          <h5 className="mb-0 title position-relative d-inline-block ps-2 pe-4">
            {title}
            <i className="position-absolute">
              <img src="./icons/chevron-right.svg" alt="" />
            </i>
          </h5>
        )}
      />
    </AppBox>
  );
}

const VotersCard = () => {
  return (
    <AppSection id="voters-card" className="voter-h-card-sec mt-4">
      <Container>
        <Row>
          <AppCard
            className="py-5 d-flex flex-lg-row flex-md-row flex-sm-column flex-column justify-content-between align-items-center"
            isShadow
          >
            {votersCardData.map((vCd, key) => (
              <VoterCardItem {...vCd} key={key} />
            ))}
          </AppCard>
        </Row>
      </Container>
    </AppSection>
  );
};

export default VotersCard;
