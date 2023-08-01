import { string, node, bool, shape, oneOf } from "prop-types";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

import ReactMarkdown from "react-markdown";
import classNames from "classnames";
import { AppBox } from "../Elements";
import AppButton from "../AppButton";

const AppCard = ({
  isShadow = false,
  cardType = "default",
  themeCard = false,
  children,
}) => {
  const appCardClassNames = classNames({
    "theme-card overflow-hidden": themeCard,
    "rounded-theme flex-fill border-0 p-0 text-left bg-transparent app-card position-relative": true,
    "shadow-lg": isShadow,
    "card-item shadow-sm": cardType === "hover",
  });

  return <Card className={appCardClassNames}>{children}</Card>;
};

AppCard.propTypes = {
  className: string,
  cardType: oneOf(["hover", "default"]),
  themeCard: bool,
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
  playIcon = false,
  themeCard = false,
  hoverCard = true,
}) => {
  const titleClassName = classNames({
    "d-flex gap-4 align-items-center": cardTitleDir === "row",
    "justify-content-between": link?.type === "external",
  });

  const iconWrapperClassName = classNames({
    "mb-3": true,
    "d-block": cardTitleDir === "column",
  });

  const iconClassName = classNames({
    "w-100": iconWidth === "full",
  });

  return (
    <AppCard cardType={hoverCard ? "hover" : "default"} themeCard={themeCard}>
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
          <ReactMarkdown
            children={title}
            components={{
              p: ({ node, ...props }) => <h4 className="mb-3" {...props} />,
            }}
          />
          {link?.type === "external" && (
            <a
              href={link.href}
              className="stretched-link external-link"
              target="_blank"
              title={link.anchorTitle}
            >
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          )}
        </Card.Title>
        {description && (
          <Card.Text className="mb-2 d-flex">{description}</Card.Text>
        )}
        {link && link?.type !== "external" && (
          <AppButton {...link} stretchedLink />
        )}
      </Card.Body>
    </AppCard>
  );
};

InfoCard.propTypes = {
  title: string.isRequired,
  description: string,
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
    type: string,
  }),
  className: string.isRequired,
  playIcon: bool,
  themeCard: bool,
  hoverCard: bool,
};

const PromoCard = ({ img }) => {
  const promoCxWrapper = classNames({
    "bg-theme": true,
    "rounded-5": true,
    "d-flex justify-content-center align-items-center": true,
  });
  return (
    <AppCard cardType="default">
      <AppBox className={promoCxWrapper}>
        <Card.Img variant="top" src={img.url} alt={img.alt} />
      </AppBox>
    </AppCard>
  );
};

PromoCard.propTypes = {
  img: shape({
    url: string,
    alt: string,
  }).isRequired,
};

export default AppCard;
export { InfoCard, PromoCard };
