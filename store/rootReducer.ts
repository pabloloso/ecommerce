import { combineReducers } from 'redux'

import products from './products/reducer'

const rootReducer = combineReducers({
  products,
})

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer
