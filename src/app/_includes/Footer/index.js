"use client";

import { Container, Row, Col } from "react-bootstrap";
import { socialLinks, quickLinks, importantLinks, helpLinks } from "@/app/data";

const footDesc = {
  address: (
    <>
      Election department
      <br />
      Kerala Legislative Complex
      <br />
      Vikas Bhavan P.O
      <br />
      Thiruvananthapuram: 695 033
    </>
  ),
  number: (
    <>
      Toll Free Number:
      <br />
      1800-425-1965
      <br />
      0471 2300121, 0471 2307168
    </>
  ),
  description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta doloremque quaerat iste consequuntur maiores, optio, provident ut delectus voluptates aliquid nihil similique eveniet. Nam qui labore excepturi illo aspernatur repudiandae?`,
};

const Footer = () => {
  return (
    <footer className="bg-dark pt-5">
      <Container>
        <Row>
          <div className="d-flex flex-row justify-content-between align-items-center mb-5">
            <Col>
              <span className="foot-logo d-block">
                <img src="./assets/logo-white.png" alt="" className="w-100" />
              </span>
            </Col>
            <Col className="social-icon d-flex gap-lg-3 gap-md-3 gap-sm-2 gap-1 justify-content-end">
              {socialLinks.map(({ alt, imgUrl }, key) => (
                <a href="#" className="icon" target="_blank" key={key}>
                  <i>
                    <img src={imgUrl} alt={alt} />
                  </i>
                </a>
              ))}
            </Col>
          </div>
        </Row>
        <Row className="flex-lg-row flex-md-row flex-sm-column flex-column gap-lg-0 gap-md-0 gap-sm-5 gap-5">
          <Col>
            <p className="text-white mb-0">{footDesc.description}</p>
          </Col>
          <Col>
            <h4 className="text-white mb-3">Quick links</h4>
            <ul className="p-0 m-0 foot-links list-unstyled">
              {quickLinks.map(({ href, title }, key) => (
                <li key={key}>
                  <a href={href} className="text-decoration-none">
                    {title}
                  </a>
                </li>
              ))}
            </ul>
          </Col>

          <Col>
            <h4 className="text-white mb-3">Important links</h4>
            <ul className="p-0 m-0 foot-links list-unstyled">
              {importantLinks.map(({ href, title }, key) => (
                <li key={key}>
                  <a href={href} className="text-decoration-none">
                    {title}
                  </a>
                </li>
              ))}
            </ul>
          </Col>

          <Col>
            <h4 className="text-white mb-3">May I help you ?</h4>
            <ul className="p-0 m-0 foot-links list-unstyled">
              {helpLinks.map(({ href, title }, key) => (
                <li key={key}>
                  <a href={href} className="text-decoration-none">
                    {title}
                  </a>
                </li>
              ))}
            </ul>
          </Col>

          <Col>
            <h4 className="text-white mb-3">Get in Touch with Us</h4>
            <address className="text-white d-flex gap-2">
              <i>
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  stroke="white"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="css-i6dzq1"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </i>
              {footDesc.address}
            </address>
            <div className="mb-0 text-white d-flex gap-2">
              <i>
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  stroke="white"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="css-i6dzq1"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </i>
              {footDesc.number}
            </div>
          </Col>
        </Row>
      </Container>
      <div className="foot-sub py-4 mt-5">
        <Container>
          <p className="mb-0 text-white text-center">
            Developed &amp; Maintained by
            <a href="#" target="_blank" className="text-warning">
              Invis
            </a>
          </p>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
