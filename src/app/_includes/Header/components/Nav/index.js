import Link from "next/link";
import { Container, Nav, Navbar } from "react-bootstrap";

const AppNav = ({ children }) => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary py-3">
      <Container>
        <Navbar.Brand as={Link} href="/" className="navbar-brand">
          <img src="./assets/logo.png" alt="logo" className="w-100" />
        </Navbar.Brand>
        <Nav className="ms-auto gap-3">{children}</Nav>
      </Container>
    </Navbar>
  );
};

export default AppNav;
