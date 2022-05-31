import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCards from "../Components/ProjectCards/ProjectCards";
import Particle from "../Components/Particles/Particle";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="project-card">
            <ProjectCards

              imgPath="/images/project7.png"
              title="Crack Expense"
              // description="Flipkart is one of the best and trending eCommerce sites with a presence throughout India. The online shopping website is for Buying and Selling products online within the network.Sijeesh Miziha's Flipkart clone is a ready-made remarkable multi-vendor eCommerce site Entrepreneurs can start their own business like Flipkart, it has RazorPay Integration and get money from anywhere, in mobile, web, and iOS platforms, Completely responsive design using Material UI."
              link="https://github.com/DhruviPatel26?tab=repositories"
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCards

              imgPath="/images/project1.png"
              title="PDT Technologies"
              // description="Flipkart is one of the best and trending eCommerce sites with a presence throughout India. The online shopping website is for Buying and Selling products online within the network.Sijeesh Miziha's Flipkart clone is a ready-made remarkable multi-vendor eCommerce site Entrepreneurs can start their own business like Flipkart, it has RazorPay Integration and get money from anywhere, in mobile, web, and iOS platforms, Completely responsive design using Material UI."
              link="https://github.com/DhruviPatel26?tab=repositories"
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCards
              imgPath="/images/project2.png"
              title="The Book Spot"
              // description="Olx-Clone is the potential classified advertisement website that categorizes objects in a user-friendly manner & displayed as an advertisement.., Classifieds can be posted that involve selling, buying, exchanging and will be adding a new feture that organizing to meet people nearby your location."
              link="https://github.com/DhruviPatel26?tab=repositories"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCards
              imgPath="/images/project3.png"
              title="Image Gallery"
              // description="In this small project you can play trailers of the Movies..,but I will be provide regualar updates with more features and functionalities because the entertainment industry is one of the largest online service businesses. The number of people seeking online entertainment is increasing rapidly. Increased leisure time and easier access to entertainment is driving the market forward."
              link="https://github.com/DhruviPatel26?tab=repositories"
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCards
              imgPath="/images/project4.png"
              // style="height:50px;width:40px;object-fit: cover"
              title="Image Gallery in Android"
              // description="In this small project you can play trailers of the Movies..,but I will be provide regualar updates with more features and functionalities because the entertainment industry is one of the largest online service businesses. The number of people seeking online entertainment is increasing rapidly. Increased leisure time and easier access to entertainment is driving the market forward."
              link="https://github.com/DhruviPatel26?tab=repositories"
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCards
              imgPath="/images/project5.png"
              title="Supermarket app"
              // description="In this small project you can play trailers of the Movies..,but I will be provide regualar updates with more features and functionalities because the entertainment industry is one of the largest online service businesses. The number of people seeking online entertainment is increasing rapidly. Increased leisure time and easier access to entertainment is driving the market forward."
              link="https://github.com/DhruviPatel26?tab=repositories"
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCards
              imgPath="/images/project6.png"
              title="Game:Find The Penguins"
              // description="In this small project you can play trailers of the Movies..,but I will be provide regualar updates with more features and functionalities because the entertainment industry is one of the largest online service businesses. The number of people seeking online entertainment is increasing rapidly. Increased leisure time and easier access to entertainment is driving the market forward."
              link="https://github.com/DhruviPatel26?tab=repositories"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Projects;
