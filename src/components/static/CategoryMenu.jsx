import { Col, Container, Row } from "react-bootstrap";
import ProductList from "../dynamic/ProductList";
import { useNavigate } from "react-router-dom";
const CategoryMenu = () => {
  const navigate = useNavigate();
  const props = [
    {
      category: "drink",
    },
    {
      category: "food",
    },
    {
      category: "special",
    },
  ];

  return (
    <>
      <Col xs={12} className="text-center">
        <h1 className="title-category">Categorie</h1>
      </Col>
      <Col
        xs={12}
        className="text-dark text-center container-category  justify-content-between
      "
      >
        {props.map((prop) => (
          <Row
            key={prop.category}
            className="box-category  align-content-center"
          >
            <div
              onClick={() => navigate(`/${prop.category}`)}
              className="title-category overlay-dark rounded-pill b mx-auto"
            >
              <div>{prop.category.toUpperCase()}</div>
            </div>
          </Row>
        ))}
        {/* <Row className="box-category border">
        <div>FOOD</div>
      </Row>
      <Row className="box-category border">
        <div>SPECIAL</div>
      </Row> */}
      </Col>
    </>
  );
};
export default CategoryMenu;
