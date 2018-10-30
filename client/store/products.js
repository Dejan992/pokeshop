import axios from 'axios'

const initialState = []
/* -----------------    ACTION TYPES    ------------------ */

const SET_PRODUCTS = 'SET_PRODUCTS'

/* ------------     ACTION CREATORS      ------------------ */

export const setProducts = products => ({type: SET_PRODUCTS, products})

/* ------------          REDUCER         ------------------ */

export default function productsReducer(state = initialState, action) {
  try {
    switch (action.type) {
      case SET_PRODUCTS:
        return action.products
      default:
        return state
    }
  } catch (err) {
    console.error(err)
  }
}

/* ------------       THUNK CREATORS     ------------------ */
export const fetchProducts = () => async dispatch => {
  try {
    const response = await axios.get('/api/products')
    const action = setProducts(response.data)
    dispatch(action)
  } catch (err) {
    console.error(err)
  }
}
