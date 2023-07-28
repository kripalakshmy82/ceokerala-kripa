"use client";

import { string, node, shape, oneOf } from "prop-types";
import { Card } from "react-bootstrap";

import { AppBox } from "../Elements";
import AppCard from "../AppCard";

const AvatarInfo = ({
  img,
  link,
  place,
  party,
  heading,
  className = "",
}) => {
  return (
    <>
      <AppCard className={className} isShadow>
        <AppBox className="avatar-info-box">
          <AppBox className="avatar-img-box pt-4 px-4 pb-0">
            <span
              className="d-block m-auto"
              style={{
                maxWidth: "160px",
              }}
            >
              {img && <Card.Img variant="top" src={img.url} alt={img.alt} />}
            </span>
          </AppBox>
          <AppBox className="content-box">
            <Card.Body className="p-4">
              <Card.Title className="mb-3">
                <h4 className="mb-3">{heading}</h4>
                <h5 className="small">{place}</h5>
                <h6 className="small">{party}</h6>
              </Card.Title>
              {link && (
                <a href={link} className="stretched-link">
                  <img src="./icons/arrow-right.svg" />
                </a>
              )}
            </Card.Body>
          </AppBox>
        </AppBox>
      </AppCard>
    </>
  );
};

AvatarInfo.propTypes = {
  heading: string,
  place: string,
  party: node,
  link: string,
  img: shape({
    url: string,
    alt: string,
  }),
  className: string,
  iconUrl: string,
  direction: oneOf(["column", "row"]),
};

export default AvatarInfo;
