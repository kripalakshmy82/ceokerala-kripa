import DetailBanner from "../_components/DetailBanner";
import CardCeo from "./shared/CardCeo";
import Officers from "./shared/Officers";


const CeoDesk = () => {
  return (
    <>
      <DetailBanner heading="CEO's *Desk*" link="#" currentTitle="ceo-desk" />
      <CardCeo />
      <Officers />

    </>
  );
};

export default CeoDesk;
