import React from 'react'
import { useState } from 'react'
import { useFetch } from '../data/AppiPeli'
import {ListadoPeliculas} from '../components/ListadoPeliculas'

export const ActualMoviesApp = () => {
  const [page, SetPage] = useState(1)
  const { data, isLoading, errors } = useFetch(`now_playing`,page)
  const updatePage = (newPage) => {
    SetPage(newPage)
  }
  return (
    <>
      <div className="row">
        <div className="col-sm-12">
          <h1 className="text-center">
            En Cartelera
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
