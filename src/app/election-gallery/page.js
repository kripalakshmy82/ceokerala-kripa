import DetailBanner from "../_components/DetailBanner";
import Gallery from "./shared/Gallery";

import { electionGalleryData } from "../data";

const ElectionGallery = () => {
  return (
    <>
      <DetailBanner
        heading="Election *Gallery*"
        link="#"
        currentTitle="election-gallery"
      />
      <Gallery data={electionGalleryData} />
    </>
  );
};
export default ElectionGallery;
