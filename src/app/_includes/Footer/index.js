"use client";

import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="col-12">
            <p className="text-center mb-0 text-white">
              Electoral Officer All Rights Reserved - 2023
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
