"use client";

import ReactMarkdown from "react-markdown";
import { string, node } from "prop-types";
import { Container, Row, Col } from "react-bootstrap";

import { AppSection } from "../Elements";
import AppBreadCrumb from "../BreadCrumb";

const DetailBanner = ({heading, link, currentTitle}) => {
  return (
    <AppSection id="detail-banner" className="section-block-md detail-banner background-bg">
      <Container>
        <Row>
          <Col lg={12} md={12} sm={12} xs={12} className="text-center">
            <h2 className="mb-2 banner-title">
              <ReactMarkdown
                children={heading}
                components={{
                  em: ({ node, ...props }) => <span {...props} />,
                }}
              />
            </h2>
          </Col>
          <Col lg={12} md={12} sm={12} xs={12}>
            <AppBreadCrumb href={link} currentTitle={currentTitle} />
          </Col>
        </Row>
      </Container>
    </AppSection>
  );
};
DetailBanner.propTypes = {
  heading: node.isRequired,
  link: string,
  currentTitle: string.isRequired
}
export default DetailBanner;
