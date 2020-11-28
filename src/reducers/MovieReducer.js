// import streetcrownlogodefault from '../images/streetcrown-logo.png'

const init = {
  movies: [],
  totalResults: 0,
}

export default (state = init, action) => {
  switch (action.type) {
    case 'INITIAL_MOVIES':
      const payload = action.payload
      return {
        ...state,
        movies: payload.Search,
        totalResults: payload.totalResults
      }
      // case 'LOGIN_SUCCESS':
      //     const { id, name, username, email, phone_number, is_admin, avatar, addresses } = action.payload
      //     return {
      //         ...state,
      //         id, name, username, email, phone_number, is_admin, avatar, addresses
      //     }

      default:
          return state
  }
}