import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { getMovies } from 'actions/Action.js'
import ModalPoster from 'components/Home/ModalPoster.js'
import MovieCard from 'components/Home/MovieCard'
import './Home.scss'

const Home = ({ getMovies, globalStateMovie }) => {

  const [modal, setModal] = useState({ show: false, selectedMovie: {} })

  const onClickPoster = (movieId) => {
    const findMovie = globalStateMovie.movies.find(movie => movie.imdbID === movieId)
    setModal({ show: true, selectedMovie: findMovie })
  }

  useEffect(() => {
    if(globalStateMovie?.movies.length === 0){
      getMovies('disney')
    }
  }, [])

  return (
    <section className='section-home'>
      {/* <Navbar /> */}
      <div className='home-body-container'>
        <div className='home-card-container container-helper bg-dark-2'>
          {globalStateMovie.movies.map(movie => {
            return (
              <MovieCard key={movie.imdbID} movie={movie} onClickPoster={onClickPoster}/>
            )
          })}
        </div>
      </div>
      {
        modal.show
        &&
        <ModalPoster selectedMovie={modal.selectedMovie} setModal={setModal} />
      }
    </section>
  )
}

const mapStateToProps = ({ globalStateMovie }) => {
  return {
    globalStateMovie: globalStateMovie // { movies }
  }
}

export default connect(mapStateToProps, { getMovies })(Home);
