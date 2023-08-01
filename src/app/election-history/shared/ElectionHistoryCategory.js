"use client";

import { Container } from "react-bootstrap";
import { AppSection, AppBox, AppText } from "@/app/_components";
import AppTabSwitcher, {
  AppTabContainer,
  AppTabNavigation,
  AppTabContent,
} from "@/app/_components/AppTab";

import classNames from "classnames";
import { electionCategoryData } from "@/app/data";
import ElectionCategoryList from "./ElectionCategoryList";

// electionCategory tab navigation
const electionCategoryTabNavigation = [
  {
    key: "pre-election",
    title: "Pre Election",
  },
  {
    key: "post-election",
    title: "Post Election",
  },
  {
    key: "during-election",
    title: "During Election",
  },
];
function SectionTitle() {
  return (
    <AppBox className="flex-block">
      <AppBox className="flex-item">
        <AppText
          render={() => <h2 className="site-heading">Election History</h2>}
        />
      </AppBox>
    </AppBox>
  );
}

const ElectionHistoryCategory = () => {
  const sectionTitlecx = classNames({
    "news-title-section": true,
    "d-flex": true,
    "flex-row": true,
    "justify-content-between align-items-center": true,
    "mb-3 mb-lg-5 mb-md-5 mb-sm-4": true,
  });

  const navTabcx = classNames({
    "flex-block flex-block-links d-flex": true,
  });
  return (
    <AppSection id="election-category" className="pre-election section-block-md">
      <Container>
        <AppTabSwitcher activeKey="pre-election">
          <AppTabContainer id="election-category-tabs">
            <AppBox className={sectionTitlecx}>
              <SectionTitle />
              <AppTabNavigation
                data={electionCategoryTabNavigation}
                variant="underline"
                className={navTabcx}
              />
            </AppBox>
            <AppTabContent
              render={(activeTabID) => (
                <ElectionCategoryList
                  activeKey={activeTabID}
                  data={electionCategoryData}
                />
              )}
            />
          </AppTabContainer>
        </AppTabSwitcher>
      </Container>
    </AppSection>
  );
};

export default ElectionHistoryCategory;
