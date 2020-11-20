import React, { Component } from "react";
import axios from "axios";
import Global from "./../../Global";
import { NavLink, Redirect } from "react-router-dom";

export default class DetallesDepartamento extends Component {
  state = {
    status: false,
    departamento: {},
    iddepartamento: 0,
    delete: false,
  };
  constructor(props) {
    super(props);
  }

  getDetallesDepartamento() {
    var request = "api/Departamentos/" + this.props.iddepartamento;
    axios.get(Global.urlApiDepartamentos + request).then((respuesta) => {
      console.log("entrando");
      this.setState({
        departamento: respuesta.data,
        status: true,
      });
    });
  }
  deleteDepartamento = () => {
    var request = "api/departamentos/" + this.props.iddepartamento;
    axios.delete(Global.urlApiDepartamentos + request).then((respuesta) => {
      this.setState({
        delete: true,
      });
      alert("Departamento " + this.props.iddepartamento + " eliminado");
    });
  };
  componentDidMount() {
    this.getDetallesDepartamento();
  }
  render() {
    if (this.state.delete) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <h1>Numero: {this.state.departamento.numero}</h1>
        <h1>Nombre: {this.state.departamento.nombre}</h1>
        <h1>Localidad: {this.state.departamento.localidad}</h1>
        <button className="btn btn-danger" onClick={this.deleteDepartamento}>
          Eliminar
        </button>
        <NavLink
          className="btn btn-dark"
          to={
            "/put/" +
            this.state.departamento.numero +
            "/" +
            this.state.departamento.nombre +
            "/" +
            this.state.departamento.localidad
          }
        >
          Modificar
        </NavLink>
      </div>
    );
  }
}
