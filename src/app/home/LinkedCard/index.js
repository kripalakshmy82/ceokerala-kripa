"use client";

import classNames from "classnames";

import { Container } from "react-bootstrap";
import { InfoCard, AppSection, AppBox } from "@/app/_components";

const LinkedCard = ({ data }) => {
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
          {data.map(({ id, ...rest }) => (
            <InfoCard
              key={id}
              className="py-5 px-4"
              cardTitleDir="column"
              {...rest}
            />
          ))}
        </AppBox>
      </Container>
    </AppSection>
  );
};

export default LinkedCard;
