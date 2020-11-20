import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Departamentos from "./components/CRUD/Departamentos";
import DetallesDepartamento from "./components/CRUD/DetallesDepartamento";
import MenuCrud from "./components/CRUD/MenuCrud";
import PostDepartamentos from "./components/CRUD/PostDepartamentos";
import PutDepartamento from "./components/CRUD/PutDepartamento";
export default class Router extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <MenuCrud></MenuCrud>
          <Switch>
            <Route path="/" exact component={Departamentos} />
            <Route
              exact
              path="/detalles/:iddepartamento"
              render={(props) => {
                var idDepart = props.match.params.iddepartamento;
                return <DetallesDepartamento iddepartamento={idDepart} />;
              }}
            />
            <Route exact path="/insertar" component={PostDepartamentos} />
            <Route
              exact
              path="/put/:numero/:nombre/:localidad"
              render={(props) => {
                var idDepartamento = props.match.params.numero;
                var nombre = props.match.params.nombre;
                var localidad = props.match.params.localidad;
                return (
                  <PutDepartamento
                    numero={idDepartamento}
                    nombre={nombre}
                    localidad={localidad}
                  />
                );
              }}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
