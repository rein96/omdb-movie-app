import React from 'react'
import { useParams, Route } from 'react-router-dom';

const MovieDetail = () => {

  const { movieId } = useParams()
  console.log("🚀 ~ file: MovieDetail.js ~ line 7 ~ MovieDetail ~ movieId", movieId)

  return (
    <div>
      <h1>MOVIEDETAIL</h1>
    </div>
  )
}

export default MovieDetail
