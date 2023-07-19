"use client";
import { Container, Row, Col } from "react-bootstrap";
import styles from "@/app/page.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Container>
        <Row>
          <Col className="col-12">
            <p className="text-center mb-0 text-white">
              Electoral Officer All Rights Reserved - 2023
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
