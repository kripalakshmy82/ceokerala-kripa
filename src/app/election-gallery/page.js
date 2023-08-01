import { createElement } from "react";

import DetailBanner from "@/app/_components/DetailBanner";
import Promotion from "@/app/_components/Promotion";

import Gallery from "./shared/Gallery";

import { electionGalleryData, promoCardData } from "../data";

export const metadata = {
  title: "Election Gallery",
  description: "election-commission-kerala",
};

const ElectionGallery = () => {
  const components = [
    [
      DetailBanner,
      {
        heading: "Election *Gallery*",
        link: "#",
        currentTitle: "election-gallery",
      },
    ],
    [Gallery, { data: electionGalleryData }],
    [Promotion, { ...promoCardData }],
  ];

  return components.map(([Component, props]) =>
    createElement(Component, props)
  );
};
export default ElectionGallery;
