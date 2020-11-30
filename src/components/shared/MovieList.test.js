import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import MovieList from './MovieList.js'

afterEach(cleanup)

describe('testing card component', () => {
  const movie = { Title: 'Shrek', imdbID: 1 }
  it('should be rendered correctly', () =>{
    const { getByTestId } = render(<MovieList index={1} movie={movie} onClick={() => {}}/>)
    expect(getByTestId('movie-list-1')).toHaveTextContent('Shrek')
  })

  it('should be clicked once', () => {
    const mockCallback = jest.fn();
    const { getByTestId } = render(<MovieList index={1} movie={movie} onClick={mockCallback}/>)
    fireEvent.click(getByTestId('movie-list-1'))
    expect(mockCallback).toHaveBeenCalledTimes(1)
  })
})