import React, { useEffect } from 'react'
// import { useHistory } from 'react-router-dom';
// import Navbar from 'components/shared/Navbar'
import { connect } from 'react-redux'
import { getInitialMovies } from 'actions/Action.js'
import './Home.scss'
// import ModalPoster from './ModalPoster'

const Home = ({ getInitialMovies, globalStateMovie }) => {

  useEffect(() => {
    getInitialMovies()
  }, [])

  return (
    <section className='section-home'>
      {/* <Navbar /> */}
      <div className='home-body-container'>
        <div className='home-card-container container-helper bg-dark-2'>
          {globalStateMovie.movies.map(movie => {
            return (
              <div key={movie.imdbID} className='card-movie-container'>
                <img src={movie.Poster} className='movie-poster' alt={movie.Title}/>
                <h4 className='movie-title text-ellipsis color-white'>{movie.Title}</h4>
              </div>
            )
          })}
        </div>
      </div>
      {/* <ModalPoster /> */}
    </section>
  )
}

const mapStateToProps = ({ globalStateMovie }) => {
  return {
    globalStateMovie: globalStateMovie // { movies }
  }
}

export default connect(mapStateToProps, { getInitialMovies })(Home);
