import React, { Component } from "react";
import axios from "axios";
import Global from "../../Global";
import { NavLink } from "react-router-dom";

export default class Departamentos extends Component {
  state = {
    departamentos: [],
    status: false,
  };
  getDepartamentos() {
    var request = "api/Departamentos";
    axios.get(Global.urlApiDepartamentos + request).then((respuesta) => {
      this.setState({
        departamentos: respuesta.data,
        status: true,
      });
    });
  }
  componentDidMount() {
    this.getDepartamentos();
  }
  render() {
    return (
      <div>
        <h1>CRUD Departamentos</h1>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>numero</th>
              <th>nombre</th>
              <th>localidad</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.status == true &&
              this.state.departamentos.map((departamento, index) => {
                return (
                  <tr key={index}>
                    <td>{departamento.numero}</td>
                    <td>{departamento.nombre}</td>
                    <td>{departamento.localidad}</td>
                    <td>
                      <NavLink
                        to={"/detalles/" + departamento.numero}
                        className="btn btn-info"
                      >
                        Detalles
                      </NavLink>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    );
  }
}
