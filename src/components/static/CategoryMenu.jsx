import { Col, Row } from "react-bootstrap";
import CategoyButton from "../dynamic/CategoryButton";

const CategoryMenu = () => {
  const props = [
    {
      category: "DRINK",
      url: "https://www.sowinesofood.it/wp-content/uploads/2021/06/bibite-analcoliche-compressed.jpg",
    },
    {
      category: "FOOD",
      url: "https://www.comunicaffe.it/wp-content/uploads/2017/02/panini_pizza.png",
    },
    {
      category: "SPECIAL",
      url: "https://www.spiagge.it/magazine/wp-content/uploads/2023/07/spiagge-avola.png",
    },
  ];

  return (
    <Col
      className="text-dark text-center
    "
    >
      {props.map((prop) => (
        <>
          <Row>
            <CategoyButton category={prop.category} url={prop.url} />
          </Row>
        </>
      ))}
    </Col>
  );
};
export default CategoryMenu;
