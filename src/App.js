import "./App.css";
import "./Style/animation.css";

import { Container, Row } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MenuPage from "./pages/MenuPage";
import ResumePage from "./pages/ResumePage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
function App() {
  return (
    <Router>
      <Container className="overlay mx-0 px-0 ">
        <div className=" top-row">
          <NavBar />
        </div>
        <Routes location={"/menu"}>
          {/* <Route path="/" element={<MainPage />}></Route> */}
          <Route path="/resume" element={<ResumePage />}></Route>
          <Route path="/menu" element={<MenuPage />}></Route>
          <Route path="/about">{/* AboutPage */}</Route>
          <Route path="/reservation">{/* Reservation */}</Route>
        </Routes>
        <Footer />
      </Container>
    </Router>
  );
}

export default App;
