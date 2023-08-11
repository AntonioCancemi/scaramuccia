import { Col, Row } from "react-bootstrap";
import CategoyButton from "../dynamic/CategoryButton";

const CategoryMenu = () => {
  return (
    <Col
      className="text-dark text-center
    "
    >
      <Row>
        <CategoyButton
          category={"DRINKS"}
          url={
            "https://www.sowinesofood.it/wp-content/uploads/2021/06/bibite-analcoliche-compressed.jpg"
          }
        />
      </Row>
      <Row>
        <CategoyButton
          category={"FOOD"}
          url={
            "https://www.comunicaffe.it/wp-content/uploads/2017/02/panini_pizza.png"
          }
        />
      </Row>
      <Row>
        <CategoyButton
          category={"SPECIAL"}
          url={
            "https://www.spiagge.it/magazine/wp-content/uploads/2023/07/spiagge-avola.png"
          }
        />
      </Row>
    </Col>
  );
};
export default CategoryMenu;
