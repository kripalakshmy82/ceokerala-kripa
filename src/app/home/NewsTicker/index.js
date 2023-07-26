"use client";

import Marquee from "react-fast-marquee";

import { Container } from "react-bootstrap";
import { AppBox, AppText } from "@/app/_components";

import { newsContent } from "@/app/data";

const MarqueeItem = ({ info }) => {
  return (
    <AppBox className="marquee-item">
      <AppText
        render={() => (
          <>
            <span className="marquee-seperator mx-3">+++</span>
            <a href="#">{info}</a>
          </>
        )}
      />
    </AppBox>
  );
};

function NewsTicker() {
  return (
    <AppBox className="news-scroll mt-lg-5 mt-md-5 mt-sm-4 mt-4">
      <Container>
        <AppBox className="d-flex align-items-center">
          <AppBox className="title-text pe-3 me-3 position-relative">
            <AppText render={() => <h5 className="bold mb-0">Updates</h5>} />
          </AppBox>
          <Marquee pauseOnHover="true" speed="50" direction="left">
            {newsContent.map((info, key) => (
              <MarqueeItem info={info} key={key} />
            ))}
          </Marquee>
        </AppBox>
      </Container>
    </AppBox>
  );
}

export default NewsTicker;
