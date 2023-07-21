
import SpotLight from "./home/Spotlight";
import VotersCard from "./home/VotersCard";
import BoardTeam from "./home/BoardTeam";
import HelpCard from "./home/HelpCard";
import NewsUpdate from "./home/NewsUpdate";
import LinkedCard from "./home/LinkedCard";
import GalleryCard from "./home/Gallery";
import TotalVoters from "./home/TotalVoters";

export const metadata = {
  title: "ecm-kerala",
  description: "election-commission-kerala",
};

export default function Home() {
  return (
    <main>
      <SpotLight />
      <VotersCard />
      <BoardTeam />
      <HelpCard  />
      <NewsUpdate />
      <LinkedCard />
      <GalleryCard />
      <TotalVoters />
    </main>
  );
}
