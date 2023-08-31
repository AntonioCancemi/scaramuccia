import { Col, Row } from "react-bootstrap";
import "../Style/menu.css";
import menu from "../fakedata";
import { useState } from "react";
import MenuCategories from "../components/MenuCategories";
import CategoryProductList from "../components/CategoryProductList";

const MenuPage = () => {
  const categorie = menu.categorie.map((categoria) => categoria.nome);
  const [selectedCategory, setSelectedCategory] = useState(categorie[0]);
  // selezione categoria aggiornameto del componente
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };
  return (
    <>
      {/* selettore categoria */}
      <Row>
        <Col xs={12} className="bg-light box-categories">
          <MenuCategories
            categories={categorie}
            onSelectCategory={handleCategorySelect}
          />
        </Col>
      </Row>
      {/* lista prodotti */}
      <CategoryProductList
        data={menu.categorie.filter(
          (categoria) => categoria.nome === selectedCategory
        )}
      />
    </>
  );
};

export default MenuPage;
