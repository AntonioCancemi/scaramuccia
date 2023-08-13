import "./App.css";
import "./Style/animation.css";

import { Container, Row } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/static/NavBar";
import Footer from "./components/static/Footer";
import MainPage from "./pages/MainPage";
import ResumePage from "./pages/ResumePage";
import ProductList from "./components/dynamic/ProductList";
function App() {
  return (
    <Router>
      <Container className=" vh-100 overlay">
        <Row>
          <NavBar />
        </Row>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/resume" element={<ResumePage />}></Route>
          <Route
            path="/drink"
            element={<ProductList category={"drink"} />}
          ></Route>
          <Route
            path="/food"
            element={<ProductList category={"food"} />}
          ></Route>
          <Route
            path="/special"
            element={<ProductList category={"special"} />}
          ></Route>
          <Route path="/about">{/* AboutPage */}</Route>
          <Route path="/reservation">{/* Reservation */}</Route>
        </Routes>
        <Footer />
      </Container>
    </Router>
  );
}

export default App;
