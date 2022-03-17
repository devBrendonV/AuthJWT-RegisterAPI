import React, { useState} from "react";
import axios from "axios";
const inicialState = {
  name: "",
  email: "",
  password: "",
  repassword: "",
  loggedname: "",
  loggedemail: "",
  errorReceived: "",
};
const URL = "http://localhost:3003/api";
export const AppContext = React.createContext(inicialState);
const Store = (props) => {
  const [state, setState] = useState(inicialState);

  function updateState(key, value) {
    setState({
      ...state,
      [key]: value,
    });
  }
  return (
    <AppContext.Provider
      value={{
        name: state.name,
        email: state.email,
        password: state.password,
        repassword: state.repassword,
        loggedemail: state.loggedemail,
        loggedname: state.loggedname,
        errorReceived: state.errorReceived,
        setName: (n) => updateState("name", n),
        setEmail: (n) => updateState("email", n),
        setPassword: (n) => updateState("password", n),
        setRepassword: (n) => updateState("repassword", n),
        puxarDados: async function () {
          const respo = await axios.post(`${URL}/puxarUsuarios`);
          updateState("name", respo.data[0].nome);
        },
        register: async function () {
          try {
            const respo = await axios.post(`${URL}/register`, {
              name: state.name,
              email: state.email,
              password: state.password,
            });
            window.location.href = "http://localhost:3000/";
          } catch (e) {}
        },
        login: async function () {
          try {
            const respo = await axios.post(`${URL}/login`, {
              email: state.email,
              password: state.password,
            });
            localStorage.setItem("auth-token", respo.data.token);
            setState(inicialState);
          } catch (e) {
            if (TypeError(e).message.includes("302")) {
              updateState("errorReceived", "Email Not Found");
            }
            if (TypeError(e).message.includes("303")) {
              updateState("errorReceived", "Wrong Password");
            }
            setTimeout(() => {
              updateState("errorReceived", "");
            }, 2000);
          }
        },
        reloadpage: async function () {
          const usedtoken = localStorage.getItem("auth-token");
          try {
            const respo = await axios.post(`${URL}/reloadpage`, {
              token: usedtoken,
            });
            setState({
              ...state,
              loggedemail: respo.data.email,
              loggedname: respo.data.name,
            });
          } catch (e) {
            localStorage.clear();
            window.location.href = "http://localhost:3000/";
          }
        },resetData: function(){
          setState(inicialState);
        }
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default Store;
