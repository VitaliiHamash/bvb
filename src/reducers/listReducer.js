import {
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE
  } from '../actions/userTypes'
  
  const initialState = {
    loading: false,
    items: [],
    error: ''
  }
  
  const listReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_USERS_REQUEST:
        return {
          ...state,
          loading: true
        }
      case FETCH_USERS_SUCCESS:
        return {
          ...state,
          loading: false,
          items: state.items.concat(action.payload),
          error: '',
          
        }
      case FETCH_USERS_FAILURE:
        return {
          ...state,
          loading: false,
          
          error: action.payload
        }
      default: return state
    }
  }
  
  export default listReducer