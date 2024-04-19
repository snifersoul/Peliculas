import React from 'react'
import { CardPeliculaApp } from './CardPeliculaApp'

export const ListadoPeliculas = ({movies}) => {
  return (
    <>
      <div className="row d-flex justify-content-center">
        <div className="col-sm-10">
          <div className="row">
            {
              movies.map( movie => 
                <div key={movie.id} className="col-sm-12 col-md-6 col-lg-4">
                  <CardPeliculaApp movie={movie} />
                  <div key={movie.release_date} className="col-sm-12 col-md-6 col-lg-4">
                     
                  </div>
                </div>
              )
            }
          </div>
        </div>
      </div>
    </>
  )
}
