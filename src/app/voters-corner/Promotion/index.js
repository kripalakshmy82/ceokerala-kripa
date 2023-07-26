"use client";

import { Container, Row, Col } from "react-bootstrap";
import { AppSection } from "@/app/_components";
import { PromoCard } from "@/app/_components/AppCard";

import { promoCardData } from "@/app/data";

const Promotion = () => {
  return (
    <AppSection id="promotion" className="section-v-corner section-block">
      <Container>
        <Row>
          <Col lg={12}>
            <PromoCard type="counter" img={promoCardData.img} />
          </Col>
        </Row>
      </Container>
    </AppSection>
  );
};

export default Promotion;
