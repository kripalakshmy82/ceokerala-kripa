"use client";

import classNames from "classnames";
import { Container } from "react-bootstrap";
import { AppSection, AppBox, AppText } from "@/app/_components";
import AppTabSwitcher, {
  AppTabContainer,
  AppTabNavigation,
  AppTabContent,
} from "@/app/_components/AppTab";

import GalleryList from "./GalleryList";

const tabsNavigation = [
  {
    key: "images",
    title: "Images",
  },
  {
    key: "videos",
    title: "Videos",
  },
];

function GallerySectionTitle() {
  return (
    <AppBox className="flex-block">
      <AppBox className="flex-item">
        <AppText render={() => <h2 className="site-heading">Gallery</h2>} />
      </AppBox>
    </AppBox>
  );
}

const ElectionGalleryList = ({ data }) => {
  const galleryCx = classNames({
    "gallery-section": true,
    "d-flex": true,
    "flex-column flex-lg-row flex-md-row flex-sm-column": true,
    "justify-content-between align-items-center": true,
    "mb-3 mb-lg-5 mb-md-5 mb-sm-4": true,
  });

  const navTabcx = classNames({
    "flex-block flex-block-links gap-2 d-flex": true,
  });

  return (
    <AppSection id="gallery" className="gallery section-block-md">
      <Container>
        <AppTabSwitcher activeKey="images">
          <AppTabContainer id="gallery-tabs">
            <AppBox className={galleryCx}>
              <GallerySectionTitle />
              <AppTabNavigation
                data={tabsNavigation}
                variant="pills"
                className={navTabcx}
              />
            </AppBox>
            <AppTabContent
              render={(activeTabID) => (
                <GalleryList activeKey={activeTabID} data={data} />
              )}
            />
          </AppTabContainer>
        </AppTabSwitcher>
      </Container>
    </AppSection>
  );
};

export default ElectionGalleryList;
