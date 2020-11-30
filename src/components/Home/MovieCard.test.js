import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import MovieCard from './MovieCard.js'

afterEach(cleanup)

describe('testing card component', () => {
  const movie = { Title: 'Shrek', imdbID: "tt0126029", Poster: "https://m.media-amazon.com/images/M/MV5BOGZhM2FhNTItODAzNi00YjA0LWEyN2UtNjJlYWQzYzU1MDg5L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg" }
  it('should be rendered correctly', () =>{
    const { getByTestId } = render(<MovieCard index={1} movie={movie} onClick={() => {}}/>)
    expect(getByTestId('movie-card-1')).toHaveTextContent('Shrek')
  })

  it('should be clicked once', () => {
    const mockCallback = jest.fn();
    const { getByTestId } = render(<MovieCard index={1} movie={movie} onClick={mockCallback}/>)
    fireEvent.click(getByTestId('movie-card-1'))
    expect(mockCallback).toHaveBeenCalledTimes(1)
  })
})