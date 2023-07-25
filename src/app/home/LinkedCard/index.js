"use client";

import classNames from "classnames";

import { Container } from "react-bootstrap";
import { InfoCard, AppSection, AppBox } from "@/app/_components";

import { linkedCardData } from "@/app/data";

const LinkedCard = () => {
  const wrprCx = classNames({
    "d-flex": true,
    "gap-4": true,
    "flex-column flex-lg-row flex-md-row flex-sm-column": true,
    "justify-content-between align-items-center": true,
  });

  return (
    <AppSection id="helpful-links" className="section-block-md">
      <Container>
        <AppBox className={wrprCx}>
          {linkedCardData.map(({ id, heading, description, href, iconUrl }) => (
            <InfoCard
              key={id}
              title={heading}
              description={description}
              iconUrl={iconUrl}
              link={href}
              className="p-2"
              cardTitleDir="column"
            />
          ))}
        </AppBox>
      </Container>
    </AppSection>
  );
};

export default LinkedCard;
