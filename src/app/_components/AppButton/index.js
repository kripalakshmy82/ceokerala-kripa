import Link from "next/link";
import { oneOf,string } from "prop-types";

const AppButton = ({variant="default", color="black", href, title }) => {
    return (
        <Link href={href} variant={variant} color={color} className="theme-btn-component btn-theme border-theme">
            {title}
        </Link>
    )
};

AppButton.propTypes = {
    variant: oneOf(["default", "themeBtn"]).isRequired,
    color: oneOf(["black", "white"]),
    title: string.isRequired 

}

export default AppButton;