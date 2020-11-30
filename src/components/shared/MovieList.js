import React from 'react'
import './MovieList.scss'

function MovieList({ movie, onClick, index }) {
  return (
    <div
      data-testid={`movie-list-${index}`}
      className='movie-list text-ellipsis'
      onClick={() => onClick(movie.imdbID, movie.Title)}
    >
      {movie.Title}
    </div>
  )
}

export default MovieList
