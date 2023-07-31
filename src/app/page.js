import { createElement } from "react";

import SpotLight from "./home/Spotlight";
import VotersCard from "./home/VotersCard";
import BoardTeam from "./home/BoardTeam";
import HelpCard from "./home/HelpCard";
import NewsList from "./home/NewsUpdate";
import LinkedCard from "./home/LinkedCard";
import Gallery from "./home/Gallery";

import {
  sliderData,
  votersCardData,
  boardTeamData,
  helpCardData,
  newsUpdate,
  linkedCardData,
  galleryData,
} from "@/app/data";

export const metadata = {
  title: "ecm-kerala",
  description: "election-commission-kerala",
};

export default function Home() {
  const components = [
    [SpotLight, { data: sliderData }],
    [VotersCard, { data: votersCardData }],
    [BoardTeam, { data: boardTeamData }],
    [HelpCard, { data: helpCardData }],
    [NewsList, { data: newsUpdate }],
    [LinkedCard, { data: linkedCardData }],
    [Gallery, { data: galleryData }],
  ];

  return components.map(([Component, props]) =>
    createElement(Component, props)
  );
}
