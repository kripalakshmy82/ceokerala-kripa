import Link from "next/link";
import classNames from "classnames";
import { oneOf, string, bool } from "prop-types";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AppButton = ({
  variant = "default",
  color = "black",
  href,
  title,
  anchorTitle,
  stretchedLink = false,
}) => {
  const appLinkcx = classNames({
    "text-center d-block": true,
    "stretched-link": stretchedLink,
    "applink-btn": variant === "default",
    "theme-btn-component": ["themeBtn", "filledBtn"].some((v) => v === variant),
    "btn-theme-fill border-0 shadow": variant === "filledBtn",
    "border-theme": variant === "themeBtn",
    "color-black": color === "black",
    "color-white": color === "white",
  });

  return (
    <Link href={href} className={appLinkcx} title={anchorTitle}>
      {variant === "default" ? (
        <span className="d-block">
          <FontAwesomeIcon icon={faArrowRightLong} />
        </span>
      ) : (
        title
      )}
    </Link>
  );
};

AppButton.propTypes = {
  variant: oneOf(["default", "themeBtn", "filledBtn"]),
  color: oneOf(["black", "white"]),
  href: string.isRequired,
  anchorTitle: string.isRequired,
  title: string,
  stretchedLink: bool,
};

export default AppButton;
