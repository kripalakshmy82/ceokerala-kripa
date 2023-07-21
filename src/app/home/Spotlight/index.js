"use client"

import { Container } from "react-bootstrap";

import AppSlider from "@/app/_components/AppSlider";
import AppTicker from '@/app/home/NewsTicker';

const SpotLight = () => {
  return (
    <section className="spotlight section-block-sm bg-light">
      <Container fluid="xxl">
        <AppSlider />
      </Container>
      <AppTicker />
    </section>
  );
};

export default SpotLight;
