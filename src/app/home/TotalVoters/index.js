"use client";

import { Container, Card } from "react-bootstrap";
import { useCountUp } from "use-count-up";

import { AppBox, AppSection, AppText } from "@/app/_components";

const VotersCounter = ({ no, duration }) => {
  const { value } = useCountUp({
    isCounting: true,
    end: no,
    duration: duration,
    easing: "linear",
  });

  return <p className="mb-0 counter text-white">{value}</p>;
};

const TotalVoters = ({ data }) => {
  const { newVoters, totalVoters } = data;

  return (
    <AppSection id="voters-count" className="total-voters section-block-sm">
      <Container>
        <Card className="counter-card card-item theme-card p-5">
          <AppBox className="d-flex flex-row justify-content-center gap-5 align-items-center text-center">
            <AppBox className="box">
              <AppText
                render={() => <h4 className="text-white mb-2">Total Voters</h4>}
              />
              <VotersCounter no={totalVoters} duration={80} />
            </AppBox>
            <AppBox className="box">
              <AppText
                render={() => <h4 className="text-white mb-2">New Voters</h4>}
              />
              <VotersCounter end={newVoters} duration={60} />
            </AppBox>
          </AppBox>
        </Card>
      </Container>
    </AppSection>
  );
};

export default TotalVoters;
