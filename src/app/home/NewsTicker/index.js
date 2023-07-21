"use client";

import Marquee from "react-fast-marquee";

import { Container } from "react-bootstrap";
import { newsContent } from "@/app/data";

const AppTicker = () => {
  return (
    <div className="news-scroll mtl-lg-5 mt-md-5 mt-sm-4 mt-3">
      <Container>
        <div className="d-flex align-items-center">
          <div className="title-text pe-3 me-3 position-relative">
            <h5 className="bold mb-0">Updates</h5>
          </div>
          <Marquee
            pauseOnHover="true"
            speed="50"
            direction="left"
            //gradient="true"
            //gradientColor={[255, 255, 255]}
          >
            {newsContent.map(({ description }, key) => (
              <div className="marquee-item" key={key}>
                <span className="marquee-seperator mx-3">+++</span>
                {description}
              </div>
            ))}
          </Marquee>
        </div>
      </Container>
    </div>
  );
};

export default AppTicker;
