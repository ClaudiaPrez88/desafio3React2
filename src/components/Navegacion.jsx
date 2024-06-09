import { NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "/logo.png";


const Navegacion = () => {
  const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined);

  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand><NavLink to="/"><img src={logo} alt="Logo" className="logo"/></NavLink></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <NavLink className={setActiveClass} to="/"> {" "} Inicio{" "}</NavLink>
          <NavLink className={setActiveClass} to="/pokemones" > {" "}Pokemones{" "}</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
};
export default Navegacion;
