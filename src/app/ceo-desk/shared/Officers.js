"use client";
import { Container } from "react-bootstrap";
import { AppBox, AppSection, AvatarInfo } from "@/app/_components";

import classNames from "classnames";

const Officers = ({ data }) => {
  const wrapCx = classNames({
    "d-flex gap-4 flex-lg-row flex-md-row flex-sm-column flex-column": true,
    "justify-content-center": true
  });
  return (
    <AppSection id="officers" className="officers-section section-block-sm">
      <Container>
        <AppBox className={wrapCx}>
          {data.map(({ ...rest }, key) => (
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
