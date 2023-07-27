import DetailBanner from "../_components/DetailBanner";
import { eHistoryBnrData } from "../data";

function ElectionHistory() {
  return (
    <DetailBanner
      heading={eHistoryBnrData.heading}
      link={eHistoryBnrData.link}
      currentTitle={eHistoryBnrData.currentTitle}
    />
  );
}

export default ElectionHistory;
