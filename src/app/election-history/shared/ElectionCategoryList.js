"use client";
import { Row, Col } from "react-bootstrap";
import classNames from "classnames";
import { InfoCard } from "@/app/_components";

import { electionCategoryData } from "@/app/data";

const ElectionCategoryList = () => {
  const colCx = classNames({
    "col-lg-3 col-md-4 col-12": true,
  });
  return (
    <Row>
      {electionCategoryData.map((items, key) => (
        <Col className={colCx} key={key}>
          <InfoCard className="py-5 px-4" cardTitleDir="column" {...items} />
        </Col>
      ))}
    </Row>
  );
};

export default ElectionCategoryList;
