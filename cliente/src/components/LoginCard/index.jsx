import React, { useContext, useState } from "react";
import {
  Container,
  CardBody,
  CardButton,
  CardFooter,
  CardInput,
} from "./styles";
import { Link } from "react-router-dom";
import { AppContext } from "../../Store";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { FaEye } from "react-icons/fa";
let emailRegex =
  /^[a-zA-Z0-9]{6,20}\@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

const LoginCard = () => {
  const { email, password, setEmail, setPassword, login, resetData, errorReceived } =
    useContext(AppContext);
  const [showPassword, setShowPassword] = useState(false);

  if (localStorage.getItem("auth-token") !== null) {
    window.location.href = "http://localhost:3000/logged";
  }

  function sendLogin(e) {
    e.preventDefault();
    if (emailRegex.test(email)) {
      login();
    }
  }
  return (
    <Container>
      <CardBody>
        <FaUserCircle className="icon" />
        <h1>Sign In</h1>
        <form onSubmit={sendLogin}>
          {errorReceived === "Email Not Found" ? (
            <span>{errorReceived}</span>
          ) : !emailRegex.test(email) && email.length > 0 ? (
            <span>Invalid Email</span>
          ) : (
            ""
          )}

          <CardInput
            value={email}
            autoFocus
            autoCapitalize=""
            type="text"
            onChange={(e) => setEmail(e.target.value.trim())}
            placeholder="Type Your Email"
          />
          {errorReceived === "Wrong Password" ? (
            <span>{errorReceived}</span>
          ) : (
            ""
          )}
          <CardInput
            value={password}
            type={showPassword ? "text" : "password"}
            onChange={(e) => setPassword(e.target.value.trim())}
            placeholder="Type Your Password"
          />
          <CardButton
            disabled={
              email.length === 0 ||
              password.length === 0 ||
              !emailRegex.test(email)
            }
            type="submit"
          >
            Sign in
          </CardButton>
        </form>
      </CardBody>
      <CardFooter>
        Not a Member ? <Link onClick={()=>resetData()} to="/register">Create a Account</Link>
      </CardFooter>
      <button
        className="showpassword"
        title={showPassword ? "Hidden Password" : "Show Password"}
        onClick={() => setShowPassword(!showPassword)}
      >
        {showPassword ? (
          <AiOutlineEyeInvisible></AiOutlineEyeInvisible>
        ) : (
          <FaEye></FaEye>
        )}
      </button>
    </Container>
  );
};

export default LoginCard;
