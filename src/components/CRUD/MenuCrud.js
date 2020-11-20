import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class MenuCrud extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink className="navbar-brand" to="/">
          Navbar
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/">
                Home <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/insertar">
                Crear Departamentos
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/update">
                Modificar Departamentos
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
