import React from "react";
import { DetailApp } from "./DetailApp";
import { NavLink } from "react-router-dom";
export const CardPeliculaApp = ({movie}) => {
    return (
        <>
        <div className="card m-3 card-movie">
        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="card-img-top" width={500} height={500}/>
        <div className="card-body d-flex justify-content-center flex-column">
          <div className="card-body d-flex justify-content-center flex-column">
          <NavLink to="/Details" className="nav-link active" aria-current="page">
          <div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-primary">Detalle</button>
          </div>
          </NavLink>

          </div>
        </div>
        </div>

        </>
    )
}