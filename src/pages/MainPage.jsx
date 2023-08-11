import { Container, Row } from "react-bootstrap";
import NavBar from "../components/static/NavBar";
import CategoryMenu from "../components/static/CategoryMenu";

const MainPage = () => {
  return (
    <>
      <Row>
        <NavBar />
      </Row>
      <Row >
        <CategoryMenu />
      </Row>
    </>
  );
};
export default MainPage;
