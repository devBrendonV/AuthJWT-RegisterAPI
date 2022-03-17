import React, { useContext, useEffect } from "react";
import { CardBody, Container } from "./styles";
import { FaUserCircle } from "react-icons/fa";
import { CgLogOff } from "react-icons/cg";
import { Link } from "react-router-dom";
import { AppContext } from "../../Store";
const LoggedScreen = () => {
  const { loggedemail, loggedname, reloadpage } = useContext(AppContext);

  if (localStorage.getItem("auth-token") === null) {
    localStorage.clear();
    window.location.href = "http://localhost:3000/";
  }

  useEffect(() => {
    reloadpage();
  }, []);

  return (
    <Container>
      <CardBody>
        <Link
          to="/"
          className="logoff"
          title="Logoff"
          onClick={() => localStorage.clear()}
        >
          <CgLogOff></CgLogOff>
        </Link>
        <FaUserCircle className="icon" />
        <h2>Logged as: {loggedname}</h2>
        <h3>Your email: {loggedemail}</h3>
      </CardBody>
    </Container>
  );
};

export default LoggedScreen;
