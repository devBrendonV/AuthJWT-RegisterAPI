import React from "react";
import LoggedScreen from "../LoggedScreen";
import LoginCard from "../LoginCard";
import RegisterCard from "../RegisterCard";
import { Switch, Route, Link } from "react-router-dom";
import PageNotFound from "../PageNotFound";
const Content = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/logged">
          <LoggedScreen></LoggedScreen>
        </Route>
        <Route exact path="/">
          <LoginCard ></LoginCard>
        </Route>
        <Route exact path="/register">
          <RegisterCard></RegisterCard>
        </Route>
        <Route path="*">
          <PageNotFound></PageNotFound>
        </Route>
      </Switch>
    </div>
  );
};

export default Content;
