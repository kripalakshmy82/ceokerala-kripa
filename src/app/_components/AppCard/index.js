import { oneOf, string, node } from "prop-types";
import classNames from "classnames";
import { Card } from "react-bootstrap";

const AppCard = ({
  variant = "default",
  heading,
  description,
  imgUrl,
  alt,
  children,
}) => {

  const appCardClassNames = classNames({
    "text-left": true,
    "card-item rounded-theme shadow-sm p-4 flex-fill": variant === "themeCard",
  });

  return (
    <Card className={appCardClassNames}>
      <span className="d-block mb-3">
        <img src={imgUrl} alt={alt} />
      </span>
      <h3>{heading}</h3>
      <p className="mb-0">{description}</p>
      {children}
    </Card>
  );
};

AppCard.propTypes = {
  alt: string,
  heading: string.isRequired,
  description: string.isRequired,
  imgUrl: string.isRequired,
  children: node,
  variant: oneOf(["default", "themeCard"]).isRequired,
};

export default AppCard;
