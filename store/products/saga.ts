import axios, { AxiosResponse } from 'axios'
import { call, put } from 'redux-saga/effects'

import { Product } from '../../types/Product'

import { fetchProductsSuccess, fetchProductsFailure } from './actions'

const getProducts = () => {
  return axios.get('https://fakestoreapi.com/products')
    .then(response => response)
}

export function * fetchProductsSaga() {
  try {
    const response: AxiosResponse<Product[]> = yield call(getProducts)

    yield put(fetchProductsSuccess(response.data))
  } catch (error) {
    yield put(fetchProductsFailure(error.message))
  }
}