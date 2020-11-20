import Axios from "axios";
import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Global from "../../Global";

export default class PostDepartamentos extends Component {
  cajanumero = React.createRef();
  cajanombre = React.createRef();
  cajalocalidad = React.createRef();
  state = {
    mensaje: "",
    status: false,
  };

  putDepartamento = (e) => {
    e.preventDefault();
    var departamento = {
      numero: parseInt(this.cajanumero.current.value),
      nombre: this.cajanombre.current.value,
      localidad: this.cajalocalidad.current.value,
    };
    var request = "api/departamentos";
    Axios.post(Global.urlApiDepartamentos + request, departamento).then(
      (respuesta) => {
        this.setState({
          mensaje: "Departamento " + departamento.nombre + " añadido",
          status: true,
        });
      }
    );
  };

  render() {
    if (this.state.status == true) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <form onSubmit={this.putDepartamento}>
          <label>Numero:</label>
          <input type="number" ref={this.cajanumero} className="form-control" />
          <label>Nombre</label>
          <input type="text" ref={this.cajanombre} className="form-control" />
          <label>Localidad</label>
          <input
            type="text"
            ref={this.cajalocalidad}
            className="form-control"
          />
          <button className="btn btn-success">Insertar</button>
        </form>
      </div>
    );
  }
}
