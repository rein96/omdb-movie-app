import axios from 'axios'

export default axios.create({
    baseURL: 'http://www.omdbapi.com?apikey=faf7e5bb'
})

// http://www.omdbapi.com?apikey=faf7e5bb&s=Batman&page=2