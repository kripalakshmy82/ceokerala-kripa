"use client";
import { useState } from "react";
import { Container, Tab, Nav } from "react-bootstrap";
import { galleryData } from "@/app/data";

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

const GalleryCard = ({ imgUrl, alt, href, heading, description, type }) => {
  return (
    <div className="card card-item theme-card overflow-hidden border-0 shadow-sm position-relative">
      <img src={imgUrl} className="card-img-top" alt={alt} />
      {type === "videos" && <span className="m-auto d-block position-absolute video-icon"><svg viewBox="0 0 24 24" width="24" height="24" stroke="#5f4bdb" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg></span>}
      <div className="card-body theme-gap">
        <h5 className="card-title">
          <a
            href={href}
            className="stretched-link text-decoration-none text-dark"
          >
            {heading}
          </a>
        </h5>
        <p className="card-text mb-0">{description}</p>
      </div>
    </div>
  );
};

const Gallery = () => {
  const [activeTab, setActiveTab] = useState("images");

  return (
    <section className="gallery mb-5">
      <Container>
        <Tab.Container
          id="gallery-tabs"
          defaultActiveKey={activeTab}
          onSelect={(eventKey) => setActiveTab(eventKey)}
          unmountOnExit
        >
          <div className="news-title-section d-flex flex-lg-row flex-md-row flex-sm-column flex-column justify-content-between align-items-center mb-lg-5 mb-md-5 mb-sm-4 mb-3">
            <div className="flex-block">
              <div className="flex-item">
                <h2 className="site-heading">Gallery</h2>
              </div>
            </div>
            <Nav
              variant="pills"
              className="flex-block flex-block-links gap-2 d-flex"
            >
              {tabsNavigation.map(({ title, key }) => (
                <Nav.Item key={key} className="position-relative">
                  <Nav.Link eventKey={key} className="px-5">
                    {title}
                  </Nav.Link>
                </Nav.Item>
              ))}
            </Nav>
          </div>
          <Tab.Content>
            {tabsNavigation.map(({ key }, idx) => (
              <Tab.Pane eventKey={key} key={idx}>
                <div className="d-flex gap-4 flex-lg-row flex-md-row flex-sm-column flex-column justify-content-between align-items-center">
                  {galleryData.map((item, key) => (
                    <GalleryCard type={activeTab} key={key} {...item} />
                  ))}
                </div>
              </Tab.Pane>
            ))}
          </Tab.Content>
        </Tab.Container>
        <div className="d-flex justify-content-center align-items-center mt-5">
          {/*  Change the url based on the active tab key */}
          <button className="theme-btn-component btn-theme btn-theme-fill border-0 shadow">
            See more {activeTab === "images" ? "Images" : "Videos"}
          </button>
        </div>
      </Container>
    </section>
  );
};

export default Gallery;
