"use client";
import { Container } from "react-bootstrap";
import { AppBox, AppSection, AvatarInfo } from "@/app/_components";
import classNames from "classnames";

const officersData = [
  {
    name: "Rajiv Kumar",
    designation: "Chief election commissioner",
    img: {
      url: "./assets/icon-avatar.png",
      alt: "image",
    },
  },
  {
    name: "S.H. Anup Chandra Pandey",
    designation: "Chief election commissioner",
    img: {
      url: "./assets/icon-avatar.png",
      alt: "image",
    },
  },
  {
    name: "SH. Arun Goel",
    designation: "Chief election commissioner",
    img: {
      url: "./assets/icon-avatar.png",
      alt: "image",
    },
  },
];

const Officers = () => {
  const wrapCx = classNames({
    "d-flex gap-4 flex-lg-row flex-md-row flex-sm-column flex-column": true,
    "justify-content-center": true
  });
  return (
    <AppSection id="officers" className="officers-section section-block-sm">
      <Container>
        <AppBox className={wrapCx}>
          {officersData.map(({ ...rest }, key) => (
            <AppBox className="p-4" key={key}>
              <AvatarInfo {...rest} />
            </AppBox>
          ))}
        </AppBox>
      </Container>
    </AppSection>
  );
};

export default Officers;
