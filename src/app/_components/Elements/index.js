import { node, string, func } from "prop-types";

function AppBox({ children, className }) {
  return <div className={className}>{children}</div>;
}

AppBox.propTypes = {
  children: node.isRequired,
  className: string.isRequired,
};

function AppSection({ id, className, children }) {
  return (
    <section id={id} className={className}>
      {children}
    </section>
  );
}

AppSection.propTypes = {
  id: string.isRequired,
  className: string.isRequired,
  children: node.isRequired,
};

const AppText = ({ render }) => render();

AppText.propTypes = {
  render: func.isRequired,
};

export { AppBox, AppSection, AppText };
