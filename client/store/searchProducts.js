import axios from 'axios'

export const SEARCH_PRODUCT = 'SEARCH_PRODUCT'
export const DESTROY_SEARCH = 'DESTROY_SEARCH'
export const searchProduct = (product) => ({
  type: SEARCH_PRODUCT,
  product
})
export const destroySearch = () => ({
  type: DESTROY_SEARCH
})
export const searchedProduct = (searchedItem) => async dispatch => {
  try {
    console.log('we are in thunk', searchedItem)
    const { data } = await axios.get(`/api/products?key=${searchedItem}`)
    console.log('data from get', data);
    dispatch(searchProduct(data))
  } catch (err) {
    console.error(err)
  }
}


//create a new button for clearing the dom and rerendering that part
//

const initialState = {}
export default function searchProductReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_PRODUCT:
      return action.product
    case DESTROY_SEARCH:
      return initialState
    default:
      return state
  }
}
