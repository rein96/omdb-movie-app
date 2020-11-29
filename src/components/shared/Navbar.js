import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import useDebounce from '../../Hooks/useDebounce'
import logo from 'images/RALogoOriginal.png'
import { searchMovie } from 'actions/Action.js'
import Loading from 'components/shared/Loading.js'
import './Navbar.scss'

function Navbar({ searchMovie, globalStateMovie }) {

  const [searchValue, setSearchValue] = useState('')
  const [isFocus, setIsFocus] = useState(false)
  const debouncedSearchValue = useDebounce(searchValue, 1000);


  useEffect(() => {
    searchValue && searchMovie(searchValue)
  }, [debouncedSearchValue])

  return (
    <header className='header-container'>
      <nav className='navbar-container'>
        <img className='movie-brand-logo' src={logo} alt='movie RA logo' />
        <div className='search-and-dropdown'>
          <input
            className='search-box'
            type='text'
            placeholder='Search Movie Title...'
            onFocus={() => setIsFocus(true)}
            // onBlur={() => setIsFocus(false)}
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          {
            isFocus
            &&
            <div className='dropdown-search-container'>
              {
                globalStateMovie.loadingSearchMovies
                  ?
                  <Loading />
                  :
                  globalStateMovie?.searchMovies.map(movie => {
                    return (
                      <div className='movie-list' key={movie.imdbID}>
                        {movie.Title}
                      </div>
                    )
                  })
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

export default connect(mapStateToProps, { searchMovie })(Navbar);
