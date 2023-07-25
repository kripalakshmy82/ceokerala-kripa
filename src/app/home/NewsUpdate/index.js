"use client";

import classNames from "classnames";
import { Container } from "react-bootstrap";
import { AppBox, AppSection, AppText } from "@/app/_components";
import AppTabSwitcher, {
  AppTabContainer,
  AppTabNavigation,
  AppTabContent,
} from "@/app/_components/AppTab";

import NewsList from "./shared/NewsList";

// news tab navigation
const newsTabNavigation = [
  {
    key: "latest-news",
    title: "Latest News",
  },
  {
    key: "current-update",
    title: "Current Update",
  },
  {
    key: "important-info",
    title: "Important Info",
  },
];

function NewsSectionTitle() {
  return (
    <AppBox className="flex-block">
      <AppBox className="flex-item">
        <AppText
          render={() => <h2 className="site-heading">News and Updates</h2>}
        />
      </AppBox>
    </AppBox>
  );
}

const NewsUpdate = () => {
  const newsTitlecx = classNames({
    "news-title-section": true,
    "d-flex": true,
    "flex-column flex-lg-row flex-md-row flex-sm-column": true,
    "justify-content-between align-items-center": true,
    "mb-3 mb-lg-5 mb-md-5 mb-sm-4": true,
  });

  const navTabcx = classNames({
    "flex-block flex-block-links d-flex": true,
  });

  return (
    <AppSection id="news" className="latest-news">
      <Container>
        <AppTabSwitcher activeKey="latest-news">
          <AppTabContainer id="news-tabs">
            <AppBox className={newsTitlecx}>
              <NewsSectionTitle />
              <AppTabNavigation
                data={newsTabNavigation}
                variant="underline"
                className={navTabcx}
              />
            </AppBox>
            <AppTabContent
              render={(activeTabID) => (
                <NewsList activeKey={activeTabID} />
              )}
            />
          </AppTabContainer>
        </AppTabSwitcher>
      </Container>
    </AppSection>
  );
};

export default NewsUpdate;
