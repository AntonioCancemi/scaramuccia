import { Col, Row } from "react-bootstrap";
import "../Style/menu.css";
import menu from "../fakedata";
import { useState } from "react";
import MenuCategories from "../components/MenuCategories";
import CategoryProductList from "../components/CategoryProductList";

const MenuPage = () => {
  const categorie = menu.categorie.map((categoria) => categoria.nome);
  const [selectedCategory, setSelectedCategory] = useState(categorie[0]);
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    // Qui puoi aggiungere la logica per filtrare i prodotti in base alla categoria selezionata
  };
  console.log(menu);
  return (
    <>
      <Row>
        <Col xs={12} className="bg-light box-categories">
          <div>
            <MenuCategories
              categories={categorie}
              onSelectCategory={handleCategorySelect}
            />
          </div>
        </Col>
      </Row>
      <CategoryProductList
        data={menu.categorie.filter(
          (categoria) => categoria.nome === selectedCategory
        )}
      />
    </>
  );
};

export default MenuPage;
