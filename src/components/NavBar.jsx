import { Row } from "react-bootstrap";

const NavBar = () => {
  return (
    <Row>
      <div className="top-row  text-light main-title text-center main-title">
        Scaramucc
        <img
          src="https://www.pngplay.com/wp-content/uploads/10/Chilli-Background-PNG-Image.png"
          width="35"
          className="d-inline-block align-center"
          alt="Logo del Bar"
        />
        a<div className="fs-5 sub-title">bar-food-drink</div>
      </div>
    </Row>
  );
};
export default NavBar;
