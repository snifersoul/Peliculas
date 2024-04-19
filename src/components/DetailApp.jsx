import React from 'react'

export const DetailApp = (movie) => {
  return (
    <>
        <div className="card m-3 card-movie">
        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="card-img-top" width={500} height={500}/>
        <div className="card-body d-flex justify-content-center flex-column">
          <h5 className="card-title text-center">{ movie.title }</h5>
          <h5 className="card-title text-center" >{movie.release_date}</h5>
        </div>
        </div>

    </>
  )
}
