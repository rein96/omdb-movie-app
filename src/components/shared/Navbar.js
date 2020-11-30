import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux'
import useDebounce from 'Hooks/useDebounce'
import logo from 'images/RALogoOriginal.png'
import { getMovies, searchMovie, setLoading, setEmptyMovie, setHomePageMovie } from 'actions/Action.js'
import Loading from 'components/shared/Loading.js'
import Movielist from 'components/shared/MovieList.js';
import './Navbar.scss'

function Navbar({ searchMovie, globalStateMovie, getMovies, setEmptyMovie, setHomePageMovie }) {
  const history = useHistory();

  const [searchValue, setSearchValue] = useState('disney')
  const [isFocus, setIsFocus] = useState(false)
  const [page, setPage] = useState(1)
  const [animation, setAnimation] = useState(false)
  const debouncedSearchValue = useDebounce(searchValue, 500);

  const handleOnBlur = () => {
    setTimeout(() => {
      setAnimation(false)
    }, 200);
    setTimeout(() => {
      setIsFocus(false)
    }, 600);
  }

  const handleSearch = (value) => {
    setSearchValue(value)
  }

  const handleKeyDown = (event) => {
    // press enter
    if (event.keyCode === 13 && searchValue) {
      history.push(`/`)
      setHomePageMovie(searchValue)
      getMovies({ searchValue: searchValue, page: 1, isScroll: false })
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
      searchMovie({ searchValue, page, isScroll: true })
    };

    loadData();
    // eslint-disable-next-line
  }, [page])
  // End

  useEffect(() => {
    if (searchValue) {
      searchMovie({ searchValue, page: 1, isScroll: false })
    } else {
      setEmptyMovie()
    }
    // eslint-disable-next-line
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
            onFocus={() => {setIsFocus(true); setAnimation(true)}}
            onBlur={() => handleOnBlur()}
            value={searchValue}
            onChange={(e) => handleSearch(e.target.value, e)}
            onKeyDown={handleKeyDown}
          />
          {
            isFocus
            &&
            <div className={`dropdown-search-container animated ${animation ? 'fadeInDown' : 'fadeOutUp'}`} onScroll={onScroll}>
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
                      globalStateMovie?.searchMovies.map((movie, index) => {
                        return (
                          <Movielist key={movie.imdbID} index={index} onClick={handleClickMovie} movie={movie} />
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

export default connect(mapStateToProps, { searchMovie, setLoading, getMovies, setEmptyMovie, setHomePageMovie })(Navbar);
