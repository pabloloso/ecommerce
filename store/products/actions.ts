import { Product } from '../../types/Product'

import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE
} from './constants'

import {
  FetchProductsRequestAction,
  FetchProductsSuccessAction,
  FetchProductsFailureAction
} from './types'

export const fetchProductsRequest = (): FetchProductsRequestAction => ({
  type: FETCH_PRODUCTS_REQUEST
})

export const fetchProductsSuccess = (payload: Product[]): FetchProductsSuccessAction => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload
})

export const fetchProductsFailure = (payload: string): FetchProductsFailureAction => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload
})