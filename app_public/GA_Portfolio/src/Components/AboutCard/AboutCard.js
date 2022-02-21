import React from "react";
import Card from "react-bootstrap/Card";


function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, My Self <span className="purple">Dhruvi Patel. </span><br /><br />
            I am a <span className="purple">Web Designer and Developer. </span>
            <br />

            <br />I have completed my   Bachelor's degree in Computer Science from Gandhinagar Institute Of Technology, India.<br />
            <br />

            Currently, I am pursuing my post graduation in Web Developement from Conestoga College, Canada.

          </p>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;