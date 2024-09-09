
const redux = require('redux')
const createStore = redux.createStore

const initialState = {
    loading: false,
    user: [],
    error: ''
}



const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST'
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
const FETCH_USERS_FALURE = 'FETCH_USERS_FALURE'

const fetchUserRequest = () => {
    return {
        type: FETCH_USER_REQUEST
    }
}

const fetchUserSuccess = users => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

const fetchUserFalure = error => {
    return {
        type: FETCH_USERS_FALURE,
        payload: error
    }
}


const  reducer = (state = initialState, action) => {
  switch(action.type){
    case FETCH_USER_REQUEST:
    return {
        ...state,
        loading: true
    }

    case FETCH_USERS_SUCCESS:
        return {
            loading: false,
            users: action.payload,
            error:''
    }

    case FETCH_USERS_FALURE:
        return {
         loading: false,
         users: [],
         error: action.payload
    }
  }
}


const store = createStore(reducer)
