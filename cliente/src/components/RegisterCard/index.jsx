import React from "react";
import { CardBody, CardButton, CardInput, Container } from "./styles";
import { Link } from "react-router-dom";
import { BsArrowLeftCircleFill } from "react-icons/bs";

const RegisterCard = () => {
  return (
    <Container>
      <Link to="/" className="icon">
        <BsArrowLeftCircleFill ></BsArrowLeftCircleFill>
      </Link>
      <CardBody>
      <h1>Sign Up</h1>
        <label htmlFor="name">
          Enter Your name:
          <CardInput type='text' id="name" placeholder="Ex: Brendon Victor"/>
        </label>
        <label htmlFor="email">
          Enter Your Email:
          <CardInput type='text' id="email" placeholder="Ex: devbrendonvs@gmail.com"/>
        </label>
        <label htmlFor="password">
          Enter Your Password:
          <CardInput type='password' id="password" />
        </label>
      <CardButton>Register</CardButton>
      </CardBody>
    </Container>
  );
};

export default RegisterCard;
