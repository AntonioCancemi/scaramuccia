import { Col, Row } from "react-bootstrap";

const ResumePage = () => {
  const options = [
    { title: "Menu", path: "/" },
    { title: "Chi siamo", path: "/about" },
    { title: "Contattaci", path: "/contact" },
  ];
  return (
    <>
      <Col xs={12} className=" text-center ">
        <div className="swing-in-right-bck ">
          {options.map((option) => (
            <Row className=" slide-in-blurred-bottom mx-3">
              <Col xs={12} className="my-5 bg-light ">
                <div className="resume-button">
                  <h1>{option.title}</h1>
                </div>
              </Col>
            </Row>
          ))}
        </div>
      </Col>
    </>
  );
};
export default ResumePage;
