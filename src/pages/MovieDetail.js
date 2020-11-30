import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { getMovieDetail } from 'actions/Action.js'
import Loading from 'components/shared/Loading';
import './MovieDetail.scss'

const MovieDetail = () => {
  const { movieId } = useParams()

  const [movieDetail, setMovieDetail] = useState({})
  const [loading, setLoading] = useState(true)

  const getData = async () => {
    setLoading(true)
    const data = await getMovieDetail(movieId)
    console.log("movieDetail ~ data", data)
    if (data) {
      setMovieDetail(data)
    }
    setLoading(false)
  }

  useEffect(() => {
    getData()
    // eslint-disable-next-line
  }, [movieId])

  return (
    <section className='section-movie-detail bg-dark-2'>
      <div className='container-helper'>
        {
          loading
            ?
            <Loading />
            :
            <div className='movie-card-detail-container'>
              <img src={movieDetail?.Poster} alt={movieDetail} />
              <div className='movie-detail-container'>
                <h1>{movieDetail?.Title} ({movieDetail?.Year})</h1>
                <span className='movie-rating'> Rating: {movieDetail?.imdbRating} / 10 ({movieDetail?.imdbVotes})</span>
                <p className='movie-plot'>{movieDetail?.Plot}</p>
              </div>
            </div>
        }

      </div>
    </section>
  )
}

export default MovieDetail
