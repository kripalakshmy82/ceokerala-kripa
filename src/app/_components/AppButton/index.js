import Link from "next/link";
import classNames from "classnames";
import { oneOf, string } from "prop-types";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AppButton = ({
  variant = "default",
  color = "black",
  href,
  title,
  anchorTitle,
}) => {
  const appBtnClassNames = classNames({
    "text-center d-block stretched-link": true,
    "applink-btn": variant === "default",
    "theme-btn-component border-theme": variant === "themeBtn",
    "color-black": color === "black",
    "color-white": color === "white",
  });

  return (
    <Link href={href} className={appBtnClassNames} title={anchorTitle}>
      {variant === "themeBtn" && title}
      {variant === "default" && (
        <span className="d-block">
          <FontAwesomeIcon icon={faArrowRightLong} />
        </span>
      )}
    </Link>
  );
};

AppButton.propTypes = {
  variant: oneOf(["default", "themeBtn"]),
  color: oneOf(["black", "white"]),
  title: string,
  href: string.isRequired,
  anchorTitle: string.isRequired,
};

export default AppButton;
