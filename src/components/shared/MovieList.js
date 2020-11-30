import React from 'react'
import PropTypes from "prop-types";
import './MovieList.scss'

const Interfaces = {
  index: PropTypes.number,
  onClick: PropTypes.func,
  movie: PropTypes.object.isRequired
}
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

MovieList.propTypes = Interfaces

export default MovieList
