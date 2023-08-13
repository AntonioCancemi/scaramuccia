import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";
import { useLocation, useNavigate } from "react-router-dom";
import Product from "./Product";

const ProductList = ({ category }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [section, setSection] = useState(0);
  const drink = [
    {
      tipo: "alcolico",
      nome: "Mojito",
      prezzo: 7.5,
      ingredienti: ["Rum", "Menta", "Lime", "Zucchero", "Soda"],
    },
    {
      tipo: "alcolico",
      nome: "Negroni",
      prezzo: 8.0,
      ingredienti: ["Gin", "Vermouth rosso", "Campari"],
    },
    // ... altri elementi

    {
      tipo: "non alcolico",
      nome: "Limonata",
      prezzo: 3.5,
      ingredienti: ["Limone", "Acqua", "Zucchero"],
    },
    {
      nome: "Analcolico Spritz",
      prezzo: 4.0,
      ingredienti: ["Succo d'arancia", "Succo di pompelmo", "Soda"],
    },
    // ... altri elementi
  ];

  const food = [
    {
      tipo: "salato",
      nome: "Torta al Cioccolato",
      prezzo: 5.5,
      ingredienti: ["Cioccolato", "Uova", "Farina", "Burro"],
    },
    {
      tipo: "salato",

      nome: "Crepe alla Nutella",
      prezzo: 4.5,
      ingredienti: ["Crepe", "Nutella", "Banana"],
    },
    // ... altri elementi

    {
      tipo: "dolce",

      nome: "Hamburger",
      prezzo: 8.0,
      ingredienti: [
        "Brioche",
        "Carne di manzo",
        "Formaggio",
        "Lattuga",
        "Pomodoro",
      ],
    },
    {
      tipo: "dolce",

      nome: "Patatine Fritte",
      prezzo: 3.0,
      ingredienti: ["Patate", "Olio", "Sale"],
    },
    // ... altri elementi
  ];

  const special = [
    // {
    //   nome: "Analcolico Spritz",
    //   prezzo: 4.0,
    //   ingredienti: ["Succo d'arancia", "Succo di pompelmo", "Soda"],
    // },
  ];
  var currentProducts = [];

  useEffect(() => {
    if (location.pathname === "/drink") {
      setSection(1);
    } else if (location.pathname === "/food") {
      setSection(2);
    } else {
      setSection(3);
    }
  });
  return (
    <Row>
      <Col xs={12} className="nav-category ">
        <div onClick={() => navigate("/drink")}>DRINK</div>
        <div onClick={() => navigate("/food")}>FOOD</div>
        <div onClick={() => navigate("/special")}>SPECIAL</div>
      </Col>

      <Col className=" ">
        {section === 1 ? drink.map((p) => <Product p={p} />) : <></>}
        {section === 2 ? food.map((p) => <Product p={p} />) : <></>}
        {section === 3 ? special.map((p) => <Product p={p} />) : <></>}
      </Col>
    </Row>
  );
};
export default ProductList;
