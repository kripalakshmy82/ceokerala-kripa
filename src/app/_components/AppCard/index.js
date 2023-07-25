import { string, node, bool, shape, oneOf } from "prop-types";
import { Card } from "react-bootstrap";

import classNames from "classnames";

const AppCard = ({
  className = "",
  isShadow = false,
  cardType = "default",
  children,
}) => {
  const appCardClassNames = classNames({
    "rounded-theme flex-fill border-0 p-0 text-left": true,
    "shadow-lg": isShadow,
    "card-item shadow-sm": cardType === "hover",
    [className]: className !== "",
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
  cardTitleDir = "column",
  iconWidth = "none",
  iconUrl = "",
  img,
  link = "",
  className = "",
}) => {
  const titleClassName = classNames({
    "d-flex gap-4": cardTitleDir === "row",
  });

  const iconWrapperClassName = classNames({
    "mb-3": true,
    "d-block": cardTitleDir === "column",
  });

  const iconClassName = classNames({
    "w-100": iconWidth === "full",
  });

  return (
    <AppCard className={className} cardType="hover">
      {img && <Card.Img variant="top" src={img.url} alt={img.alt} />}
      <Card.Body className="p-4">
        <Card.Title className={titleClassName}>
          {iconUrl && (
            <span className={iconWrapperClassName}>
              <img src={iconUrl} className={iconClassName} />
            </span>
          )}
          <h4 className="mb-3">{title}</h4>
        </Card.Title>
        <Card.Text className="mb-0">{description}</Card.Text>
      </Card.Body>
      {link && <a href={link} className="stretched-link"></a>}
    </AppCard>
  );
};

InfoCard.propTypes = {
  title: node,
  description: string,
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

export default AppCard;
export { InfoCard };
