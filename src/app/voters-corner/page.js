import DetailBanner from "@/app/_components/DetailBanner";

import VoterRegistration from "./VoterRegistration";
import Promotion from "./Promotion";
import Information from "./Information";
import ExternalSource from "./ExternalSource";
import EnrollUpdation from "./EnrollUpdation";

import { vCornerBnrData } from "../data";



function VotersCorner() {
  return (
    <>
      <DetailBanner 
      heading={vCornerBnrData.heading}
      link={vCornerBnrData.link}
      currentTitle={vCornerBnrData.currentTitle}
      />
      <VoterRegistration />
      <Promotion />
      <Information />
      <ExternalSource />
      <EnrollUpdation />
    </>
  );
}

export default VotersCorner;
