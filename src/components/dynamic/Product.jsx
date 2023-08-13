import { Col, Row } from "react-bootstrap";

const Product = ({ p }) => {
  const ingredienti = p.ingredienti.map((i) => i + " ");
  return (
    <Row className="bg-light justify-content-between mb-2 border-top border-bottom swing-in-right-bck mx-1  ">
      <Col
        xs={12}
        className="text-start me-3 align-content-center d-flex bg-dark text-light rounded-top"
      >
        <Col className="title-product fw-bold fs-3"> {p.nome}</Col>
        <Col xs={2} className="fs-4">
          €{p.prezzo}
        </Col>
      </Col>
      <Col>
        <div>
          <div>{p.ingredienti.map((i) => i + ", ")}</div>
        </div>
      </Col>
    </Row>
  );
};
export default Product;
