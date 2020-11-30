import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import './index.scss'

import Navbar from 'components/shared/Navbar'
import Home from 'pages/Home.js'
import MovieDetail from 'pages/MovieDetail.js'


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        {/* <ScrollToTop> */}
        <Route path='/' exact component={Home} />
        <Route path='/movie/:movieId' component={MovieDetail} />
        {/* </ScrollToTop> */}
      </Switch>


    </BrowserRouter>
  )
}

export default App