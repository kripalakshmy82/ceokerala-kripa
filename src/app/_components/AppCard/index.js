import { string, node } from "prop-types";
import classNames from "classnames";
import { Card } from "react-bootstrap";

const AppCard = ({
  className = "",
  children,
}) => {
  const appCardClassNames = classNames({
    "card-item rounded-theme shadow-sm flex-fill border-0 text-left": true,
    [className]: className !== ""
  });

  return (
    <Card className={appCardClassNames}>
      {children}
    </Card>
  );
};

AppCard.propTypes = {
  className: string,
  children: node,
};

export default AppCard;
