import { Row } from "react-bootstrap";
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";
import { useLocation, useNavigate } from "react-router-dom";
const Footer = () => {
  return (
    <Row className="bottom-row pt-2 ">
      <footer className="d-flex text-center justify-content-around">
        <div>About</div>
        <div>Menu</div>
        <div>Maps</div>
      </footer>
    </Row>
  );
};
export default Footer;
