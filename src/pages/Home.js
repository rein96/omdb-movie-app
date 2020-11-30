import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { getMovies } from 'actions/Action.js'
import ModalPoster from 'components/Home/ModalPoster.js'
import MovieCard from 'components/Home/MovieCard'
import './Home.scss'

const Home = ({ getMovies, globalStateMovie }) => {

  const [modal, setModal] = useState({ show: false, selectedMovie: {} })
  const [page, setPage] = useState(1)

  const onClickPoster = (movieId) => {
    const findMovie = globalStateMovie.movies.find(movie => movie.imdbID === movieId)
    setModal({ show: true, selectedMovie: findMovie })
  }

  // Infinite scroll purposes
  const onScroll = (event) => {
    // scrollHeight = maximum amount height content
    // clientHeight = height <section> section-home
    const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;
    if (scrollHeight - scrollTop === clientHeight) {
      setPage(prev => prev + 1);
    }
  }

  useEffect(() => {
    const loadData = async () => {
      getMovies({ searchValue: globalStateMovie.homePageMovie, page, isScroll: true })
    };

    loadData();
    // eslint-disable-next-line
  }, [page])
  // End

  useEffect(() => {
    if (globalStateMovie?.movies.length === 0) {
      getMovies({ searchValue: 'disney', page: 1, isScroll: false })
    }
  }, [])

  return (
    <section className='section-home' onScroll={onScroll}>
      {/* <Navbar /> */}
      <div className='home-body-container'>
        <div className='home-card-container container-helper bg-dark-2'>
          {globalStateMovie.movies.map((movie, index) => {
            return (
              <MovieCard key={movie.imdbID} index={index} movie={movie} onClick={onClickPoster} />
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
