"use client";
import { Container } from "react-bootstrap";
import AppCard from "@/app/_components/AppCard";
import { linkedCardData } from "@/app/data";
const LinkedCard = () => {
  return (
    <section className="section-block-md">
      <Container>
        <div className="d-flex gap-4 flex-lg-row flex-md-row flex-sm-column flex-column justify-content-between align-items-center">
          {linkedCardData.map(({ href, alt, imgUrl, heading, description }, key) => (
            <AppCard className="p-5" key={key}>
              <span className="d-block mb-3">
                <img src={imgUrl} alt={alt} />
              </span>
              <h3 className="mb-3">{heading}</h3>
              <p>{description}</p>
              <a href={href} className="stretched-link"></a>
            </AppCard>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default LinkedCard;
