import { Button, Container, Navbar, Row } from "react-bootstrap";
import logoSpicy from "../../public/logoSpicy.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useLocation, useNavigate } from "react-router-dom";
const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <Navbar className="ps-3 top-nav">
      <div className="text-light main-title text-center w-100 main-title">
        {" "}
        Scaramucc
        <img
          src="https://www.pngplay.com/wp-content/uploads/10/Chilli-Background-PNG-Image.png"
          width="35"
          className="d-inline-block align-center"
          alt="Logo del Bar"
        />
        a<div className="fs-5 sub-title">bar-food-drink</div>
      </div>
    </Navbar>
  );
};
export default NavBar;
