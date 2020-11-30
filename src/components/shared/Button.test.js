import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Button from './Button.js'

afterEach(cleanup)

describe('testing button component', () => {
  it('should be rendered correctly', () =>{
    const { getByTestId } = render(<Button>MOVIE</Button>)
    expect(getByTestId('button')).toHaveTextContent('MOVIE')
  })

  it('should be clicked once', () => {
    const mockCallback = jest.fn();
    const { getByTestId } = render(<Button onClick={mockCallback}>MOVIE</Button>)
    fireEvent.click(getByTestId('button'))
    expect(mockCallback).toHaveBeenCalledTimes(1)
  })
})