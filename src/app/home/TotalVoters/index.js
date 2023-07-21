"use client";

import { Container, Card } from "react-bootstrap";
import AppCounter from "@/app/_components/AppCounter";

const TotalVoters = () => {
  return (
    <section className="total-voters section-block-sm">
      <Container>
        <Card className="counter-card card-item theme-card p-5">
          <div className="d-flex flex-row justify-content-center gap-5 align-items-center text-center">
            <div className="box">
              <h4 className="text-white mb-2">Total Voters</h4>
              <div id="counter_1">
                <AppCounter end={500} duration={200} />
              </div>
            </div>
            <div className="box">
              <h4 className="text-white mb-2">Total Voters</h4>
              <div id="counter_2">
                <AppCounter end={600} duration={100} />
              </div>
            </div>
          </div>
        </Card>
      </Container>
    </section>
  );
};

export default TotalVoters;
