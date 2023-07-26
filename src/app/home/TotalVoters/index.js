"use client";

import { Container, Card } from "react-bootstrap";
import AppCounter from "@/app/_components/AppCounter";
import { AppBox, AppSection, AppText } from "@/app/_components";


const TotalVoters = () => {
  return (
    <AppSection id="voters-count" className="total-voters section-block-sm">
      <Container>
        <Card className="counter-card card-item theme-card p-5">
          <AppBox className="d-flex flex-row justify-content-center gap-5 align-items-center text-center">
            <AppBox className="box">
              <AppText
                render={() => <h4 className="text-white mb-2">Total Voters</h4>}
              ></AppText>
              <AppCounter end={500} duration={80} />
              
            </AppBox>
            <AppBox className="box">
              <AppText
                render={() => <h4 className="text-white mb-2">New Voters</h4>}
              ></AppText>
              <AppCounter end={600} duration={40} />
              
            </AppBox>
          </AppBox>
        </Card>
      </Container>
    </AppSection>
  );
};

export default TotalVoters;
