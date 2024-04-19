import React from "react";
import { NavLink } from "react-router-dom"
export const NavBarApp = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to="/" className="nav-link active" aria-current="page">
                  Populares
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/mejores-peliculas" className="nav-link active" aria-current="page">
                  Mejor Calificadas
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/cartelera" className="nav-link active" aria-current="page">
                  En Cartelera
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/estrenos" className="nav-link active" aria-current="page">
                  Próximos Estrenos
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
