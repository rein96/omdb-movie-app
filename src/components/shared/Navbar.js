import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux'
import useDebounce from 'Hooks/useDebounce'
import logo from 'images/RALogoOriginal.png'
import { getMovies, searchMovie, setLoading, setEmptyMovie } from 'actions/Action.js'
import Loading from 'components/shared/Loading.js'
import Movielist from 'components/shared/MovieList.js';
import './Navbar.scss'

function Navbar({ searchMovie, globalStateMovie, setLoading, getMovies, setEmptyMovie }) {
  const history = useHistory();

  const [searchValue, setSearchValue] = useState('')
  const [isFocus, setIsFocus] = useState(false)
  const [page, setPage] = useState(1)
  const debouncedSearchValue = useDebounce(searchValue, 500);

  const handleOnBlur = () => {
    setTimeout(() => {
      setIsFocus(false)
    }, 500);
  }

  const handleSearch = (value) => {
    setSearchValue(value)
  }

  const handleKeyDown = (event) => {
    // press enter
    if (event.keyCode === 13 && searchValue) {
      getMovies(searchValue)
    }
  }

  const handleClickMovie = (imdbID, title) => {
    setSearchValue(title)
    history.push(`/movie/${imdbID}`)
  }

  // Infinite scroll purposes
  const onScroll = (event) => {
    // scrollHeight = maximum amount height content
    // clientHeight = height div dropdown-search-container
    const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;
    if (scrollHeight - scrollTop === clientHeight) {
      setPage(prev => prev + 1);
    }
  }

  useEffect(() => {
    const loadData = async () => {
      setLoading('SET_LOADING_SCROLL_SEARCH_MOVIES')
      searchMovie({ searchValue, page, isScroll: true })
    };

    loadData();
  }, [page])

  useEffect(() => {
    if (searchValue) {
      searchMovie({ searchValue, page: 1, isScroll: false })
      setLoading('SET_LOADING_SEARCH_MOVIES')
    } else {
      setEmptyMovie()
    }
  }, [debouncedSearchValue])

  return (
    <header className='header-container'>
      <nav className='navbar-container'>
        <img className='movie-brand-logo cursor-pointer' src={logo} alt='movie RA logo' onClick={() => history.push('/')} />
        <div className='search-and-dropdown'>
          <input
            className='search-box'
            type='text'
            placeholder='Search Movie Title...'
            onFocus={() => setIsFocus(true)}
            onBlur={() => handleOnBlur()}
            value={searchValue}
            onChange={(e) => handleSearch(e.target.value, e)}
            onKeyDown={handleKeyDown}
          />
          {
            isFocus
            &&
            <div className='dropdown-search-container' onScroll={onScroll}>
              {
                globalStateMovie.loadingSearchMovies
                  ?
                  <Loading />
                  :
                  (
                    globalStateMovie?.searchMovies.length === 0
                      ?
                      <h3 className='empty-state-text'>Empty Data</h3>
                      :
                      globalStateMovie?.searchMovies.map(movie => {
                        return (
                          <Movielist key={movie.imdbID} handleClickMovie={handleClickMovie} movie={movie} />
                        )
                      })
                  )
              }
              {globalStateMovie.scrollLoading && <Loading />}
            </div>
          }
        </div>
      </nav>
    </header>
  )
}

const mapStateToProps = ({ globalStateMovie }) => {
  return {
    globalStateMovie: globalStateMovie // { searchMovies, searchTotalResults, loadingSearchMovies }
  }
}

export default connect(mapStateToProps, { searchMovie, setLoading, getMovies, setEmptyMovie })(Navbar);
