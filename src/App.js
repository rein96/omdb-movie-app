import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import './index.scss'

import Navbar from 'components/shared/Navbar'
import Home from 'components/Home/Home'
import MovieDetail from 'components/MovieDetail/MovieDetail.js'


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


// import React, { useEffect } from 'react'
// import {connect} from 'react-redux'
// import logo from './logo.svg';
// import './App.css';
// import { testing } from './actions/Action'

// // import axios from 'axios'

// function App({ testing }) {

//   const hehehe = async () => {
//     const res = await testing()
//     console.log("🚀 ~ file: App.js ~ line 10 ~ hehehe ~ res", res)

//     // const alah = await axios.get('http://www.omdbapi.com?apikey=faf7e5bb&s=Batman&page=2')
//     // console.log("🚀 ~ file: App.js ~ line 15 ~ hehehe ~ alah", alah)
//   }

//   // useEffect(() => {
//   //   hehehe()
//   // }, [])

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <button onClick={() => hehehe()}>TESTING</button>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// // export default App;

// const mapStateToProps = state => {
//   return {
//       objectUser : state.movie // { id, name, username, email, phone_number, is_admin, avatar }
//   }
// }

// export default connect(mapStateToProps,{ testing })(App);