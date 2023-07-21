"use client";
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
const GalleryCard = () => {
  return (
    <section className="gallery mb-5">
      <Container>
        <Tab.Container id="news-tabs" defaultActiveKey="images" unmountOnExit>
          <div className="news-title-section d-flex flex-lg-row flex-md-row flex-sm-column flex-column justify-content-between align-items-center mb-lg-4 mb-md-4 mb-sm-4 mb-3">
            <div className="flex-block">
              <div className="flex-item">
                <h2 className="site-heading">News and Updates</h2>
              </div>
            </div>
            <Nav variant="pills" className="flex-block flex-block-links gap-2 d-flex">
              {tabsNavigation.map(({ title, key }) => (
                <Nav.Item key={key} className="position-relative">
                  <Nav.Link eventKey={key} className="px-5">{title}</Nav.Link>
                </Nav.Item>
              ))}
            </Nav>
          </div>
          <Tab.Content>
            {tabsNavigation.map(({ key }, idx) => (
              <Tab.Pane eventKey={key} key={idx}>
                <div className="d-flex gap-4 flex-lg-row flex-md-row flex-sm-column flex-column justify-content-between align-items-center">
                  {galleryData.map(
                    ({ heading, description, imgUrl, alt, href }, key) => (
                      <div
                        key={key}
                        className="card card-item theme-card overflow-hidden border-0 shadow-sm"
                      >
                        <img src={imgUrl} className="card-img-top" alt={alt} />
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
                    )
                  )}
                </div>
              </Tab.Pane>
            ))}
          </Tab.Content>
        </Tab.Container>
        <div className="d-flex justify-content-center align-items-center mt-5">
          <button className="theme-btn-component btn-theme btn-theme-fill border-0 shadow">
            See more
          </button>
        </div>
      </Container>
    </section>
  );
};

export default GalleryCard;
