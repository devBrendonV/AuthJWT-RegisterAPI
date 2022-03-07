import React from "react";
import {
  Container,
  CardBody,
  CardButton,
  CardFooter,
  CardInput,
} from "./styles";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
const LoginCard = () => {
  return (
    <Container>
      <CardBody>
        <FaUserCircle className="icon" />
        <h1>Sign In</h1>
        <CardInput type="text" placeholder="Type Your Email"/>
        <CardInput type="text" placeholder="Type Your Password"/>
        <CardButton>Sign in</CardButton>
        <div className="remember">
          <label htmlFor="remember">
            <input type="checkbox" id="remember" />
            Remember me
          </label>
          <Link to="/register">Forgot Password?</Link>
        </div>
      </CardBody>
      <CardFooter>
        Not a Member ? <Link to="/register">Create a Account</Link>
      </CardFooter>
    </Container>
  );
};

export default LoginCard;
