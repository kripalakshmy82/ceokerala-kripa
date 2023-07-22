"use client";

import { Container, Tab, Nav } from "react-bootstrap";
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
        <Tab.Container
          id="news-tabs"
          defaultActiveKey="latest-news"
          unmountOnExit
        >
          <div className="news-title-section d-flex flex-lg-row flex-md-row flex-sm-column flex-column justify-content-between align-items-center mb-lg-5 mb-md-5 mb-sm-4 mb-3">
            <div className="flex-block">
              <div className="flex-item">
                <h2 className="site-heading">News and Updates</h2>
              </div>
            </div>
            <Nav variant="underline" className="flex-block flex-block-links d-flex">
              {tabsNavigation.map(({ title, key }) => (
                <Nav.Item key={key} className="position-relative">
                  <Nav.Link eventKey={key}>{title}</Nav.Link>
                </Nav.Item>
              ))}
            </Nav>
          </div>
          <Tab.Content>
            {tabsNavigation.map(({ key }, idx) => (
              <Tab.Pane eventKey={key} key={idx}>
                {newsUpdate.map(({ heading, description, href }, key) => (
                  <div
                    key={key}
                    className="news-item-section d-flex flex-lg-row flex-md-row flex-sm-column flex-column justify-content-between align-items-center shadow rounded-theme p-5 mb-3"
                  >
                    <div className="flex-news-item">
                      <h4>{heading}</h4>
                      <small>{description}</small>
                    </div>
                    <div className="flex-news-btn">
                      <a
                        href={href}
                        className="theme-btn-component btn-theme border-theme"
                      >
                        Read more
                      </a>
                    </div>
                  </div>
                ))}
              </Tab.Pane>
            ))}
          </Tab.Content>
        </Tab.Container>

        <div className="pagination-wrap">
          <ul className="pagination justify-content-center m-0">
            <li className="page-item disabled">
              <a className="page-link border-0">
                <i>
                  <img src="./icons/chevron-left.svg" alt="" />
                </i>
                Previous
              </a>
            </li>
            <li className="page-item">
              <a className="page-link border-0 text-center" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a
                className="page-link page-link-active border-0 text-center text-white"
                href="#"
              >
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link border-0 text-center" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link border-0" href="#">
                Next{" "}
                <i>
                  <img src="./icons/chevron-right.svg" alt="" />
                </i>
              </a>
            </li>
          </ul>
        </div>
      </Container>
      
      
    </section>

    
  );
};

export default NewsUpdate;
