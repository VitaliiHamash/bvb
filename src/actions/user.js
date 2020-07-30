import axios from 'axios'
import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE
} from './userTypes'

export const fetchUsers = (filters, page='0') => {
  return (dispatch) => {
    dispatch(fetchUsersRequest())
    axios
      .get(`https://api.stackexchange.com/2.2/questions?page=`+`${page}`+`&order=desc&pagesize=20&sort=activity&site=`+`${filters}` ) 
      .then(response => {
        // response.data is the users
        const items = response.data.items
        
        dispatch(fetchUsersSuccess(items))
      })
      .catch(error => {
        // error.message is the error message
        dispatch(fetchUsersFailure(error.message))
      })
  }
}

export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST
  }
}

export const fetchUsersSuccess = items => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: items
  }
}

export const fetchUsersFailure = error => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error
  }
}