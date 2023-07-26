import DetailBanner from "@/app/_components/DetailBanner";

import VoterRegistration from "./VoterRegistration";
import Promotion from "./Promotion";
import Information from "./Information";
import ExternalSource from "./ExternalSource";
import EnrollUpdation from "./EnrollUpdation";

function VotersCorner() {
  return (
    <>
      <DetailBanner />
      <VoterRegistration />
      <Promotion />
      <Information />
      <ExternalSource />
      <EnrollUpdation />
    </>
  );
}

export default VotersCorner;
