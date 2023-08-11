import { Col } from "react-bootstrap";

const CategoyButton = ({ category, url }) => {
  const buttonStyle = {
    backgroundImage: `url('${url}')`,
  };
  return (
    <Col
      style={buttonStyle}
      className="border-light border-3 slide-in-blurred-bottom bg-dark swing-in-right-fwd categoy-button border rounded p-5 my-3 mx-2 fs-1 fw-bold"
    >
      <div className="overlay p-3">{category}</div>
    </Col>
  );
};
export default CategoyButton;
