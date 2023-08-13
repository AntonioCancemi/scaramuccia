import { Row } from "react-bootstrap";
import { GiChiliPepper } from "react-icons/gi";
import { useLocation, useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const style = "text-light  footer-icon  rounded-pill px-2 pt-3";
  const styleOnLocation =
    "bg-light text-dark footer-icon  rounded-pill px-2 pt-3";
  return (
    <Row className=" ">
      <footer className="bg-dark">
        <div className="d-flex justify-content-between mx-4  ">
          <div
            onClick={() => navigate("/contact")}
            className={
              location.pathname === "/contact" ? styleOnLocation : style
            }
          >
            <p>Contattaci</p>
          </div>
          <div
            onClick={() => navigate("/")}
            className={location.pathname === "/" ? styleOnLocation : style}
          >
            <p>Menu</p>
          </div>
          <div
            onClick={() => navigate("/about")}
            className={location.pathname === "/about" ? styleOnLocation : style}
          >
            <p>Chi Siamo</p>
          </div>
        </div>
      </footer>
    </Row>
  );
};
export default Footer;
