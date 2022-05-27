import { Product } from 'types/Product'

import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE
} from './constants'

export interface InitialStateType {
  error: null | string,
  isFetching: boolean,
  products: Product[]
}

export interface FetchProductsRequestAction {
  type: typeof FETCH_PRODUCTS_REQUEST
}

export interface FetchProductsSuccessAction {
  type: typeof FETCH_PRODUCTS_SUCCESS
  payload: Product[]
}

export interface FetchProductsFailureAction {
  type: typeof FETCH_PRODUCTS_FAILURE
  payload: string
}

export type ActionType =
  FetchProductsRequestAction
  | FetchProductsSuccessAction
  | FetchProductsFailureAction