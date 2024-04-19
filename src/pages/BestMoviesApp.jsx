import React from 'react'
import { useState } from 'react'
import { useFetch } from '../data/AppiPeli'
import { ListadoPeliculas } from '../components/ListadoPeliculas'


export const BestMoviesApp = () => {
  const [page, SetPage] = useState(1)
  const { data, isLoading, errors } = useFetch(`top_rated`,page)
  const updatePage = (newPage) => {
    SetPage(newPage)
  }
  return (
    <>
      <div className="row">
        <div className="col-sm-12">
          <h1 className="text-center">
            Mejor Calificadas
          </h1>
        </div>
      </div>
      <div className="container">
        {
          isLoading ? <h4>Cargando ... </h4>
          : 
          <div>
            <ListadoPeliculas movies={data.results} />
            
          </div>
        }
        
      </div>
    </>
  )
}
