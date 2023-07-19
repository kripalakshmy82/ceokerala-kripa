"use client";

import { Container, Tabs, Tab } from "react-bootstrap";
import { newsUpdate } from "@/app/data";

const tabsNavigation = [
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

const NewsUpdate = () => {
  return (
    <section className="latest-news">
      <Container>
        <div className="news-title-section d-flex flex-lg-row flex-md-row flex-sm-column flex-column justify-content-between align-items-center mb-lg-4 mb-md-4 mb-sm-4 mb-3">
          <div className="flex-block">
            <div className="flex-item">
              <h2 className="site-heading">News and Updates</h2>
            </div>
          </div>

          <div className="flex-block flex-block-links d-flex gap-5">
            <Tabs className="mb-0" defaultActiveKey={[0]} variant="tabs">
              {tabsNavigation.map(({ title }, key) => (
                <Tab eventKey={key} title={title} className="position-relative">
                  {title}
                </Tab>
              ))}
            </Tabs>
          </div>
        </div>

        {newsUpdate.map(({ heading, description, href }, key) => (
          <div key={key} className="news-item-section d-flex flex-lg-row flex-md-row flex-sm-column flex-column justify-content-between align-items-center shadow rounded-theme p-5 mb-3">
            <div className="flex-news-item">
              <h4>{heading}</h4>
              <small>{description}</small>
            </div>
            <div className="flex-news-btn">
              <a href={href} className="theme-btn-component btn-theme border-theme">
                Read more
              </a>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
};

export default NewsUpdate;
