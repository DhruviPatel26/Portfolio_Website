import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/myself.png";
import Tilt from "react-parallax-tilt";

function SelfIntro() {
  return (
    <Container fluid className="home-about-section  container-fluid" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />

              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies  &nbsp;</b> and also passionate
                about all things in  &nbsp;<b className="purple">Graphic Designing.</b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing web applications
              with <b className="purple">Node.js</b> and

              <b className="purple">
                {" "}
                Modern Javascript Library and Frameworks
              </b>

              &nbsp; like

              <b className="purple"> React.js and Angular.js</b>

            </p>
          </Col>
          <Col md={3} className="myAvtar">
            <Tilt>
              <img src={myImg} style={{ marginLeft: "50px" }} className="img-fluid" alt="myself" borderRadius="30%" />
            </Tilt>
          </Col>
        </Row>

      </Container>
    </Container>
  );
}
export default SelfIntro;
