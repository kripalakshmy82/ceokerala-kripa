import { createElement } from "react";

import DetailBanner from "@/app/_components/DetailBanner";
import Promotion from "@/app/_components/Promotion";

import VoterRegistration from "./VoterRegistration";
import Information from "./Information";
import ExternalSource from "./ExternalSource";
import EnrollUpdation from "./EnrollUpdation";

import {
  registerCardData,
  promoCardData,
  infoCardData,
  externalCardData,
  enRollUpdation
} from "@/app/data";


export const metadata = {
  title: "Voters Corner",
  description: "election-commission-kerala",
};

function VotersCorner() {
  const components = [
    [DetailBanner, { heading: "Voters *Corner*", link: "#", currentTitle: "voters-corner"}],
    [VoterRegistration, { data :  registerCardData}],
    [Promotion, { ...promoCardData }],
    [Information, { data: infoCardData}],
    [ExternalSource, { data: externalCardData}],
    [EnrollUpdation, { data: enRollUpdation}]
  ];

  return components.map(([Component, props]) =>
    createElement(Component, props)
  );
}

export default VotersCorner;
