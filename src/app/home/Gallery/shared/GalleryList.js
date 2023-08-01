"use client";

import classNames from "classnames";
import { AppBox, InfoCard, AppButton } from "@/app/_components";

const GalleryList = ({ activeKey, data }) => {
  const galleryWrapperCx = classNames({
    "d-flex gap-4": true,
    "flex-column flex-lg-row flex-md-row flex-sm-column": true,
    "justify-content-between align-items-center": true,
  });

  const exploreLinkWrapperCx = classNames({
    "d-flex mt-5": true,
    "justify-content-center align-items-center": true,
  });

  return (
    <>
      <AppBox className={galleryWrapperCx}>
        {data.map(({ id, ...rest }) => (
          <InfoCard
            key={id}
            {...rest}
            className="p-5"
            playIcon={activeKey === "videos"}
            themeCard
          />
        ))}
      </AppBox>
      <AppBox className={exploreLinkWrapperCx}>
        <AppButton
          variant="filledBtn"
          color="white"
          href="#"
          anchorTitle={`See more ${activeKey}`}
          title={`See more ${activeKey}`}
        />
      </AppBox>
    </>
  );
};

export default GalleryList;
