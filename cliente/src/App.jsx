import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Content from "./components/Content";
import {
  BrowserRouter as Router,
} from "react-router-dom";
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

const URL = "http://localhost:3003/api/registrar";

const App = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  async function puxar() {
    const respo = await axios.post(URL, {
      nome: nome,
      email: email,
      senha: senha,
    });
    console.log(respo.data);
  }
  return <Container>
    <Router>
      <Content></Content>
    </Router>
  </Container>;
};

export default App;
