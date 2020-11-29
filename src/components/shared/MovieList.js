import React from 'react'
import './MovieList.scss'

function MovieList({ movie, handleClickMovie }) {
  return (
    <div
      className='movie-list text-ellipsis'
      onClick={() => handleClickMovie(movie.imdbID, movie.Title)}
    >
      {movie.Title}
    </div>
  )
}

export default MovieList
