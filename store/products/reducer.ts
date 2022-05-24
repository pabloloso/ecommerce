import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE
} from './constants'

import { ActionType, InitialStateType } from './types'

const initialState: InitialStateType = {
  error: null,
  isFetching: true,
  products: []
}

const reducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST:
      return {
        ...state
      }

    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        error: null,
        isFetching: false,
        products: action.payload
      }

    case FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false,
        products: []
      }

    default:
      return state
  }
}

export default reducer