"use client";

import { Card } from "react-bootstrap";

import { AppSection } from "../Elements";

const PromotionCard = ({ children }) => {
  return (
    <AppSection id="promotion-card" className="promotion-card section-block-sm">
        <Card className="counter-card card-item theme-card p-0">
          {children}
        </Card>
    </AppSection>
  );
};

export default PromotionCard;
