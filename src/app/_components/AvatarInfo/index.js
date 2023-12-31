"use client";

import { string, shape, oneOf } from "prop-types";
import { Image } from "react-bootstrap";
import classNames from "classnames";

import { AppBox, AppText } from "../Elements";
import AppButton from "../AppButton";

const AvatarInfo = ({
  direction = "column",
  name,
  img,
  designation = "",
  additionalInfo = {},
}) => {
  const avatarInfoCx = classNames({
    "d-flex gap-4": true,
    "flex-row justify-content-center align-items-center": direction === "row",
    "align-items-center flex-column": direction === "column",
  });

  const textAlignCx = classNames({
    "text-center": direction === "column",
    "text-start": direction === "row",
  });

  const avatarImgCx = classNames({
    "avatar-img": true,
    "position-relative": additionalInfo?.party?.icon,
  });

  return (
    <AppBox className={avatarInfoCx}>
      <AppBox className={avatarImgCx}>
        <Image src={img.url} alt={img.alt} className="w-100" roundedCircle />
        {additionalInfo && additionalInfo?.party?.icon && (
          <img
            src={additionalInfo?.party?.icon}
            className="position-absolute"
            style={{ bottom: 0, right: 0 }}
            alt=""
          />
        )}
      </AppBox>
      <AppBox className={textAlignCx}>
        <AppText render={() => <h5 className="fw-bold">{name}</h5>} />
        {designation && <AppText render={() => <h6>{designation}</h6>} />}
        {additionalInfo && additionalInfo?.party && (
          <AppText
            render={() => (
              <>
                <h5>{additionalInfo.party.area}</h5>
                <h6>{additionalInfo.party.name}</h6>
                <h6>{additionalInfo.party.annotation}</h6>
              </>
            )}
          />
        )}
        {additionalInfo && additionalInfo?.link && (
          <AppButton {...additionalInfo.link} stretchedLink />
        )}
      </AppBox>
    </AppBox>
  );
};

AvatarInfo.propTypes = {
  direction: oneOf(["row", "column"]),
  name: string.isRequired,
  designation: string,
  img: shape({
    url: string.isRequired,
    alt: string.isRequired,
  }),
  additionalInfo: shape({
    party: shape({
      area: string,
      name: string,
      annotation: string,
    }),
    icon: shape({
      url: string,
    }),
    link: shape({
      href: string,
      anchorTitle: string,
    }),
  }),
};

export default AvatarInfo;
