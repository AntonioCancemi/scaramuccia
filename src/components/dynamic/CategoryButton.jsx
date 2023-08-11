import { Col } from "react-bootstrap";
import { AiFillStar } from "react-icons/ai";
const CategoyButton = ({ category, url }) => {
  const buttonStyle = {
    backgroundImage: `url('${url}')`,
  };
  return (
    <Col
      style={buttonStyle}
      className=" slide-in-blurred-bottom bg-dark categoy-button border rounded p-5 my-3 mx-2 fs-1 fw-bold"
    >
      <div className="overlay p-3">
        {category === "SPECIAL" ? (
          <span>
            <AiFillStar />
            {category}
            <AiFillStar />
          </span>
        ) : (
          category
        )}
      </div>
    </Col>
  );
};
export default CategoyButton;
