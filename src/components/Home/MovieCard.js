import React, { useState, useEffect } from 'react'
import PropTypes from "prop-types";
import { useHistory } from 'react-router-dom';
import { fallBackErrorImage, isMobile } from 'utils/Helper.js'
import './MovieCard.scss'

const Interfaces = {
  index: PropTypes.number,
  onClick: PropTypes.func,
  movie: PropTypes.object.isRequired
}
function MovieCard({ index, movie, onClick }) {
  const history = useHistory();

  return (
    <div
      key={movie?.imdbID}
      data-testid={`movie-card-${index}`}
      className='card-movie-container cursor-pointer'
      onClick={isMobile() ? () => history.push(`/movie/${movie?.imdbID}`) : () => onClick(movie?.imdbID)}
    >
      <img src={movie?.Poster} onError={(e) => { e.target.src = fallBackErrorImage }} className='movie-poster' alt={movie?.Title} />
      <h4 className='movie-title text-ellipsis color-white'>{movie?.Title}</h4>
    </div>
  )
}

MovieCard.propTypes = Interfaces

export default MovieCard
