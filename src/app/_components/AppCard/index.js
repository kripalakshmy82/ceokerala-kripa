import { string, node, shape, oneOf } from "prop-types";
import { Card } from "react-bootstrap";

import classNames from "classnames";

const AppCard = ({ className = "", children }) => {
  const appCardClassNames = classNames({
    "card-item rounded-theme shadow-sm flex-fill border-0 text-left": true,
    [className]: className !== "",
  });

  return <Card className={appCardClassNames}>{children}</Card>;
};

AppCard.propTypes = {
  className: string,
  children: node,
};

const InfoCard = ({
  title,
  description,
  cardTitleDir = "column",
  iconWidth = "none",
  iconUrl = "",
  img,
  link = "",
  className = "",
}) => {
  const titleClassName = classNames({
    "d-flex gap-5": cardTitleDir === "row",
  });

  const iconWrapperClassName = classNames({
    "mb-3": true,
    "d-block": cardTitleDir === "column",
  });

  const iconClassName = classNames({
    "w-100": iconWidth === "full",
  });

  return (
    <AppCard className={className}>
      {img && <Card.Img variant="top" src={img.url} alt={img.alt} />}
      <Card.Body>
        <Card.Title className={titleClassName}>
          {iconUrl && (
            <span className={iconWrapperClassName}>
              <img src={iconUrl} className={iconClassName} />
            </span>
          )}
          <h3 className="mb-3">{title}</h3>
        </Card.Title>
        <Card.Text>
          <p className="mb-0">{description}</p>
          {link && (
            <a href={link} className="stretched-link">
              Iam link component
            </a>
          )}
        </Card.Text>
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
  link: string,
  className: string,
};

export { AppCard, InfoCard };
