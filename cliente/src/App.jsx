import React, { useContext, useState } from "react";
import styled from "styled-components";
import Content from "./components/Content";
import { BrowserRouter as Router } from "react-router-dom";

import Store from "./Store";
const Container = styled.div`
  background-color: #4090f7;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const URL = "http://localhost:3003/api/puxarUsuarios";
const BRL = "http://localhost:3003/api/registrar";

const App = () => {
  return (
    <Container>
      <Store>
        <Router>
          <Content></Content>
        </Router>
      </Store>
    </Container>
  );
};

export default App;
