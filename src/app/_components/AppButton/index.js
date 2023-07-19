import Link from "next/link";
import classNames from "classnames";
import { oneOf, string } from "prop-types";

const AppButton = ({ variant = "default", color = "black", href, title }) => {
  const appBtnClassNames = classNames({
    "text-center": true,
    "theme-btn-component border-theme": variant === "themeBtn",
    "color-black": color === "black",
    "color-white": color === "white",
  });

  return (
    <Link href={href} className={appBtnClassNames}>
      {title}
    </Link>
  );
};

AppButton.propTypes = {
  variant: oneOf(["default", "themeBtn"]).isRequired,
  color: oneOf(["black", "white"]),
  href: string.isRequired,
  title: string.isRequired,
};

export default AppButton;
