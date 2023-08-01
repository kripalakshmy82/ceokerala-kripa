"use client";

import { Container, Row, Col } from "react-bootstrap";
import { AppSection, AppBox, AppText, InfoCard } from "@/app/_components";
import AppTabSwitcher, {
  AppTabContainer,
  AppTabNavigation,
  AppTabContent,
} from "@/app/_components/AppTab";

import classNames from "classnames";

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

const ElectionCategoryList = ({ data }) => {
  return (
    <Row>
      {data.map((items, key) => (
        <Col lg={3} md={4} xs={12} key={key}>
          <InfoCard className="py-5 px-4" cardTitleDir="column" {...items} />
        </Col>
      ))}
    </Row>
  );
};

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

const HistoryCategory = ({ data }) => {
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
    <AppSection
      id="election-category"
      className="pre-election section-block-md"
    >
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
                  data={data}
                />
              )}
            />
          </AppTabContainer>
        </AppTabSwitcher>
      </Container>
    </AppSection>
  );
};

export default HistoryCategory;
