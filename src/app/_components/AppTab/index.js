import { useState, useContext, createContext } from "react";
import { arrayOf, node, oneOf, shape, string, func } from "prop-types";
import { Tab, Nav } from "react-bootstrap";

const TabContext = createContext({});

function AppTabContainer({ children, id }) {
  const [activeTabID, setActiveTabID] = useContext(TabContext);

  return (
    <Tab.Container
      onSelect={(eventKey) => setActiveTabID(eventKey)}
      id={id}
      defaultActiveKey={activeTabID}
      unmountOnExit
    >
      {children}
    </Tab.Container>
  );
}

AppTabContainer.propTypes = {
  children: node.isRequired,
  id: string.isRequired,
};

function AppTabNavigation({ data, variant = "tabs", className }) {
  return (
    <Nav variant={variant} className={className}>
      {data.map(({ title, key }) => (
        <Nav.Item key={key} className="position-relative">
          <Nav.Link eventKey={key}>{title}</Nav.Link>
        </Nav.Item>
      ))}
    </Nav>
  );
}

AppTabNavigation.propTypes = {
  data: arrayOf(
    shape({
      title: string.isRequired,
      key: string.isRequired,
    })
  ),
  variant: oneOf(["tabs", "underline", "pills"]),
  className: string.isRequired,
};

function AppTabContent({ render }) {
  const [activeTabID] = useContext(TabContext);

  return (
    <Tab.Content>
      <Tab.Pane eventKey={activeTabID}>{render(activeTabID)}</Tab.Pane>
    </Tab.Content>
  );
}

AppTabContent.propTypes = {
  render: func.isRequired,
};

function AppTabSwitcher({ activeKey, children }) {
  const [activeTabID, setActiveTabID] = useState(activeKey);
  return (
    <TabContext.Provider value={[activeTabID, setActiveTabID]}>
      {children}
    </TabContext.Provider>
  );
}

AppTabSwitcher.propTypes = {
  activeKey: string.isRequired,
  children: node.isRequired,
};

export default AppTabSwitcher;
export { AppTabContainer, AppTabNavigation, AppTabContent };
