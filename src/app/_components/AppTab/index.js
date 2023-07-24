

// Children, id
// activeKey - string
// id - string
function AppTabContainer ({ children, activeKey, id }) {
    return (
        <p>Tab Container With Children</p>
    )
};

// props - navigation data 
// Proptype - Array of object with shape title,key
function AppTabNavigation ({ data }) {
    return (
       <p>Nav Tabs</p>
    );
};

// data : key, component
function AppTabContent ({ data }) {
    return (
        <p>Tab content Tab Pain</p>
    )
};