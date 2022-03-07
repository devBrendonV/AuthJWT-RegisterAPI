import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Content from "./components/Content";
const Container = styled.div`
  background-color: #000000;
  color: #ffffff;
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
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
      <Content></Content>
  </Container>;
};

export default App;
