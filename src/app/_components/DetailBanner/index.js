"use client";
import { Container, Row, Col } from "react-bootstrap";
import AppBreadCrumb from "../BreadCrumb";

// props : - heading, href, currectTitle
const DetailBanner = () => {
  return (
    <section className="section-block-md detail-banner bg-body-tertiary">
      <Container>
        <Row>
          <Col lg={12} md={12} sm={12} xs={12} className="text-center">
            <h2 className="mb-2 banner-title">Voters<span>Corner</span></h2>
          </Col>
          <Col lg={12} md={12} sm={12} xs={12}>
            <AppBreadCrumb href="#" currentTitle="voters-corner" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default DetailBanner;
