import Axios from "axios";
import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Global from "../../Global";

export default class putDepartamento extends Component {
  cajanumero = React.createRef();
  cajanombre = React.createRef();
  cajalocalidad = React.createRef();
  constructor(props) {
    super(props);
  }
  state = {
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
    Axios.put(Global.urlApiDepartamentos + request, departamento).then(
      (respuesta) => {
        this.setState({
          status: true,
        });
        alert("Departamento " + this.props.numero + " modificado");
      }
    );
  };

  render() {
    if (this.state.status) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <form onSubmit={this.putDepartamento}>
          <label>Numero:</label>
          <input
            type="number"
            ref={this.cajanumero}
            className="form-control"
            value={this.props.numero}
            readOnly
          />
          <label>Nombre</label>
          <input
            type="text"
            ref={this.cajanombre}
            className="form-control"
            placeholder={this.props.nombre}
          />
          <label>Localidad</label>
          <input
            type="text"
            ref={this.cajalocalidad}
            className="form-control"
            placeholder={this.props.localidad}
          />
          <button className="btn btn-light">Modificar</button>
        </form>
      </div>
    );
  }
}
