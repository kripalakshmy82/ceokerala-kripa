"use client";

import { string, shape } from "prop-types";

import Link from "next/link";

import { Container, Row } from "react-bootstrap";
import { AppCard, AppBox, AppSection, AppText } from "@/app/_components";

function VoterCardItem({
  title,
  img: { url, alt },
  link: { href, anchorTitle },
}) {
  return (
    <AppBox className="flex-fill d-flex align-items-center justify-content-center voter-h-card-item text-center">
      <AppText
        render={() => (
          <>
            <i className="gif-img d-inline-flex">
              <img src={url} alt={alt} className="w-100" />
            </i>
          </>
        )}
      />
      <AppText
        render={() => (
          <h5 className="mb-0 title position-relative d-inline-block ps-2 pe-4">
            <Link href={href} title={anchorTitle}>
              {title}
              <i className="position-absolute">
                <img src="./icons/chevron-right.svg" alt="" />
              </i>
            </Link>
          </h5>
        )}
      />
    </AppBox>
  );
}

VoterCardItem.propTypes = {
  title: string.isRequired,
  img: shape({
    url: string.isRequired,
    alt: string.isRequired,
  }),
  link: shape({
    href: string.isRequired,
    anchorTitle: string.isRequired,
  }),
};

const VotersCard = ({ data }) => {
  return (
    <AppSection id="voters-card" className="voter-h-card-sec mt-4">
      <Container>
        <Row>
          <AppBox className="bg-white rounded-theme p-0">
            <AppCard isShadow>
              <AppBox className="py-5 d-flex flex-lg-row flex-md-row flex-sm-column flex-column justify-content-between align-items-center">
                {data.map((vCd, key) => (
                  <VoterCardItem {...vCd} key={key} />
                ))}
              </AppBox>
            </AppCard>
          </AppBox>
        </Row>
      </Container>
    </AppSection>
  );
};

export default VotersCard;
