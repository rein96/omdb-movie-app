import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux'
import useDebounce from '../../Hooks/useDebounce'
import logo from 'images/RALogoOriginal.png'
import { searchMovie, setLoading } from 'actions/Action.js'
import Loading from 'components/shared/Loading.js'
import './Navbar.scss'

function Navbar({ searchMovie, globalStateMovie, setLoading }) {
  const history = useHistory();

  const [searchValue, setSearchValue] = useState('')
  const [isFocus, setIsFocus] = useState(false)
  const debouncedSearchValue = useDebounce(searchValue, 1000);

  const handleOnBlur = () => {
    setTimeout(() => {
      setIsFocus(false)
    }, 500);
  }

  const handleSearch = (searchValue) => {
    setLoading('SET_LOADING_SEARCH_MOVIES')
    setSearchValue(searchValue)
  }

  const handleClickMovie = (imdbID, title) => {
    setSearchValue(title)
    history.push(`/movie/${imdbID}`)
  }

  useEffect(() => {
    searchValue && searchMovie(searchValue)
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
            onChange={(e) => handleSearch(e.target.value)}
          />
          {
            isFocus
            &&
            <div className='dropdown-search-container'>
              {
                globalStateMovie.loadingSearchMovies
                  ?
                  <div className='text-center'>
                    <Loading />
                  </div>
                  :
                  (
                    globalStateMovie?.searchMovies.length === 0
                      ?
                      <h3 className='empty-state-text'>Empty Data</h3>
                      :
                      globalStateMovie?.searchMovies.map(movie => {
                        return (
                          <div className='movie-list' key={movie.imdbID} onClick={() => handleClickMovie(movie.imdbID, movie.Title)}>
                            {movie.Title}
                          </div>
                        )
                      })
                  )
              }
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

export default connect(mapStateToProps, { searchMovie, setLoading })(Navbar);
