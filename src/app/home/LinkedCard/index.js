"use client";
import { Container } from "react-bootstrap";
import { InfoCard } from "@/app/_components/AppCard";
import { linkedCardData } from "@/app/data";

const LinkedCard = () => {
  return (
    <section className="section-block-md">
      <Container>
        <div className="d-flex gap-4 flex-lg-row flex-md-row flex-sm-column flex-column justify-content-between align-items-center">
          {linkedCardData.map(
            ({ href, imgUrl: iconUrl, heading, description }, key) => (
              <InfoCard
                key={key}
                className="p-2"
                title={heading}
                description={description}
                cardTitleDir="column"
                iconUrl={iconUrl}
                link={href}
              />
            )
          )}
        </div>
      </Container>
    </section>
  );
};

export default LinkedCard;
