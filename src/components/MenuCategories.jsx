import React, { useState } from "react";
import "../Style/menu.css";
import { Col, Row } from "react-bootstrap";
import Slider from "react-slick";
const MenuCategories = ({ categories, onSelectCategory }) => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    onSelectCategory(category);
  };
  const slickSettings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: true,
    focusOnSelect: true,
  };

  return (
    <div className="menu-categories bg-light ">
      <Slider {...slickSettings}>
        {categories.map((category, index) => (
          <div
            key={index}
            className={`category-col text-center ${
              selectedCategory === category ? "selected" : ""
            }`}
            onClick={() => handleCategorySelect(category)}
          >
            {category.toUpperCase()}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MenuCategories;
