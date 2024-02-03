import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Categories from "./Categorie";

function NaviBar({ setBottomComponent, selectedNavItem, search, setSearch}) {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Apps Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link
              onClick={() => setBottomComponent("Applications")}
              className={selectedNavItem === "Applications" ? "active" : ""}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => setBottomComponent("Categories")}
              className={selectedNavItem === "Categories" ? "active" : ""}
            >
              Categories
            </Nav.Link>
            <Nav.Link
              onClick={() => setBottomComponent("ApplicationsList")}
              className={selectedNavItem === "ApplicationsList" ? "active" : ""}
            >
              Top
            </Nav.Link>
          </Nav>
          <div className="d-flex">
            <Form.Control
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NaviBar;



