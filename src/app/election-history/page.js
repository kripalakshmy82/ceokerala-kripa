"use client"

import classNames from "classnames";
import { Container } from "react-bootstrap";
import { AppBox, AppSection } from "@/app/_components";
import AppTabSwitcher, {
  AppTabContainer,
  AppTabNavigation,
  AppTabContent,
} from "@/app/_components/AppTab";

import DetailBanner from "../_components/DetailBanner";
import { eHistoryBnrData } from "../data";
import HistoryList from "./shared/HistoryList";

// news tab navigation
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
  {
    key: "by-election-results-lac",
    title: "By Election Results LAC",
  },
  {
    key: "by-election-results-hpc",
    title: "By Election Results HPC",
  },
];

function ElectionHistory() {
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
  
  return (
    <>
      <DetailBanner
        heading={eHistoryBnrData.heading}
        link={eHistoryBnrData.link}
        currentTitle={eHistoryBnrData.currentTitle}
      />

      <AppSection id="history" className="section-block-md election-history">
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
              <AppTabContent
                render={(activeTabID) => <HistoryList activeKey={activeTabID} />}
              />
            </AppTabContainer>
          </AppTabSwitcher>
        </Container>
      </AppSection>
    </>
  );
}

export default ElectionHistory;
