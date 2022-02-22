import React from "react";
import { Col } from "react-bootstrap";
import "./address.css";
import call from "../../Assets/contact.svg";
import axios from 'axios';
import {
  AiFillGithub,

} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

class Address extends React.Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeMessage = this.onChangeMessage.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: '',
      email: '',
      message: '',
      successMsg: ''
    }
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }
  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }
  onChangeMessage(e) {
    this.setState({
      message: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const userData = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message
    };

    axios.post('https://portfolio-dhruvi.herokuapp.com/api/contact', userData)
      .then(res => {
        this.setState({
          successMsg: "Thank you. I got your message. I will get back shortly."
        });
      });
  }
  render() {


    return (
      <div className="App" >
        <Col md={12} className="address"></Col>
        <Col md={12} className="contact-image-container">
          <img className="contact-image" src={call} alt="Contact banner image" />{" "}
          <h1 style={{ color: "#fff", textAlign: "center", padding: "30px" }}>Contact Me</h1>
        </Col>

        <form id="contact-form" onSubmit={this.onSubmit}>
          <div className="form-group">
            {/* <label style={mystyle} htmlFor="name">Name</label> */}
            <input type="text" className="form-control" name="name" value={this.state.name} onChange={this.onChangeName} required placeholder="Name"></input>
          </div>
          <div className="form-group">
            {/* <label style={mystyle} htmlFor="exampleInputEmail1">Email address</label> */}
            <input type="email" className="form-control" name="email" value={this.state.email} onChange={this.onChangeEmail} required placeholder="Email"></input>
          </div>
          <div className="form-group">
            {/* <label style={mystyle} htmlFor="message">Message</label> */}
            <textarea name="message" className="form-control" value={this.state.message} onChange={this.onChangeMessage} required placeholder="Write your message here"></textarea>
          </div>
          <div className="form-group" id='btnsubmit'>
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>

        </form>
        <p style={{ color: "#4fff82", display: "flex", justifyContent: "center", paddingTop: "30px" }} className="successMsg">{this.state.successMsg}</p>
        <Col md={12} className="home-about-social">
          <span>
            I am available on almost every social media. You can message me,
            I will reply within 24 hours.
          </span>
          <br />
          <p>
            Feel free to <span className="purple">connect </span>with me
          </p>
          <ul className="home-about-social-links">
            <li className="social-icons">
              <a
                href="https://github.com/DhruviPatel26"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <AiFillGithub />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/dhruvi-patel-740b20221/"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <FaLinkedinIn />

              </a>
            </li>

          </ul>
        </Col>

      </div >
    );
  }
}


export default Address;
