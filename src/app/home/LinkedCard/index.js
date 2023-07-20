"use client";
import { Container } from "react-bootstrap";
import AppCard from "@/app/_components/AppCard";
import { linkedCardData } from "@/app/data";
const LinkedCard = () => {
  return (
    <section className="section-block-md">
      <Container>
        <div className="d-flex gap-4 flex-lg-row flex-md-row flex-sm-column flex-column justify-content-between align-items-center">
          {linkedCardData.map(({ href, imgUrl, heading, description }, key) => (
            <AppCard
            className="p-5"
              variant="themeCard"
              imgUrl={imgUrl}
              heading={heading}
              description={description}
              href={href}
              key={key}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default LinkedCard;
