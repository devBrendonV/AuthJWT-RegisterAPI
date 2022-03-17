import React, { useContext, useEffect, useState } from "react";
import { CardBody, CardButton, CardInput, Container } from "./styles";
import { Link } from "react-router-dom";
import { BsArrowLeftCircleFill, BsFillCheckCircleFill } from "react-icons/bs";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { FaEye } from "react-icons/fa";

import axios from "axios";

import { AppContext } from "../../Store";
const URL = "http://localhost:3003/api";
let emailRegex =
  /^[a-zA-Z0-9]{6,20}@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
let nameRegex = /^\D((\D{3,})+(\s\D{3,}\b))$/;
const RegisterCard = () => {
  const [validEmail, setValidEmail] = useState("");
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const {
    name,
    email,
    password,
    setName,
    setEmail,
    setPassword,
    register,
    repassword,
    setRepassword,
  } = useContext(AppContext);
  if (localStorage.getItem("auth-token") !== null) {
    window.location.href = "http://localhost:3000/logged";
  }

  function sendRegister(e) {
    e.preventDefault();
    if (
      nameRegex.test(name) &&
      emailRegex.test(email) &&
      password === repassword &&
      password.length >= 6 &&
      validEmail === true
    ) {
      register();
    }
  }
  useEffect(() => {
    if (password.length < 6) {
      setRepassword("");
    }
  }, [password]);

  useEffect(() => {
    setValidEmail(false);
  }, [email.length]);

  const conferir = async () => {
    try {
      setValidEmail(true);
      if (emailRegex.test(email)) {
         await axios.post(`${URL}/checkemail`, {
          email: email,
        });
      }
    } catch (e) {
      setValidEmail(false);
      setInvalidEmail(true);
      setTimeout(() => {
        setEmail("");
        setInvalidEmail(false);
      }, 1000);
    }
  };

  return (
    <Container>
      <Link to="/" className="icon" title="Logoff">
        <BsArrowLeftCircleFill></BsArrowLeftCircleFill>
      </Link>
      <CardBody>
        <h1>Sign Up</h1>
        <form onSubmit={sendRegister}>
          <label htmlFor="name">
            {nameRegex.test(name) === true ? (
              <span className="valid">
                <BsFillCheckCircleFill /> Valid Name
              </span>
            ) : name.trim().length === 0 ? (
              "Enter Your Name"
            ) : (
              <span className="invalid">Invalid Name</span>
            )}
            <CardInput
              required
              dif={!nameRegex.test(name) && name.trim().length > 0}
              sucess={nameRegex.test(name)}
              value={name}
              type="text"
              id="name"
              onChange={(e) => setName(e.target.value)}
              placeholder="Ex: Brendon Victor"
            />
          </label>

          <label htmlFor="email">
            {invalidEmail ? (
              <span className="invalid">Email Already Used</span>
            ) : emailRegex.test(email) && validEmail === true ? (
              <span className="valid">
                <BsFillCheckCircleFill /> Valid Email
              </span>
            ) : emailRegex.test(email) ? (
              "Change the field to check"
            ) : email.length === 0 ? (
              "Enter Your Email:"
            ) : (
              <span className="invalid">Invalid Email</span>
            )}

            <CardInput
              onBlur={conferir}
              required
              dif={
                (!emailRegex.test(email) && email.length > 0) || invalidEmail
              }
              sucess={emailRegex.test(email)}
              value={email}
              type="text"
              id="email"
              onChange={(e) => setEmail(e.target.value.trim())}
              placeholder="Ex: devbrendonvs@gmail.com"
            />
          </label>
          <label htmlFor="password">
            {password.length < 6 && password.length > 0 ? (
              <span className="invalid">Very Short Password</span>
            ) : password.length >= 6 ? (
              <span className="valid">
                <BsFillCheckCircleFill />
                Valid Password
              </span>
            ) : (
              "Enter Your password:"
            )}
            <CardInput
              required
              dif={
                (password !== repassword &&
                  password.length > 0 &&
                  repassword.length > 0) ||
                (password.length > 0 && password.length < 6)
              }
              sucess={
                (password.length >= 6 && repassword.length === 0) ||
                (password.length >= 6 && password === repassword)
              }
              value={password}
              type={showPassword ? "text" : "password"}
              onChange={(e) => setPassword(e.target.value.trim())}
              id="password"
            />
          </label>
          <label htmlFor="repassword">
            {(password !== repassword &&
              password.length > 0 &&
              repassword.length > 0) ||
            (password.length === 0 && repassword.length > 0) ? (
              <span className="invalid">Passwords Do Not Match</span>
            ) : (password === repassword &&
                password.length === 0 &&
                repassword.length === 0) ||
              repassword.length === 0 ? (
              <span className={password.length < 6 ? "disabled" : ""}>
                Confirm Your Password:
              </span>
            ) : (
              <span className="valid">
                <BsFillCheckCircleFill />
                Passwords are the same
              </span>
            )}
            <CardInput
              required
              disabled={password.length < 6}
              dif={
                password !== repassword &&
                password.length > 0 &&
                repassword.length > 0
              }
              sucess={
                repassword === password &&
                repassword.length > 0 &&
                password.length > 0
              }
              value={repassword}
              type={showPassword ? "text" : "password"}
              onChange={(e) => setRepassword(e.target.value.trim())}
              id="repassword"
            />
          </label>
          <CardButton type="submit">Register</CardButton>
        </form>
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
      </CardBody>
    </Container>
  );
};

export default RegisterCard;