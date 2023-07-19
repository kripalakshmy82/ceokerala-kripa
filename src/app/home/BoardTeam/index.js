"use client"

import { Container } from "react-bootstrap";
import { boardTeamData } from "@/app/data";

const BoardTeam = () => {
  return (
    <section className="board-team section-block-team">
      <Container>
        <div className="d-flex gap-4 flex-lg-row flex-md-row flex-sm-column flex-column justify-content-between align-items-center">
          {boardTeamData.map(({ alt, imgUrl, heading, description }, key) => (
            <div
              className="p-4 flex-fill card-item text-center rounded-3"
              key={key}
            >
              <div className="img-block mb-3">
                <img src={imgUrl} className="rounded-circle w-100" alt={alt} />
              </div>
              <h5>{heading}</h5>
              <p className="mb-0 small">{description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default BoardTeam;
