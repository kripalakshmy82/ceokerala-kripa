"use client";

import { Container } from "react-bootstrap";
import classNames from "classnames";

import { AppBox, AppSection, AppText } from "@/app/_components";
import AppTabSwitcher, {
  AppTabContainer,
  AppTabNavigation,
  AppTabContent,
} from "@/app/_components/AppTab";

import HistoryList from "./components/HistoryList";

// election history tab navigation
const electionHistoryTabNavigation = [
  {
    key: "lok-sabha",
    title: "Lok Sabha",
  },
  {
    key: "legislative-assembly",
    title: "Legislative Assembly",
  },
  {
    key: "rajya-sabha",
    title: "Rajya Sabha",
  },
];

const HistoryContent = ({ data }) => {
  const historyTitlecx = classNames({
    "news-title-section": true,
    "d-flex": true,
    "flex-column flex-lg-row flex-md-row flex-sm-column": true,
    "justify-content-center align-items-center": true,
    "mb-3 mb-lg-5 mb-md-5 mb-sm-4": true,
  });

  const navTabcx = classNames({
    "flex-block flex-block-links gap-3 d-flex text-black": true,
  });

  const sectionHeadingCx = classNames({
    "d-flex justify-content-between align-items-center": true,
  });
  return (
    <AppSection id="history" className="section-block-sm election-history">
      <Container>
        <AppTabSwitcher activeKey="lok-sabha">
          <AppTabContainer id="history-tabs">
            <AppBox className={historyTitlecx}>
              <AppTabNavigation
                data={electionHistoryTabNavigation}
                variant="pills"
                className={navTabcx}
              />
            </AppBox>
            <AppBox className={sectionHeadingCx}>
              <AppBox className="section-heading">
                <AppText render={() => <h3>Current Elected Members</h3>} />
              </AppBox>
              <AppBox className="area-link">
                <AppText render={() => <a href="#">See more</a>} />
              </AppBox>
            </AppBox>
            <AppTabContent
              render={(activeTabID) => <HistoryList activeKey={activeTabID} data={data} />}
            />
          </AppTabContainer>
        </AppTabSwitcher>
      </Container>
    </AppSection>
  );
};

export default HistoryContent;
