import { Container, Navbar, Row } from "react-bootstrap";
import logoSpicy from "../../public/logoSpicy.png";
const NavBar = () => {
  return (
    <Navbar bg="dark" className="ps-3 ">
      <Navbar.Brand href="#">
        <img
          src="https://www.pngplay.com/wp-content/uploads/10/Chilli-Background-PNG-Image.png"
          width="30"
          className="d-inline-block align-top"
          alt="Logo del Bar"
        />
        <span className="text-light fs-3"> Scaramuccia</span>
      </Navbar.Brand>
    </Navbar>
   
  );
};
export default NavBar;
