"use client";

import { Container } from "react-bootstrap";

const BoardTeam = ({ data }) => {
  return (
    <section className="board-team section-block-team">
      <Container>
        <div className="d-flex gap-4 flex-lg-row flex-md-row flex-sm-column flex-column justify-content-between align-items-center">
          {data.map(({ id, name, designation, img: { url, alt } }) => (
            <div
              className="p-4 flex-fill card-item text-center rounded-3"
              key={id}
            >
              <div className="img-block mb-3">
                <img src={url} className="rounded-circle w-100" alt={alt} />
              </div>
              <h5>{name}</h5>
              <p className="mb-0 small">{designation}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default BoardTeam;
