import React from 'react'
import './MovieCard.scss'

function MovieCard({movie, onClickPoster}) {
  return (
    <div key={movie.imdbID} className='card-movie-container cursor-pointer'>
      <img src={movie.Poster} className='movie-poster' alt={movie.Title} onClick={() => onClickPoster(movie.imdbID)} />
      <h4 className='movie-title text-ellipsis color-white'>{movie.Title}</h4>
    </div>
  )
}

export default MovieCard
