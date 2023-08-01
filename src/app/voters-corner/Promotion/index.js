"use client";

import { Container, Row, Col } from "react-bootstrap";
import { AppSection } from "@/app/_components";
import { PromoCard } from "@/app/_components/AppCard";

const Promotion = ({ data }) => {
  return (
    <AppSection id="promotion" className="section-v-corner section-block">
      <Container>
        <Row>
          <Col lg={12}>
            <PromoCard type="promo" {...data} />
          </Col>
        </Row>
      </Container>
    </AppSection>
  );
};

export default Promotion;
