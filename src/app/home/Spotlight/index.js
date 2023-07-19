"use client"

import { Container } from "react-bootstrap";

import AppSlider from "@/app/_components/AppSlider";
import AppTicker from '@/app/home/NewsTicker';

const SpotLight = () => {
  return (
    <section className="spotlight section-block bg-light">
      <Container>
        <span className="object-1 position-absolute"> </span>
        <span className="object-2 position-absolute"> </span>
        <span className="object-3 position-absolute"> </span>
        <AppSlider />
      </Container>
      <AppTicker />
    </section>
  );
};

export default SpotLight;
