import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from 'components/shared/Button';
import { fallBackErrorImage } from 'utils/Helper.js'
import './ModalPoster.scss';

function ModalPoster({ selectedMovie, setModal }) {
  const history = useHistory();
  return (
    <div className="modal-backdrop-container cursor-pointer" onClick={() => setModal({ show: false, selectedMovie: {} })}>
      <div className='modal-container'>
        <div className='modal-card-container cursor-default' onClick={(e) => e.stopPropagation()}>
          <img className='poster-image' src={selectedMovie?.Poster} alt={selectedMovie?.Title}  onError={(e) => {e.target.src = fallBackErrorImage}} />
          <div className='modal-detail-container'>
            <div className='upper-detail'>
              <h1 className='mb-24'>
                {selectedMovie?.Title} ({selectedMovie?.Year})
                <div className='movie-type-label'>
                  {selectedMovie?.Type.charAt(0).toUpperCase() + selectedMovie?.Type.slice(1)}
                </div>
              </h1>
              <span className='imdb-id'>IMDB ID: #{selectedMovie?.imdbID}</span>
            </div>
            <div className='lower-detail'>
              <Button className='w-100' onClick={() => history.push(`/movie/${selectedMovie?.imdbID}`)}>
                Go To Movie Detail
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalPoster