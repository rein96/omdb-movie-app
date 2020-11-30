import React from 'react'
import PropTypes from "prop-types";
import { fallBackErrorImage } from 'utils/Helper.js'
import './MovieCard.scss'

const Interfaces = {
  index: PropTypes.number,
  onClick: PropTypes.func,
  movie: PropTypes.object.isRequired
}
function MovieCard({index, movie, onClick}) {
  return (
    <div key={movie?.imdbID} data-testid={`movie-card-${index}`} className='card-movie-container cursor-pointer' onClick={() => onClick(movie?.imdbID)}>
      <img src={movie?.Poster} onError={(e) => {e.target.src = fallBackErrorImage}} className='movie-poster' alt={movie?.Title}/>
      <h4 className='movie-title text-ellipsis color-white'>{movie?.Title}</h4>
    </div>
  )
}

MovieCard.propTypes = Interfaces

export default MovieCard
