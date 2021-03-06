import axios from 'axios'

//there is no need to fetch all review, already fetched with currentProduct

const initialState = []
/* -----------------    ACTION TYPES    ------------------ */

const SET_REVIEW = 'SET_REVIEW'
const ADD_NEW_REVIEW = 'ADD_NEW_REVIEW';

/* ------------     ACTION CREATORS      ------------------ */

export const setReview = reviews => ({type: SET_REVIEW, reviews})
export const addNewReview = review => ({ type: ADD_NEW_REVIEW, review})

/* ------------          REDUCER         ------------------ */

export default function reviewsReducer(state = initialState, action) {
  try {
    switch (action.type) {
      case SET_REVIEW:
       return action.reviews
      case ADD_NEW_REVIEW:
        return [...state, action.review]
      default:
        return state
    }
  } catch (err) {
    console.error(err)
  }
}

/* ------------       THUNK CREATORS     ------------------ */
export const fetchReview = (productId) => async dispatch => {
    try{
        const response = await axios.get(`/api/review?productId=${productId}`);
        const action = setReview(response.data)
        dispatch(action)
    }catch (err) {
        console.error(err)
    }
}

export const createNewReview = (reviewData, productId) => async dispatch => {
  try {
    const response = await axios.post(`/api/review?productId=${productId}`, reviewData);
    const action = addNewReview(response.data)
    dispatch(action)
  } catch (err) {
    console.error(err)
  }
}
