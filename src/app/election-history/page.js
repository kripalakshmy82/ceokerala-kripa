import { createElement } from "react";

import DetailBanner from "@/app/_components/DetailBanner";
import Promotion from "@/app/_components/Promotion";

import HistoryContent from "./shared/HistoryContent";
import HistoryElection from "./shared/HistoryElection";
import HistoryCategory from "./shared/HistoryCategory";
import Archive from "./shared/Archive";
import Misc from "./shared/Misc";

import {
  electionHistoryNews,
  electionHistoryNews2,
  promoCardData,
  electionCategoryData,
  archives,
  misc,
} from "@/app/data";

export const metadata = {
  title: "Election History",
  description: "election-commission-kerala",
};

function ElectionHistory() {
  const components = [
    [
      DetailBanner,
      {
        heading: "Election *History*",
        link: "#",
        currentTitle: "voters-corner",
      },
    ],
    [HistoryContent, { data: electionHistoryNews }],
    [HistoryElection, { data: electionHistoryNews2 }],
    [HistoryCategory, { data: electionCategoryData }],
    [Promotion, { ...promoCardData }],
    // [Archive, { data: archives }],
    // [Misc, { data: misc }],
  ];

  return components.map(([Component, props]) =>
    createElement(Component, props)
  );
}

export default ElectionHistory;
