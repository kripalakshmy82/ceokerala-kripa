import { createElement } from "react";

import DetailBanner from "@/app/_components/DetailBanner";
import Promotion from "@/app/_components/Promotion";

import CardCeo from "./shared/CardCeo";
import Officers from "./shared/Officers";

import { ceoCardData, officersData, promoCardData } from "../data";

const CeoDesk = () => {
  const components = [
    [
      DetailBanner,
      {
        heading: "CEO's *Desk*",
        link: "#",
        currentTitle: "ceo-desk",
      },
    ],
    [CardCeo, { data: ceoCardData }],
    [Officers, { data: officersData }],
    [Promotion, { ...promoCardData }],
  ];

  return components.map(([Component, props]) =>
    createElement(Component, props)
  );
};

export default CeoDesk;
