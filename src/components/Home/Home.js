import React, { useEffect } from 'react'
import Navbar from 'components/shared/Navbar'
import { connect } from 'react-redux'
import { getInitialMovies } from 'actions/Action.js'
import './Home.scss'

const Home = ({ getInitialMovies, globalStateMovie }) => {

  // const getMovieData = async () => {
  //   getInitialMovies()
  //   console.log("🚀 ~ file: Home.js ~ line 10 ~ getMovieData ~ res", res)
  // }

  useEffect(() => {
    // getMovieData()
    getInitialMovies()
  }, [])

  return (
    <section className='section-home'>
      <Navbar />
      <div className='home-body-container'>
        <div className='home-card-container container-helper bg-dark-2'>
          {globalStateMovie.movies.map(movie => {
            return (
              <div key={movie.imdbID} className='card-movie-container'>
                <img src={movie.Poster} className='movie-poster' />
                <h4 className='movie-title text-ellipsis color-white'>{movie.Title}</h4>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

const mapStateToProps = ({ globalStateMovie }) => {
  return {
    globalStateMovie: globalStateMovie // { movie }
  }
}

export default connect(mapStateToProps, { getInitialMovies })(Home);
