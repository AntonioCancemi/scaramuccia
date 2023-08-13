import { Col, Row } from "react-bootstrap";

const Product = ({ p }) => {
  const ingredienti = p.ingredienti.map((i) => i + ",");
  return (
    <Row className="bg-light justify-content-between mb-2 ">
      <Col>
        <div>
          <div className="title-product fw-bold fs-3">{p.nome}</div>
          <div>{p.ingredienti.map((i) => i + ",")}</div>
        </div>
      </Col>
      <Col xs={"auto"} className="text-end me-3 align-content-center d-flex">
        {p.prezzo}€
      </Col>
    </Row>
  );
};
export default Product;
