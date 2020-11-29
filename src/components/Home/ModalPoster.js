import React from 'react';
import './ModalPoster.scss';

function ModalPoster({ selectedMovie, setModal }) {
  return (
    <div className="modal-backdrop-container cursor-pointer" onClick={() => setModal({ show: false, selectedMovie: {} })}>
      <div className='modal-container'>
        <div className='modal-card-container cursor-default' onClick={(e) => e.stopPropagation()}>
          <img src={selectedMovie?.Poster} alt={selectedMovie?.Title} />
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
              <button type='button' className='button-app w-100 cursor-pointer'>
                Go To Movie Detail
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalPoster