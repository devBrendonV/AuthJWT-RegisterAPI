import React from "react";
import LoggedScreen from "../LoggedScreen";
import LoginCard from "../LoginCard";
import RegisterCard from "../RegisterCard";
import { Container } from "./styles";
import { Switch, Route, Link } from "react-router-dom";
import PageNotFound from "../PageNotFound";
const Content = () => {
  return (
    <Container>
      <Switch>
        <Route exact path="/">
          <LoginCard></LoginCard>
        </Route>
        <Route exact path="/logged">
          <LoggedScreen></LoggedScreen>
        </Route>
        <Route exact path="/register">
          <RegisterCard></RegisterCard>
        </Route>
        <Route path="*">
          <PageNotFound></PageNotFound>
        </Route>
      </Switch>
    </Container>
  );
};

export default Content;
