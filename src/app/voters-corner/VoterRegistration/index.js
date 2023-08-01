"use client";

import { Container, Row, Col } from "react-bootstrap";
import { InfoCard, AppSection, AppText } from "@/app/_components";

const VoterRegistration = ({ data }) => {
  return (
    <AppSection id="Registration" className="section-v-corner section-block-md">
      <Container>
        <Row>
          <Col lg={12} className="mb-4">
            <AppText render={() => <h2>Registration</h2>} />
          </Col>
          {data.map(({ ...rest }, key) => (
            <Col lg={4} md={4} sm={12} xs={12} key={key}>
              <InfoCard
                className="py-5 px-4"
                cardTitleDir="row"
                themeCard
                {...rest}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </AppSection>
  );
};

export default VoterRegistration;
