import { Container, Row } from "react-bootstrap";
import CategoryMenu from "../components/static/CategoryMenu";

const MainPage = () => {
  return (
    <>
      <Row className="swing-in-right-bck ">
        <CategoryMenu />
      </Row>
    </>
  );
};
export default MainPage;
