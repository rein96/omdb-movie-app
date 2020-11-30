import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { getMovies } from 'actions/Action.js'
import ModalPoster from 'components/Home/ModalPoster.js'
import MovieCard from 'components/Home/MovieCard'
import Loading from 'components/shared/Loading'
import './Home.scss'

const Home = ({ getMovies, globalStateMovie }) => {

  const [modal, setModal] = useState({ show: false, selectedMovie: {} })
  const [HaveBeenScrolled, setHaveBeenScrolled] = useState(false) // to prevent loadData() when from movie detail page to home
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
    setHaveBeenScrolled(true)
    if (scrollHeight - scrollTop === clientHeight) {
      setPage(prev => prev + 1);
    }
  }

  useEffect(() => {
    const loadData = async () => {
      getMovies({ searchValue: globalStateMovie.homePageMovie, page, isScroll: true })
    };

    HaveBeenScrolled && loadData();
    // eslint-disable-next-line
  }, [page])
  // End

  useEffect(() => {
    if (globalStateMovie?.movies.length === 0) {
      getMovies({ searchValue: 'disney', page: 1, isScroll: false })
    }
    // eslint-disable-next-line
  }, [])


  return (
    <section className='section-home' onScroll={onScroll}>
      <div className='home-body-container'>
        <div className='container-helper bg-dark-2'>
          <h2 className='text-center text-white mt-24'> Results for: <span className='text-keyword'>{globalStateMovie.homePageMovie}</span> </h2>
          <div className='home-card-container'>
            {globalStateMovie.loadingMovies
              ?
              <Loading />
              :
              globalStateMovie.movies.map((movie, index) => {
                return (
                  <MovieCard key={movie.imdbID} index={index} movie={movie} onClick={onClickPoster} />
                )
              })}
          </div>
        </div>
      </div>
      {globalStateMovie.scrollHomeLoadingMovies && <Loading />}
      {modal.show && <ModalPoster selectedMovie={modal.selectedMovie} setModal={setModal} />}
    </section>
  )
}

const mapStateToProps = ({ globalStateMovie }) => {
  return {
    globalStateMovie: globalStateMovie // { movies }
  }
}

export default connect(mapStateToProps, { getMovies })(Home);
