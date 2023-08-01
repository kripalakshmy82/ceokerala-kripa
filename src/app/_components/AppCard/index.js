import { string, node, bool, shape, oneOf } from "prop-types";
import { Card } from "react-bootstrap";

import classNames from "classnames";
import { AppBox } from "../Elements";
import AppButton from "../AppButton";

const AppCard = ({ isShadow = false, cardType = "default", children }) => {
  const appCardClassNames = classNames({
    "overflow-hidden rounded-theme flex-fill border-0 p-0 text-left bg-transparent app-card position-relative": true,
    "shadow-lg": isShadow,
    "card-item shadow-sm": cardType === "hover",
  });

  return <Card className={appCardClassNames}>{children}</Card>;
};

AppCard.propTypes = {
  className: string,
  cardType: oneOf(["hover", "default"]),
  isShadow: bool,
  children: node.isRequired,
};

const InfoCard = ({
  title,
  description,
  img,
  cardTitleDir = "column",
  iconWidth = "none",
  iconUrl = "",
  className = "",
  link = {},
  playIcon,
}) => {
  const titleClassName = classNames({
    "d-flex gap-4 align-items-center": cardTitleDir === "row",
  });

  const iconWrapperClassName = classNames({
    "mb-3": true,
    "d-block": cardTitleDir === "column",
  });

  const iconClassName = classNames({
    "w-100": iconWidth === "full",
  });

  return (
    <AppCard cardType="hover">
      {img && <Card.Img variant="top" src={img.url} alt={img.alt} />}
      {playIcon && (
        <span className="m-auto d-block position-absolute video-icon">
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            stroke="#5f4bdb"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="css-i6dzq1"
          >
            <polygon points="5 3 19 12 5 21 5 3"></polygon>
          </svg>
        </span>
      )}
      <Card.Body className={className}>
        <Card.Title className={titleClassName}>
          {iconUrl && (
            <span className={iconWrapperClassName}>
              <img src={iconUrl} className={iconClassName} />
            </span>
          )}
          <h4 className="mb-3">{title}</h4>
        </Card.Title>
        <Card.Text className="mb-2 d-flex">{description}</Card.Text>
        {link && <AppButton {...link} />}
      </Card.Body>
    </AppCard>
  );
};

InfoCard.propTypes = {
  title: string.isRequired,
  description: string.isRequired,
  cardTitleDir: oneOf(["column", "row"]),
  iconWidth: oneOf(["full", "none"]),
  img: shape({
    url: string,
    alt: string,
  }),
  iconUrl: string,
  link: shape({
    href: string,
    anchorTitle: string,
  }),
  className: string.isRequired,
  playIcon: bool,
};

const PromoCard = ({ className = "", img, type = "promo" }) => {
  const demoClassName = classNames({
    "bg-theme": true,
    "rounded-5": true,
    "d-flex justify-content-center align-items-center": true,
  });
  return (
    <AppCard className={className} cardType="default">
      <AppBox className={demoClassName}>
        {type === "promo" ? (
          img && <Card.Img variant="top" src={img.url} alt={img.alt} />
        ) : (
          <p>counter card</p>
        )}
      </AppBox>
    </AppCard>
  );
};

PromoCard.propTypes = {
  img: shape({
    url: string,
    alt: string,
  }),
  type: oneOf(["promo", "counter"]),
  bgColor: bool,
  className: string,
};

export default AppCard;
export { InfoCard, PromoCard };
