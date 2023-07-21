"use client"

import { Container } from "react-bootstrap";

import AppSlider from "@/app/_components/AppSlider";
import AppTicker from '@/app/home/NewsTicker';

const SpotLight = () => {
  return (
    <section className="spotlight section-block-sm bg-light">
      <Container fluid="sm">
        <span className="object-1 position-absolute"> <img src="./assets/" /> </span>
        <span className="object-2 position-absolute"> </span>
        <span className="object-3 position-absolute"> </span>
        <AppSlider />
      </Container>
      <AppTicker />
    </section>
  );
};

export default SpotLight;
