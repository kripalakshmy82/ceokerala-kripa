"use client";

import { Container } from "react-bootstrap";
import { votersCardData } from "@/app/data";

const VotersCard = () => {
  return (
    <section className="voter-h-card-sec mt-4">
      <Container>
        <div className="voter-h-card-wrap bg-white rounded-theme shadow-lg d-flex flex-lg-row flex-md-row flex-sm-column flex-column justify-content-between align-items-center">
          {votersCardData.map(({ alt, title, imgUrl }, key) => (
            <div
              className="py-5 flex-fill d-flex align-items-center justify-content-center voter-h-card-item text-center"
              key={key}
            >
              <i className="gif-img d-inline-flex">
                <img src={imgUrl} alt={alt} className="w-100" />
              </i>
              <h5 className="mb-0 title position-relative d-inline-block ps-2 pe-4">
                {title}
                <i className="position-absolute">
                  <img src="./icons/chevron-right.svg" alt="" />
                </i>
              </h5>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default VotersCard;
