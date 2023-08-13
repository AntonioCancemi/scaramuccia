import { Row } from "react-bootstrap";
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";
import { useLocation, useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const style = "text-light border footer-icon  rounded-pill px-2 pt-2";
  const styleOnLocation =
    "bg-light text-dark footer-icon  rounded-pill px-2 pt-2";
  return (
    <Row className=" ">
      <footer className="bg-dark">
        <div className="d-flex justify-content-center   ">
          <div
            onClick={() => navigate("/")}
            className={location.pathname === "/" ? styleOnLocation : style}
          >
            <div>
              {location.pathname === "/" ? (
                <BiSolidDownArrow />
              ) : (
                <BiSolidUpArrow />
              )}
              <p>Menu</p>
            </div>
          </div>
        </div>
      </footer>
    </Row>
  );
};
export default Footer;
