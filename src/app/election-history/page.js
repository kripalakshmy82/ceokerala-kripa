"use client";

import DetailBanner from "../_components/DetailBanner";
import { eHistoryBnrData } from "../data";
import HistoryContent from "./shared/HistoryContent";
import HistoryElection from "./shared/HistoryElection";

function ElectionHistory() {
  return (
    <>
      <DetailBanner
        heading={eHistoryBnrData.heading}
        link={eHistoryBnrData.link}
        currentTitle={eHistoryBnrData.currentTitle}
      />
      <HistoryContent />
      <HistoryElection />
    </>
  );
}

export default ElectionHistory;
